/* Solusch: a field of loose points that keeps resolving into one clean shape. */
(() => {
  const c = document.getElementById('field'); if (!c) return;
  const ctx = c.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let W = 0, H = 0, pts = [];
  const count = () => Math.min(200, Math.max(80, Math.floor(innerWidth * innerHeight / 9000)));

  function targets() {
    const wide = innerWidth > 900;
    const cx = W * (wide ? .72 : .5), cy = H * (wide ? .5 : .78), R = Math.min(W, H) * .26;
    pts.forEach((p, i) => { const a = i / pts.length * Math.PI * 2, rr = R * (i % 3 === 0 ? 1 : .96 + Math.random() * .08); p.tx = cx + Math.cos(a) * rr; p.ty = cy + Math.sin(a) * rr; });
  }
  function resize() {
    W = c.width = Math.floor(innerWidth * dpr); H = c.height = Math.floor(innerHeight * dpr);
    c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px';
    pts = Array.from({ length: count() }, () => ({ x: Math.random() * W, y: Math.random() * H, tx: 0, ty: 0, vx: (Math.random() - .5) * .35 * dpr, vy: (Math.random() - .5) * .35 * dpr, r: (1 + Math.random() * 1.6) * dpr, teal: Math.random() < .4 }));
    targets();
    if (reduced) { pts.forEach(p => { p.x = p.tx; p.y = p.ty; }); draw(true); }
  }
  function draw(gather) {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = dpr;
    const max = (gather ? 70 : 110) * dpr, max2 = max * max;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
      if (d2 < max2) { ctx.strokeStyle = `rgba(124,140,255,${(1 - Math.sqrt(d2) / max) * (gather ? .5 : .2)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    for (const p of pts) { ctx.fillStyle = p.teal ? 'rgba(62,230,196,.9)' : 'rgba(124,140,255,.9)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
  }
  const t0 = performance.now();
  function frame(now) {
    const cyc = (now - t0) % 12000, gather = cyc > 5000 && cyc < 10500;
    for (const p of pts) {
      if (gather) { p.x += (p.tx - p.x) * .035; p.y += (p.ty - p.y) * .035; }
      else { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
    }
    draw(gather);
    requestAnimationFrame(frame);
  }
  addEventListener('resize', resize, { passive: true });
  resize();
  if (!reduced) requestAnimationFrame(frame);
  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
