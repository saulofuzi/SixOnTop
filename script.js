// =====================================================
//  SCRIPT PRINCIPAL – CORRIGIDO
// =====================================================

document.addEventListener('DOMContentLoaded', function() {

  // ===== ANIMAÇÃO DE NÚMEROS (COUNTER) =====
  function animateNumbers() {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = Math.max(1, Math.floor(target / 60));
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          return;
        }
        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      };
      updateCounter();
    });
  }

  // ===== OBSERVER PARA ANIMAÇÃO AO SCROLL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        if (entry.target.id === 'conquistas') {
          const items = entry.target.querySelectorAll('.conquistas-lista li');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
            }, 200 * index);
          });
        }
        
        if (entry.target.id === 'galeria') {
          const items = entry.target.querySelectorAll('.galeria-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 200 * index);
          });
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // ===== PREENCHER CONTEÚDO =====

  // ----- FUNDADORES (siteData.membros) -----
  const fundadoresGrid = document.getElementById('fundadores-grid');
  if (fundadoresGrid && siteData.membros) {
    fundadoresGrid.innerHTML = siteData.membros.lista.map(membro => `
      <div class="membro-card">
        <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" onerror="this.src='imagens/default.png'">
        <h3>${membro.nome}</h3>
        <p>${membro.cargo}</p>
        <div class="membro-badge">👑</div>
      </div>
    `).join('');
  } else {
    console.warn('Fundadores não encontrados!');
  }

  // ----- MEMBROS ATUAIS (siteData.membrosAtuais) -----
  const membrosGrid = document.getElementById('membros-grid');
  if (membrosGrid && siteData.membrosAtuais) {
    membrosGrid.innerHTML = siteData.membrosAtuais.lista.map(membro => `
      <div class="membro-card">
        <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" onerror="this.src='imagens/default.png'">
        <h3>${membro.nome}</h3>
        <p>${membro.cargo}</p>
      </div>
    `).join('');
  } else {
    console.warn('Membros não encontrados!');
  }

  // ----- TIERS -----
  const tiersContainer = document.getElementById('tiers-container');
  if (tiersContainer && siteData.tiers) {
    const mcTiers = siteData.tiers.lista.filter(t => t.categoria === 'MCTier');
    const subTiers = siteData.tiers.lista.filter(t => t.categoria === 'SubTier');
    
    let html = '';
    if (mcTiers.length) {
      html += `<div class="tier-categoria"><h3>⭐ MCTiers</h3><div class="tiers-grid">`;
      mcTiers.forEach(t => {
        html += `
          <div class="tier-card" style="border-color: ${t.cor}">
            <img src="${t.icone}" alt="${t.tier}" loading="lazy" onerror="this.src='imagens/default-tier.png'">
            <div class="tier-nome">${t.tier}</div>
            <div class="tier-desc">${t.nome}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    }
    if (subTiers.length) {
      html += `<div class="tier-categoria"><h3>⚔️ SubTiers</h3><div class="tiers-grid">`;
      subTiers.forEach(t => {
        html += `
          <div class="tier-card" style="border-color: ${t.cor}">
            <img src="${t.icone}" alt="${t.tier}" loading="lazy" onerror="this.src='imagens/default-tier.png'">
            <div class="tier-nome">${t.tier}</div>
            <div class="tier-desc">${t.nome}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    }
    tiersContainer.innerHTML = html;
  }

  // ----- CONQUISTAS -----
  const conquistasLista = document.getElementById('conquistas-lista');
  if (conquistasLista && siteData.conquistas) {
    conquistasLista.innerHTML = siteData.conquistas.itens.map(item => 
      `<li>${item}</li>`
    ).join('');
    conquistasLista.querySelectorAll('li').forEach(li => {
      li.style.opacity = '0';
      li.style.transform = 'translateX(-20px)';
      li.style.transition = 'all 0.5s ease';
    });
  }

  // ----- GALERIA -----
  const galeriaGrid = document.querySelector('.galeria-grid');
  if (galeriaGrid && siteData.galeria) {
    galeriaGrid.innerHTML = siteData.galeria.imagens.map(img => `
      <div class="galeria-item ${img.destaque ? 'principal' : ''}">
        <img src="${img.src}" alt="${img.legenda}" loading="lazy" onerror="this.src='imagens/default-gallery.jpg'">
        <div class="galeria-overlay">
          <i class="fas fa-expand"></i>
          <span>${img.legenda}</span>
        </div>
      </div>
    `).join('');
  }

  // ----- ONLINE COUNT -----
  const onlineCount = document.querySelector('.online-count');
  if (onlineCount && siteData.contato) {
    onlineCount.textContent = siteData.contato.onlineCount || 12;
  }

  // ===== ATIVAR ANIMAÇÕES =====
  setTimeout(() => {
    animateNumbers();
    animateCards();
  }, 500);

  // ===== ANIMAÇÃO DE CARDS =====
  function animateCards() {
    document.querySelectorAll('.membro-card, .tier-card, .rede-card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== PARALLAX NO HERO =====
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
      hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
  });

  // ===== EFEITO DE GLOW NOS CARDS =====
  document.querySelectorAll('.membro-card, .tier-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 60px rgba(204, 0, 0, 0.3)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });

  console.log('🔥 SixOnTop carregado com sucesso!');
  console.log('📊 Fundadores:', siteData.membros?.lista?.length || 0);
  console.log('📊 Membros:', siteData.membrosAtuais?.lista?.length || 0);
});
