(function() {
  // Prevent Right Click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Prevent common DevTools keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
    }
    // Ctrl+Shift+I (Windows) / Cmd+Opt+I (Mac)
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'i')) {
      e.preventDefault();
    }
    // Ctrl+Shift+J (Windows) / Cmd+Opt+J (Mac)
    if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.metaKey && e.altKey && e.key === 'j')) {
      e.preventDefault();
    }
    // Ctrl+Shift+C (Windows) / Cmd+Opt+C (Mac) - Inspector
    if ((e.ctrlKey && e.shiftKey && e.key === 'C') || (e.metaKey && e.altKey && e.key === 'c')) {
      e.preventDefault();
    }
    // Ctrl+U (Windows) / Cmd+Opt+U (Mac) - View Source
    if ((e.ctrlKey && e.key === 'u') || (e.metaKey && e.key === 'u')) {
      e.preventDefault();
    }
  });

  // Clear console periodically to deter casual inspection
  setInterval(function() {
    console.clear();
    console.log("%cSTOP! Dừng Lại!", "color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0px black;");
    console.log("%cĐây là khu vực dành cho nhà phát triển. Mọi hành vi cố tình can thiệp vào hệ thống đều được ghi nhận.", "color: #C9A86B; font-size: 16px;");
  }, 3000);
})();
