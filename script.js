/* ===========================
   PARTICLE CANVAS
   =========================== */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: count }, () => ({
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(0.5, 2),
      vx: randomBetween(-0.15, 0.15),
      vy: randomBetween(-0.15, 0.15),
      alpha: randomBetween(0.2, 0.7),
      pulse: randomBetween(0, Math.PI * 2),
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connection lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124,106,255,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      p.pulse += 0.015;
      const pulseFactor = 0.85 + 0.15 * Math.sin(p.pulse);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124,106,255,${p.alpha * pulseFactor})`;
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      if (p.y < -5) p.y = H + 5;
      if (p.y > H + 5) p.y = -5;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
})();


/* ===========================
   NAV SCROLL STYLE
   =========================== */
(function initNav() {
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Mobile menu toggle
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // Close mobile menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();


/* ===========================
   TYPEWRITER EFFECT
   =========================== */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  const phrases = [
    'Flutter apps.',
    'mobile experiences.',
    'Firebase backends.',
    'cross-platform UIs.',
    'Supabase APIs.',
    'things that ship.',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pauseTimer = null;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex === phrase.length) {
        isDeleting = true;
        pauseTimer = setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 70);
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 35);
    }
  }

  tick();
})();


/* ===========================
   SCROLL REVEAL (IntersectionObserver)
   =========================== */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );

  // Stagger children of each section
  document.querySelectorAll('.reveal').forEach((el, i) => {
    observer.observe(el);
  });

  // Hero elements visible immediately after a short delay
  const heroReveals = document.querySelectorAll('.hero .reveal');
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });
})();


/* ===========================
   3D TILT on project cards
   =========================== */
(function initTilt() {
  const cards = document.querySelectorAll('.project-card:not(.card-cta)');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = -dy * 6;
      const tiltY = dx * 6;
      card.style.transform = `translateY(-5px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.transformStyle = 'preserve-3d';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


/* ===========================
   SMOOTH ACTIVE NAV LINKS
   =========================== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.style.color = isActive ? '#fff' : '';
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(s => observer.observe(s));
})();
