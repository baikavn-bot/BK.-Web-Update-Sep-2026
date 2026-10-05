// shared-auth.js (v2) — nhúng vào MỌI trang trong public/baika-suite/*
// Mục tiêu:
//   1) Đăng nhập DÙNG CHUNG với trang chủ (cùng domain -> cùng cookie NextAuth).
//   2) Hiện nút Đăng nhập / Hồ sơ ở góc phải — CHỈ trên trang admin (trang public không hiện gì).
//   3) Với trang admin.html của web con: chỉ cho vào nếu người dùng có quyền
//      với ĐÚNG web con đó (super-admin hoặc được gán). Nếu không -> chặn.
//
// LƯU Ý BẢO MẬT: đây chỉ là lớp chặn ở client cho mượt UX. API phía server
// (dùng requireSiteAccess trong lib/authz) MỚI là nơi bảo vệ dữ liệu thật.

(function () {
  // Suy ra web con từ URL: /finance/admin.html -> "finance"
    function currentSite() {
    var path = location.pathname.toLowerCase();
    if (path.indexOf('/advisory') !== -1) return 'advisory';
    if (path.indexOf('/remote-ops') !== -1) return 'remote-ops';
    if (path.indexOf('/finance') !== -1) return 'finance';
    if (path.indexOf('/legal-tax') !== -1) return 'legal-tax';
    if (path.indexOf('/ceo-blueprint') !== -1) return 'ceo-blueprint';
    if (path.indexOf('/baika-brand-launch-system') !== -1 || path.indexOf('/marketing') !== -1) return 'marketing';
    if (path.indexOf('/baika-ai-operating-system') !== -1 || path.indexOf('/ai-os') !== -1) return 'ai-os';
    return null;
  }
  var SITE = currentSite();
  var IS_ADMIN_PAGE = /\/admin(\.html?)?\/?$/i.test(location.pathname);

  document.addEventListener("DOMContentLoaded", function () {
    // Trang public: KHONG hien UI dang nhap (theo yeu cau). Chi trang admin can widget + gate.
    if (!IS_ADMIN_PAGE) return;
    var box = document.createElement("div");
    box.id = "baika-auth-container";
    box.style.cssText = "position:fixed;top:20px;right:30px;z-index:9999;font-family:'Inter',sans-serif";
    document.body.appendChild(box);

    // Inject anti-devtools shield
    var shield = document.createElement("script");
    shield.src = "/shield.js";
    shield.defer = true;
    document.body.appendChild(shield);

    var here = encodeURIComponent(location.pathname);

    // Lấy phiên + quyền theo site trong 1 lần
    Promise.all([
      fetch("/api/auth/session").then(function (r) { return r.json(); }).catch(function () { return {}; }),
      fetch("/api/v1/me/sites").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }),
    ]).then(function (res) {
      var session = res[0] || {};
      var perm = res[1]; // { isSuperAdmin, sites:[...] } hoặc null nếu chưa đăng nhập
      var loggedIn = session && session.user;

      if (!loggedIn) {
        box.innerHTML =
          '<a href="/sign-in?callbackUrl=' + here + '" ' +
          'style="background:linear-gradient(135deg,#C9A86B,#E6CB92);color:#0A1228;' +
          'padding:10px 24px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:600;">Đăng nhập</a>';
        if (IS_ADMIN_PAGE) guard("Vui lòng đăng nhập để vào trang quản trị.", here);
        return;
      }

      // Nút hồ sơ
      var name = session.user.name || session.user.email || "Tài khoản";
      var avatar = session.user.image ||
        "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=C9A86B&color=fff";
      box.innerHTML =
        '<div style="display:flex;align-items:center;gap:10px;background:rgba(10,18,40,.85);' +
        'border:1px solid rgba(201,168,107,.4);border-radius:50px;padding:6px 16px 6px 6px;color:#fff">' +
        '<img src="' + avatar + '" style="width:32px;height:32px;border-radius:50%">' +
        '<span style="font-size:14px">' + name + '</span>' +
        '<a href="/api/auth/signout?callbackUrl=' + here + '" style="color:#ff6b6b;font-size:13px;text-decoration:none">Đăng xuất</a>' +
        '</div>';

      // Chặn admin web con nếu không có quyền với SITE này
      if (IS_ADMIN_PAGE && SITE) {
        var allowed = perm && (perm.isSuperAdmin || (perm.sites || []).indexOf(SITE) !== -1);
        if (!allowed) guard("Bạn không có quyền quản trị web con này.", here);
      }
    });

    function guard(msg, back) {
      document.body.innerHTML =
        '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;' +
        'background:#060912;color:#EDF1F9;font-family:sans-serif;text-align:center;padding:24px">' +
        '<div><h1 style="font-size:20px;margin-bottom:12px">Không đủ quyền</h1>' +
        '<p style="color:#8A98B3;margin-bottom:20px">' + msg + '</p>' +
        '<a href="/sign-in?callbackUrl=' + back + '" style="color:#C9A86B">Đăng nhập tài khoản khác</a></div></div>';
    }
  });
})();
