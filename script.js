// ===== PARTICULAS MAGICAS =====
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#9B59B6', '#2ECC71', '#7B2FBE', '#27AE60', '#8E44AD'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(particle);
    }
}
createParticles();

// ===== CONTAGEM REGRESSIVA PARA A GUERRA (TODO DOMINGO 19:00) =====
function getNextSunday() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 6 = Sábado
    const daysUntilSunday = day === 0 ? 0 : 7 - day;
    
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(19, 0, 0, 0);
    
    // Se já passou das 19:00 no domingo, vai para o próximo
    if (day === 0 && now.getHours() >= 19) {
        nextSunday.setDate(now.getDate() + 7);
    }
    
    return nextSunday;
}

function updateCountdown() {
    const targetDate = getNextSunday();
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;
    
    if (diff <= 0) {
        document.getElementById('guerraCountdown').textContent = '🔥 JÁ COMEÇOU!';
        document.getElementById('countdown').textContent = '🔥 HOJE!';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const countdownStr = `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    document.getElementById('guerraCountdown').textContent = countdownStr;
    document.getElementById('countdown').textContent = `${days}d ${String(hours).padStart(2, '0')}h`;
}

// Atualizar a cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== COPY IP =====
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-copy');
        navigator.clipboard.writeText(text).then(() => {
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check" style="color: #2ECC71;"></i>';
            setTimeout(() => {
                btn.innerHTML = originalIcon;
            }, 2000);
        });
    });
});

// ===== ANIMATED COUNTERS =====
const stats = document.querySelectorAll('.stat-number:not(#countdown)');

const animateCounter = (el) => {
    const target = el.getAttribute('data-target');
    if (target && target.includes('+')) {
        el.textContent = target;
        return;
    }
    
    const numTarget = parseFloat(target);
    if (isNaN(numTarget)) return;
    
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = ease * numTarget;

        el.textContent = Math.floor(current);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = numTarget;
        }
    };

    requestAnimationFrame(update);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

// ===== ANIMAÇÃO DE ENTRADA AO SCROLL =====
const revealElements = document.querySelectorAll('.info-card, .update-item, .staff-card, .rule-item, .anuncio-card, .sobre-text');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    revealObserver.observe(el);
});

// ===== EFEITO DE PARALLAX NO HERO =====
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    shapes.forEach((shape, index) => {
        const speed = 1 + index * 0.3;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ===== EASTER EGGS =====
console.log('%c🐭 six on top 🐭', 'font-size:20px; color:#9B59B6; font-weight:bold;');
console.log('%c✨ feito por saulofuzi 💜', 'font-size:14px; color:#2ECC71;');
console.log('🐭 Minezinho Magis - Site carregado com sucesso! 💜');
