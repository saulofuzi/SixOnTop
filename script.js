// =====================================================
//  SCRIPT PRINCIPAL
// =====================================================

document.addEventListener('DOMContentLoaded', function() {

  console.log('🔥 SixOnTop carregando...');

  if (typeof siteData === 'undefined') {
    console.error('❌ siteData não encontrado!');
    return;
  }

  console.log('✅ siteData carregado com sucesso!');

  // ===== FUNDADORES =====
  const fundadoresGrid = document.getElementById('fundadores-grid');
  if (fundadoresGrid && siteData.fundadores) {
    fundadoresGrid.innerHTML = siteData.fundadores.lista.map(membro => `
      <div class="membro-card">
        <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%231a0000%22 width=%22120%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2240%22 font-family=%22Arial%22%3E👤%3C/text%3E%3C/svg%3E'">
        <h3>${membro.nome}</h3>
        <p>${membro.cargo}</p>
        <div class="membro-badge">👑</div>
      </div>
    `).join('');
    console.log('✅ Fundadores carregados:', siteData.fundadores.lista.length);
  }

  // ===== MEMBROS =====
  const membrosGrid = document.getElementById('membros-grid');
  if (membrosGrid && siteData.membrosAtuais) {
    membrosGrid.innerHTML = siteData.membrosAtuais.lista.map(membro => `
      <div class="membro-card">
        <img src="${membro.foto}" alt="${membro.nome}" loading="lazy" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%231a0000%22 width=%22120%22 height=%22120%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2240%22 font-family=%22Arial%22%3E👤%3C/text%3E%3C/svg%3E'">
        <h3>${membro.nome}</h3>
        <p>${membro.cargo}</p>
      </div>
    `).join('');
    console.log('✅ Membros carregados:', siteData.membrosAtuais.lista.length);
  }

  // ===== MEMBRO DO MÊS =====
  const membroMesContainer = document.getElementById('membro-mes-container');
  if (membroMesContainer && siteData.membroMes) {
    const m = siteData.membroMes.membro;
    membroMesContainer.innerHTML = `
      <div class="membro-mes-card">
        <div class="membro-mes-badge">⭐ MÊS DE ${siteData.membroMes.mes}</div>
        <div class="membro-mes-content">
          <div class="membro-mes-foto">
            <img src="${m.foto}" alt="${m.nome}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22150%22%3E%3Crect fill=%22%231a0000%22 width=%22150%22 height=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2250%22 font-family=%22Arial%22%3E⭐%3C/text%3E%3C/svg%3E'">
            <div class="membro-mes-destaque">${m.destaque || '🏆 Destaque'}</div>
          </div>
          <div class="membro-mes-info">
            <h3>${m.nome}</h3>
            <p class="membro-mes-cargo">${m.cargo}</p>
            <p class="membro-mes-motivo">${m.motivo || 'Membro foda do mês!'}</p>
            <div class="membro-mes-stats">
              <span><i class="fas fa-trophy"></i> Os melhores tiers</span>
              <span><i class="fas fa-fire"></i> LT3</span>
              <span><i class="fas fa-star"></i> Goat !</span>
            </div>
          </div>
        </div>
      </div>
    `;
    console.log('✅ Membro do mês carregado:', siteData.membroMes.membro.nome);
  }

  // ===== TIERS =====
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
            <img src="${t.icone}" alt="${t.tier}" loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%231a0000%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2230%22 font-family=%22Arial%22%3E⭐%3C/text%3E%3C/svg%3E'">
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
            <img src="${t.icone}" alt="${t.tier}" loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%231a0000%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23cc0000%22 font-size=%2230%22 font-family=%22Arial%22%3E⚔️%3C/text%3E%3C/svg%3E'">
            <div class="tier-nome">${t.tier}</div>
            <div class="tier-desc">${t.nome}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    }
    tiersContainer.innerHTML = html;
    console.log('✅ Tiers carregados:', siteData.tiers.lista.length);
  }

  // ===== CONQUISTAS =====
  const conquistasLista = document.getElementById('conquistas-lista');
  if (conquistasLista && siteData.conquistas) {
    conquistasLista.innerHTML = siteData.conquistas.itens.map(item => 
      `<li>${item}</li>`
    ).join('');
    console.log('✅ Conquistas carregadas:', siteData.conquistas.itens.length);
  }

  // ===== MÍDIAS =====
  const midiasGrid = document.getElementById('midias-grid');
  if (midiasGrid && siteData.midias) {
    midiasGrid.innerHTML = siteData.midias.lista.map(midia => {
      let html = '';
      
      if (midia.tipo === 'imagem') {
        html = `
          <div class="midia-item imagem" data-tipo="imagem">
            <img src="${midia.src}" alt="${midia.legenda}" loading="lazy" onerror="this.style.display='none'">
            <div class="midia-overlay">
              <i class="fas fa-search-plus"></i>
              <span>${midia.legenda}</span>
            </div>
          </div>
        `;
      } else if (midia.tipo === 'video') {
        if (midia.tipoVideo === 'youtube') {
          html = `
            <div class="midia-item video" data-tipo="video">
              <div class="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/${midia.id}" 
                  title="${midia.legenda}"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="midia-legenda">${midia.legenda}</div>
            </div>
          `;
        } else if (midia.tipoVideo === 'mp4') {
          html = `
            <div class="midia-item video" data-tipo="video">
              <video controls preload="metadata">
                <source src="${midia.src}" type="video/mp4">
                Seu navegador não suporta vídeos.
              </video>
              <div class="midia-legenda">${midia.legenda}</div>
            </div>
          `;
        }
      }
      
      return html;
    }).join('');
    console.log('✅ Mídias carregadas:', siteData.midias.lista.length);
  }

  // ===== FILTROS DAS MÍDIAS =====
  const filtros = document.querySelectorAll('.filtro-btn');
  filtros.forEach(filtro => {
    filtro.addEventListener('click', function() {
      // Remove active de todos
      filtros.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      const filtroTipo = this.dataset.filtro;
      const midiasItems = document.querySelectorAll('.midia-item');
      
      midiasItems.forEach(item => {
        if (filtroTipo === 'todos') {
          item.style.display = 'block';
        } else {
          if (item.dataset.tipo === filtroTipo) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });

  // ===== GALERIA =====
  const galeriaGrid = document.getElementById('galeria-grid');
  if (galeriaGrid && siteData.galeria) {
    galeriaGrid.innerHTML = siteData.galeria.imagens.map(img => `
      <div class="galeria-item ${img.destaque ? 'principal' : ''}">
        <img src="${img.src}" alt="${img.legenda}" loading="lazy" onerror="this.style.display='none'">
        <div class="galeria-overlay">
          <i class="fas fa-expand"></i>
          <span>${img.legenda}</span>
        </div>
      </div>
    `).join('');
    console.log('✅ Galeria carregada:', siteData.galeria.imagens.length);
  }

  // ===== ONLINE COUNT =====
  const onlineCount = document.querySelector('.online-count');
  if (onlineCount && siteData.contato) {
    onlineCount.textContent = siteData.contato.onlineCount || 0;
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
    document.querySelectorAll('.membro-card, .tier-card, .rede-card, .midia-item').forEach((card, index) => {
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
