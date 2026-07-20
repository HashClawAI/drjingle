(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  class SignalField {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.points = [];
      this.raf = 0;
      this.resize = this.resize.bind(this);
      this.draw = this.draw.bind(this);
      this.resize();
      this.spawn();
      window.addEventListener('resize', this.resize, { passive: true });
      this.raf = requestAnimationFrame(this.draw);
    }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.canvas.width = this.w * dpr;
      this.canvas.height = this.h * dpr;
      this.canvas.style.width = `${this.w}px`;
      this.canvas.style.height = `${this.h}px`;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.spawn();
    }

    spawn() {
      const count = Math.max(42, Math.min(92, Math.round(this.w / 18)));
      this.points = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        phase: Math.random() * Math.PI * 2,
        hot: index % 9 === 0,
      }));
    }

    draw() {
      const { ctx, w, h, points } = this;
      ctx.clearRect(0, 0, w, h);

      for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;
        point.phase += 0.018;

        if (point.x < -20) point.x = w + 20;
        if (point.x > w + 20) point.x = -20;
        if (point.y < -20) point.y = h + 20;
        if (point.y > h + 20) point.y = -20;
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 142) continue;
          const alpha = (1 - distance / 142) * 0.14;
          ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const point of points) {
        const glow = 0.3 + Math.sin(point.phase) * 0.18;
        ctx.fillStyle = point.hot
          ? `rgba(246, 193, 91, ${0.35 + glow})`
          : `rgba(103, 232, 249, ${0.24 + glow})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();
      }

      this.raf = requestAnimationFrame(this.draw);
    }
  }

  function initReadProgress() {
    const bar = document.getElementById('dj-read-progress');
    const article = document.querySelector('.dj-article');
    if (!bar || !article) return;

    bar.classList.add('is-active');
    const update = () => {
      const top = article.getBoundingClientRect().top;
      const total = Math.max(article.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-top, 0), total);
      bar.style.width = `${(scrolled / total) * 100}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  function initReveal() {
    const nodes = document.querySelectorAll('.dj-reveal');
    if (!nodes.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    nodes.forEach((node) => observer.observe(node));
  }

  function initQuantumOrbit() {
    const orbit = document.querySelector('.dj-avatar-hero .dj-avatar-orbit');
    if (!orbit || prefersReduced) return;

    let angle = Math.random() * 360;
    let radius = 154;
    let scale = 1;
    let timer = 0;
    let raf = 0;
    let lastFrame = 0;
    let rotateUntil = 0;
    let speed = 22;
    const radii = [112, 128, 146, 164, 184];
    const randomBetween = (min, max) => min + Math.random() * (max - min);
    const choose = (items) => items[Math.floor(Math.random() * items.length)];

    const applyState = ({ duration = 80, jumping = false } = {}) => {
      orbit.style.setProperty('--q-angle', `${angle}deg`);
      orbit.style.setProperty('--q-radius', `${radius}px`);
      orbit.style.setProperty('--q-scale', scale.toFixed(2));
      orbit.style.setProperty('--q-duration', `${Math.round(duration)}ms`);
      orbit.classList.toggle('is-jumping', jumping);
    };

    const flash = () => {
      orbit.classList.add('is-flashing');
      window.setTimeout(() => orbit.classList.remove('is-flashing'), 220);
    };

    const rotate = (timestamp) => {
      if (!lastFrame) lastFrame = timestamp;
      const delta = Math.min(timestamp - lastFrame, 48);
      lastFrame = timestamp;
      angle += (delta / 1000) * speed;
      applyState({ duration: 70, jumping: false });

      if (timestamp < rotateUntil) {
        raf = window.requestAnimationFrame(rotate);
        return;
      }

      raf = 0;
      timer = window.setTimeout(jump, randomBetween(120, 460));
    };

    const startRotate = () => {
      lastFrame = 0;
      speed = randomBetween(18, 34) * (Math.random() > 0.22 ? 1 : -1);
      rotateUntil = performance.now() + randomBetween(2400, 4800);
      raf = window.requestAnimationFrame(rotate);
    };

    const jump = () => {
      const longHop = Math.random() > 0.66;
      const direction = Math.random() > 0.5 ? 1 : -1;
      window.cancelAnimationFrame(raf);
      raf = 0;

      angle += direction * randomBetween(longHop ? 128 : 38, longHop ? 252 : 118);
      radius = choose(radii) + randomBetween(-8, 8);
      scale = randomBetween(0.72, 0.92);
      applyState({ duration: randomBetween(120, 230), jumping: true });

      window.setTimeout(() => {
        orbit.classList.remove('is-jumping');
        scale = randomBetween(0.96, 1.16);
        applyState({ duration: randomBetween(240, 520), jumping: false });
        flash();
        timer = window.setTimeout(startRotate, randomBetween(260, 820));
      }, randomBetween(90, 180));
    };

    orbit.classList.add('is-quantum-random');
    radius = choose(radii) + randomBetween(-8, 8);
    applyState({ duration: 0, jumping: false });
    timer = window.setTimeout(startRotate, randomBetween(180, 520));

    window.addEventListener('pagehide', () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(raf);
    }, { once: true });
  }

  function boot() {
    const canvas = document.getElementById('dj-cosmos');
    if (canvas && !prefersReduced) new SignalField(canvas);
    initReadProgress();
    initReveal();
    initQuantumOrbit();
    initShareBar();
  }

  function initShareBar() {
    document.querySelectorAll('[data-wechat-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = document.getElementById('dj-wechat-qr');
        if (!panel) return;
        const open = panel.hasAttribute('hidden');
        panel.toggleAttribute('hidden', !open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    document.querySelectorAll('[data-copy-link]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const url = btn.getAttribute('data-copy-link');
        if (!url) return;
        try {
          await navigator.clipboard.writeText(url);
        } catch {
          const input = document.createElement('input');
          input.value = url;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          input.remove();
        }
        const bar = btn.closest('[data-share-bar]');
        const toast = bar?.querySelector('[data-copy-toast]');
        if (!toast) return;
        toast.hidden = false;
        window.setTimeout(() => {
          toast.hidden = true;
        }, 2200);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
