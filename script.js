// =====================================================
//  SCRIPT PRINCIPAL – Gera todo o site
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ---------- CABEÇALHO ----------
  const cabecalho = document.querySelector('.hero');
  if (cabecalho) {
    cabecalho.style.backgroundImage = `url('${siteData.cabecalho.imagemHeroi}')`;
    document.querySelector('.hero-content h1').textContent = siteData.cabecalho.titulo;
    document.querySelector('.hero-content p').textContent = siteData.cabecalho.subtitulo;
  }

  // ---------- SOBRE ----------
  const sobreSection = document.getElementById('sobre');
  if (sobreSection) {
    sobreSection.querySelector('h2').textContent = siteData.sobre.titulo;
    const historiaDiv = sobreSection.querySelector('.historia');
    if (historiaDiv) {
      historiaDiv.innerHTML = siteData.sobre.historia.map(p => `<p>${p}</p>`).join('');
    }
    const imgSobre = sobreSection.querySelector('.sobre-img img');
    if (imgSobre) {
      imgSobre.src = siteData.sobre.imagemSobre;
    }
  }

  // ---------- FUNDADORES ----------
  const membrosSection = document.getElementById('membros');
  if (membrosSection) {
    membrosSection.querySelector('h2').textContent = siteData.membros.titulo;
    const grid = membrosSection.querySelector('.membros-grid');
    if (grid) {
      grid.innerHTML = siteData.membros.lista.map(membro => `
        <div class="membro-card">
          <img src="${membro.foto}" alt="${membro.nome}" loading="lazy">
          <h3>${membro.nome}</h3>
          <p>${membro.cargo}</p>
        </div>
      `).join('');
    }
  }

  // ---------- MEMBROS ATUAIS ----------
  const membrosAtuaisSection = document.getElementById('membros-atuais');
  if (membrosAtuaisSection) {
    membrosAtuaisSection.querySelector('h2').textContent = siteData.membrosAtuais.titulo;
    const grid = membrosAtuaisSection.querySelector('.membros-grid');
    if (grid) {
      grid.innerHTML = siteData.membrosAtuais.lista.map(membro => `
        <div class="membro-card">
          <img src="${membro.foto}" alt="${membro.nome}" loading="lazy">
          <h3>${membro.nome}</h3>
          <p>${membro.cargo}</p>
        </div>
      `).join('');
    }
  }

  // ---------- TIERS DE PVP ----------
  const tiersSection = document.getElementById('tiers');
  if (tiersSection) {
    tiersSection.querySelector('h2').textContent = siteData.tiers.titulo;
    const subtitulo = tiersSection.querySelector('.subtitulo');
    if (subtitulo) subtitulo.textContent = siteData.tiers.subtitulo;
    
    const container = tiersSection.querySelector('.tiers-container');
    if (container) {
      // Separar por categoria
      const mcTiers = siteData.tiers.lista.filter(t => t.categoria === 'MCTier');
      const subTiers = siteData.tiers.lista.filter(t => t.categoria === 'SubTier');
      
      let html = '';
      
      // MCTiers
      if (mcTiers.length > 0) {
        html += `<div class="tier-categoria">
          <h3>⭐ MCTiers</h3>
          <div class="tiers-grid">
            ${mcTiers.map(t => `
              <div class="tier-card" style="border-color: ${t.cor}">
                <img src="${t.icone}" alt="${t.tier}" loading="lazy">
                <div class="tier-nome">${t.tier}</div>
                <div class="tier-desc">${t.nome}</div>
              </div>
            `).join('')}
          </div>
        </div>`;
      }
      
      // SubTiers
      if (subTiers.length > 0) {
        html += `<div class="tier-categoria">
          <h3>⚔️ SubTiers</h3>
          <div class="tiers-grid">
            ${subTiers.map(t => `
              <div class="tier-card" style="border-color: ${t.cor}">
                <img src="${t.icone}" alt="${t.tier}" loading="lazy">
                <div class="tier-nome">${t.tier}</div>
                <div class="tier-desc">${t.nome}</div>
              </div>
            `).join('')}
          </div>
        </div>`;
      }
      
      container.innerHTML = html;
    }
  }

  // ---------- CONQUISTAS ----------
  const conquistasSection = document.getElementById('conquistas');
  if (conquistasSection) {
    conquistasSection.querySelector('h2').textContent = siteData.conquistas.titulo;
    const lista = conquistasSection.querySelector('.conquistas-lista');
    if (lista) {
      lista.innerHTML = siteData.conquistas.itens.map(item => `<li>${item}</li>`).join('');
    }
  }

  // ---------- CONTATO ----------
  const contatoSection = document.getElementById('contato');
  if (contatoSection) {
    contatoSection.querySelector('h2').textContent = siteData.contato.titulo;
    contatoSection.querySelector('.contato-texto').textContent = siteData.contato.texto;
    const links = contatoSection.querySelector('.contato-links');
    if (links) {
      links.innerHTML = `
        <a href="${siteData.contato.discord}" target="_blank" class="btn discord">💬 Discord</a>
        <a href="${siteData.contato.instagram}" target="_blank" class="btn instagram">📸 Instagram</a>
        <a href="mailto:${siteData.contato.email}" class="btn email">📧 Email</a>
      `;
    }
  }

  // ---------- RODAPÉ ----------
  const rodape = document.querySelector('footer p');
  if (rodape) {
    rodape.textContent = siteData.rodape.texto;
  }

});
