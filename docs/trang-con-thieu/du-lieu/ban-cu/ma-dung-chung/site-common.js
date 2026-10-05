/* ===== BAIKA — hanh vi dung chung cho ca 7 web con =====
   wireCarousel() + reveal-on-scroll + magnetic buttons.
   Giong het nhau o ca 7 site (da xac nhan hash MD5 trung khop truoc khi
   tach) — tach ra day de trinh duyet cache 1 lan, dung lai khi khach
   dieu huong qua nhieu web con trong cung phien, khong doi hanh vi.
   ================================================================= */
(function(){
  'use strict';

  function wireCarousel(trackId, dotsId){
    var track=document.getElementById(trackId); if(!track) return;
    var wrapEl=track.closest('.carousel'); if(!wrapEl) return;
    var dots=dotsId?document.getElementById(dotsId):null;
    var prevBtn=wrapEl.querySelector('[data-dir="-1"]'), nextBtn=wrapEl.querySelector('[data-dir="1"]');
    function step(){ var c=track.children[0]; if(!c) return 260; var cs=getComputedStyle(track); return c.getBoundingClientRect().width+parseFloat(cs.gap||cs.columnGap||14); }
    function buildDots(){ if(!dots) return; dots.innerHTML=[].slice.call(track.children).map(function(_,i){ return '<button type="button" class="car-dot" data-i="'+i+'" aria-label="Đến mục '+(i+1)+'"></button>'; }).join(''); }
    function update(){
      var idx=Math.round(track.scrollLeft/step());
      if(dots) dots.querySelectorAll('.car-dot').forEach(function(d,i){ d.classList.toggle('on', i===idx); });
      if(prevBtn) prevBtn.disabled = track.scrollLeft<4;
      if(nextBtn) nextBtn.disabled = track.scrollLeft > track.scrollWidth-track.clientWidth-4;
    }
    buildDots(); update();
    track.addEventListener('scroll', function(){ requestAnimationFrame(update); }, {passive:true});
    if(prevBtn) prevBtn.onclick=function(){ track.scrollBy({left:-step(),behavior:'smooth'}); };
    if(nextBtn) nextBtn.onclick=function(){ track.scrollBy({left:step(),behavior:'smooth'}); };
    if(dots) dots.addEventListener('click', function(e){ var d=e.target.closest('.car-dot'); if(!d) return; track.scrollTo({left:parseInt(d.getAttribute('data-i'))*step(),behavior:'smooth'}); });
    track.addEventListener('wheel', function(e){ if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){ track.scrollLeft+=e.deltaY; e.preventDefault(); } }, {passive:false});
    track.tabIndex=0;
    track.addEventListener('keydown', function(e){
      if(e.key==='ArrowRight'){ track.scrollBy({left:step(),behavior:'smooth'}); e.preventDefault(); }
      if(e.key==='ArrowLeft'){ track.scrollBy({left:-step(),behavior:'smooth'}); e.preventDefault(); }
    });
    var isDown=false, sx=0, ssl=0, moved=false;
    track.addEventListener('mousedown', function(e){ isDown=true; moved=false; track.classList.add('grabbing'); sx=e.pageX; ssl=track.scrollLeft; });
    window.addEventListener('mouseup', function(){ isDown=false; track.classList.remove('grabbing'); });
    window.addEventListener('mousemove', function(e){ if(!isDown) return; var dx=e.pageX-sx; if(Math.abs(dx)>4) moved=true; track.scrollLeft=ssl-dx; });
    track.addEventListener('click', function(e){ if(moved){ e.preventDefault(); e.stopPropagation(); moved=false; } }, true);
  }

  function wireReveal(){
    var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          var d=Array.prototype.indexOf.call(e.target.parentElement.children,e.target)%5;
          e.target.style.transitionDelay=(d*35)+'ms';
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    },{threshold:.01, rootMargin:'0px 0px 180px 0px'}):null;
    document.querySelectorAll('.rv').forEach(function(el){ if(io)io.observe(el); else el.classList.add('on'); });
  }

  function wireMagnet(reduce){
    if(reduce) return;
    document.querySelectorAll('.magnet').forEach(function(b){
      b.addEventListener('mousemove', function(e){
        var r=b.getBoundingClientRect();
        var mx=(e.clientX-r.left-r.width/2)*.25, my=(e.clientY-r.top-r.height/2)*.35;
        b.style.transform='translate('+mx+'px,'+my+'px)';
      });
      b.addEventListener('mouseleave', function(){ b.style.transform=''; });
    });
  }

  window.BaikaSite = { wireCarousel: wireCarousel, wireReveal: wireReveal, wireMagnet: wireMagnet };
})();
