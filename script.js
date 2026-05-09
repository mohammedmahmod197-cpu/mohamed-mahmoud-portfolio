 const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  function animateRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing); }
  animateRing();

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => obs.observe(el));

  // Hover effects for cursor
  document.querySelectorAll('a, button, .skill-card, .project-card, .stat-box').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%, -50%) scale(2)'; ring.style.transform = 'translate(-50%, -50%) scale(1.5)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1)'; ring.style.transform = 'translate(-50%, -50%) scale(1)'; });
  });