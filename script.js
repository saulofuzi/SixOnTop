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

// Fechar menu ao clicar em um link
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
            const originalText = btn.textContent;
            btn.textContent = '✅';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        });
    });
});

// ===== ANIMATED COUNTERS =====
const stats = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = ease * target;

        if (isDecimal) {
            el.textContent = current.toFixed(2);
        } else {
            el.textContent = Math.floor(current);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            if (isDecimal) {
                el.textContent = target.toFixed(2);
            } else {
                el.textContent = target;
            }
        }
    };

    requestAnimationFrame(update);
};

// Intersection Observer para os contadores
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

// ===== ADICIONAR ATUALIZAÇÃO =====
document.getElementById('addUpdateBtn').addEventListener('click', () => {
    const date = prompt('Digite a data (DD/MM/AAAA):');
    if (!date) return;
    const title = prompt('Digite o título da atualização:');
    if (!title) return;
    const description = prompt('Digite a descrição:');
    if (!description) return;

    const updateList = document.getElementById('updatesList');
    const newUpdate = document.createElement('div');
    newUpdate.className = 'update-item';
    newUpdate.innerHTML = `
        <div class="update-date">${date}</div>
        <div class="update-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    updateList.prepend(newUpdate);
});

// ===== ADICIONAR STAFF =====
document.getElementById('addStaffBtn').addEventListener('click', () => {
    const name = prompt('Digite o nome do staff:');
    if (!name) return;
    const role = prompt('Digite o cargo:');
    if (!role) return;
    const desc = prompt('Digite a descrição:');
    if (!desc) return;
    const emoji = prompt('Digite um emoji para o avatar (ex: 👑):');
    if (!emoji) return;

    const staffGrid = document.getElementById('staffGrid');
    const newStaff = document.createElement('div');
    newStaff.className = 'staff-card';
    newStaff.innerHTML = `
        <div class="staff-avatar" style="background: linear-gradient(135deg, #7B2FBE, #9B59B6);">${emoji}</div>
        <h4>${name}</h4>
        <span class="staff-role" style="color: #9B59B6;">${role}</span>
        <p>${desc}</p>
    `;
    staffGrid.appendChild(newStaff);
});

// ===== ADICIONAR REGRA =====
document.getElementById('addRuleBtn').addEventListener('click', () => {
    const rules = document.querySelectorAll('.rule-item');
    const number = String(rules.length + 1).padStart(2, '0');
    const title = prompt('Digite o título da regra:');
    if (!title) return;
    const desc = prompt('Digite a descrição da regra:');
    if (!desc) return;

    const rulesContainer = document.getElementById('rulesContainer');
    const newRule = document.createElement('div');
    newRule.className = 'rule-item';
    newRule.innerHTML = `
        <span class="rule-number" style="color: #9B59B6;">${number}</span>
        <div class="rule-text">
            <h4>${title}</h4>
            <p>${desc}</p>
        </div>
    `;
    rulesContainer.appendChild(newRule);
});

// ===== ADICIONAR NOVIDADE =====
document.getElementById('addNewsBtn').addEventListener('click', () => {
    const title = prompt('Digite o título da novidade:');
    if (!title) return;
    const desc = prompt('Digite a descrição:');
    if (!desc) return;
    const date = prompt('Digite a data (DD/MM/AAAA):');
    if (!date) return;
    const tag = prompt('Digite a tag (ex: Evento, Update, Comunidade):');
    if (!tag) return;

    const newsGrid = document.getElementById('newsGrid');
    const newNews = document.createElement('div');
    newNews.className = 'news-card';
    newNews.innerHTML = `
        <div class="news-image">
            <img src="https://via.placeholder.com/500x280/2d2d44/9B59B6?text=${encodeURIComponent(tag)}" alt="${tag}" />
            <span class="news-tag" style="background: #9B59B6;">${tag}</span>
        </div>
        <div class="news-body">
            <h3>${title}</h3>
            <p>${desc}</p>
            <span class="news-date">📅 ${date}</span>
        </div>
    `;
    newsGrid.prepend(newNews);
});

// ===== ANIMAÇÃO DE ENTRADA AO SCROLL =====
const revealElements = document.querySelectorAll('.info-card, .update-item, .staff-card, .rule-item, .news-card');

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
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    revealObserver.observe(el);
});

console.log('🐭 Minezinho Magis - Site carregado com sucesso! 💜');
