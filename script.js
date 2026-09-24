    (function createParticles() {
      const container = document.getElementById('particles');
      const count = window.innerWidth < 500 ? 18 : 28;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
        p.style.opacity = 0.3 + Math.random() * 0.4;
        container.appendChild(p);
      }
    })();

    // ===== فیکس سایز عکس لوگو =====
(function fixLogoImage() {
  const logo = document.querySelector('.logo');
  if (!logo) return;

  // اگر عکس بود
  if (logo.tagName === 'IMG') {
    logo.style.width = '100%';
    logo.style.height = '100%';
    logo.style.objectFit = 'cover';
    logo.style.objectPosition = 'center';
    logo.style.display = 'block';
    logo.style.borderRadius = '50%';
  }

  const wrapper = document.querySelector('.logo-wrapper');
  if (wrapper) {
    wrapper.style.overflow = 'hidden';
    wrapper.style.borderRadius = '50%';
  }
})();

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
        ripple.style.marginLeft = -ripple.offsetWidth / 2 + 'px';
        ripple.style.marginTop = -ripple.offsetHeight / 2 + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, i) => {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(16px)';
      setTimeout(() => {
        btn.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, 400 + i * 90);
    });

    const card = document.getElementById('card');
    if (window.matchMedia('(hover: hover)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
        card.style.transition = 'transform 0.5s ease';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
      });
    }

    let lastTouch = 0;
    document.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTouch <= 300) e.preventDefault();
      lastTouch = now;
    }, { passive: false });