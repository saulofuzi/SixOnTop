// =====================================================
//  SCRIPT PRINCIPAL
// =====================================================

document.addEventListener('DOMContentLoaded', function() {

  console.log('🔥 SixOnTop carregando...');

  // ===== VERIFICA SE OS DADOS EXISTEM =====
  if (typeof siteData === 'undefined') {
    console.error('❌ siteData não encontrado! Verifique se o arquivo siteData.js foi carregado.');
    return;
  }

  console.log('✅ siteData carregado com sucesso!');

  // ===== PREENCHER FUNDADORES =====
  const fundadoresGrid = document.getElementById('fundadores-grid');
  if (fundadoresGrid) {
    if (siteData.fundadores && siteData.fundadores.lista) {
      console.log('📊 Carregando fundadores:', siteData.fundadores.lista.length);
      fundadoresGrid.innerHTML = siteData.fundadores.lista.map(membro => `
        <div class="membro-card">
          <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%231a0000%22 width=%22120%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2240%22 font-family=%22Arial%22%3E👤%3C/text%3E%3C/svg%3E'">
          <h3>${membro.nome}</h3>
          <p>${membro.cargo}</p>
          <div class="membro-badge">👑</div>
        </div>
      `).join('');
    } else {
      console.warn('⚠️ Fundadores não encontrados em siteData.fundadores');
      fundadoresGrid.innerHTML = '<p style="color:#ff6666;text-align:center;grid-column:1/-1;">⚠️ Nenhum fundador cadastrado.</p>';
    }
  }

  // ===== PREENCHER MEMBROS =====
  const membrosGrid = document.getElementById('membros-grid');
  if (membrosGrid) {
    if (siteData.membrosAtuais && siteData.membrosAtuais.lista) {
      console.log('📊 Carregando membros:', siteData.membrosAtuais.lista.length);
      membrosGrid.innerHTML = siteData.membrosAtuais.lista.map(membro => `
        <div class="membro-card">
          <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%231a0000%22 width=%22120%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2240%22 font-family=%22Arial%22%3E👤%3C/text%3E%3C/svg%3E'">
          <h3>${membro.nome}</h3>
          <p>${membro.cargo}</p>
        </div>
      `).join('');
    } else {
      console.warn('⚠️ Membros não encontrados em siteData.membrosAtuais');
      membrosGrid.innerHTML = '<p style="color:#ff6666;text-align:center;grid-column:1/-1;">⚠️ Nenhum membro cadastrado.</p>';
    }
  }

  // ===== PREENCHER TIERS =====
  const tiersContainer = document.getElementById('tiers-container');
  if (tiersContainer) {
    if (siteData.tiers && siteData.tiers.lista) {
      const mcTiers = siteData.tiers.lista.filter(t => t.categoria === 'MCTier');
      const subTiers = siteData.tiers.lista.filter(t => t.categoria === 'SubTier');
      
      let html = '';
      if (mcTiers.length) {
        html += `<div class="tier-categoria"><h3>⭐ MCTiers</h3><div class="tiers-grid">`;
        mcTiers.forEach(t => {
          html += `
            <div class="tier-card" style="border-color: ${t.cor}">
              <img src="${t.icone}" alt="${t.tier}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%231a0000%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2230%22 font-family=%22Arial%22%3E⭐%3C/text%3E%3C/svg%3E'">
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
              <img src="${t.icone}" alt="${t.tier}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%231a0000%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2230%22 font-family=%22Arial%22%3E⚔️%3C/text%3E%3C/svg%3E'">
              <div class="tier-nome">${t.tier}</div>
              <div class="tier-desc">${t.nome}</div>
            </div>
          `;
        });
        html += `</div></div>`;
      }
      tiersContainer.innerHTML = html || '<p style="color:#ff6666;text-align:center;">⚠️ Nenhum tier cadastrado.</p>';
    }
  }

  // ===== PREENCHER CONQUISTAS =====
  const conquistasLista = document.getElementById('conquistas-lista');
  if (conquistasLista) {
    if (siteData.conquistas && siteData.conquistas.itens) {
      conquistasLista.innerHTML = siteData.conquistas.itens.map(item => 
        `<li>${item}</li>`
      ).join('');
    }
  }

  // ===== PREENCHER GALERIA =====
  const galeriaGrid = document.getElementById('galeria-grid');
  if (galeriaGrid) {
    if (siteData.galeria && siteData.galeria.imagens) {
      galeriaGrid.innerHTML = siteData.galeria.imagens.map(img => `
        <div class="galeria-item ${img.destaque ? 'principal' : ''}">
          <img src="${img.src}" alt="${img.legenda}" loading="lazy" onerror="this.style.display='none'">
          <div class="galeria-overlay">
            <i class="fas fa-expand"></i>
            <span>${img.legenda}</span>
          </div>
        </div>
      `).join('');
    }
  }

  // ===== ONLINE COUNT =====
  const onlineCount = document.querySelector('.online-count');
  if (onlineCount && siteData.contato) {
    onlineCount.textContent = siteData.contato.onlineCount || 12;
  }

  // ===== ANIMAÇÃO DE NÚMEROS =====
  function animateNumbers() {
    const counters = document.querySelectorAll('.num');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 50);
    });
  }

  // ===== OBSERVER PARA SCROLL =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // ===== ANIMAÇÃO DOS CARDS =====
  function animateCards() {
    document.querySelectorAll('.membro-card, .tier-card, .rede-card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }

  // ===== INICIAR ANIMAÇÕES =====
  setTimeout(() => {
    animateNumbers();
    animateCards();
  }, 300);

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== PARALLAX =====
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
    }
  });

  console.log('✅ SixOnTop carregado com sucesso!');
});
