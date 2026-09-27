(() => {
  const cfg = window.WHITE_CONFIG;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const safe = (value = "") => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const nickUrl = nick => encodeURIComponent(String(nick).trim());
  const upperBody = nick => `https://mc-heads.net/body/${nickUrl(nick)}/600`;
  const avatar = nick => `https://mc-heads.net/avatar/${nickUrl(nick)}/160`;
  const namemc = nick => `https://namemc.com/profile/${nickUrl(nick)}`;
  const lines = text => safe(text).split('|').join('<br>');

  // ----- Conteúdo editável -----
  $('#siteLogo').src = cfg.site.logo;
  $('#brandName').textContent = cfg.site.nome;
  $('#brandTag').textContent = cfg.site.tag;
  ['discordTop','heroDiscord','recruitDiscord','footerDiscord'].forEach(id => $(`#${id}`).href = cfg.site.discord);
  $('#footerText').textContent = cfg.site.rodape;

  $('#heroEyebrow').textContent = cfg.hero.aviso;
  $('#heroTitle').innerHTML = lines(cfg.hero.titulo).replace('PARA PARTICIPAR.', '<span>PARA PARTICIPAR.</span>');
  $('#heroText').textContent = cfg.hero.texto;
  $('#aboutTitle').innerHTML = lines(cfg.cla.titulo);
  $('#aboutText').textContent = cfg.cla.texto;
  $('#aboutQuote').textContent = cfg.cla.frase;
  $('#recruitTitle').innerHTML = lines(cfg.recrutamento.titulo).replace('PROVA.', '<span>PROVA.</span>');
  $('#recruitText').textContent = cfg.recrutamento.texto;

  $('#statsGrid').innerHTML = cfg.estatisticas.map((s, i) => `
    <article class="stat reveal" style="--d:${i * 70}ms"><strong>${safe(s.numero)}</strong><span>${safe(s.legenda)}</span></article>
  `).join('');

  // ----- Ranking -----
  const ordered = [...cfg.ranking].sort((a,b) => Number(b.pontos) - Number(a.pontos));
  const podiumOrder = [ordered[1], ordered[0], ordered[2]].filter(Boolean);
  $('#podium').innerHTML = podiumOrder.map((p, visualIndex) => {
    const originalPos = ordered.indexOf(p) + 1;
    return `<article class="podium-card podium-${originalPos} reveal">
      <div class="position">#${originalPos}</div>
      <img src="${avatar(p.nick)}" alt="Skin de ${safe(p.nick)}" loading="lazy" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/160'">
      <strong>${safe(p.nick)}</strong><span>${safe(p.funcao)}</span>
      <div class="podium-points">${Number(p.pontos).toLocaleString('pt-BR')} <small>PTS</small></div>
    </article>`;
  }).join('');

  $('#rankTable').innerHTML = `
    <div class="rank-row rank-head"><span>#</span><span>PLAYER</span><span>VITÓRIAS</span><span>DERROTAS</span><span>K/D</span><span>PONTOS</span></div>
    ${ordered.map((p,i) => `<div class="rank-row">
      <span class="rank-pos">${String(i+1).padStart(2,'0')}</span>
      <span class="rank-player"><img src="${avatar(p.nick)}" alt=""><b>${safe(p.nick)}</b><small>${safe(p.funcao)}</small></span>
      <span>${safe(p.vitorias)}</span><span>${safe(p.derrotas)}</span><span>${safe(p.kd)}</span><strong>${Number(p.pontos).toLocaleString('pt-BR')}</strong>
    </div>`).join('')}
  `;

  // ----- Membros -----
  const groups = ['Todos', ...new Set(cfg.membros.map(m => m.grupo))];
  $('#memberFilters').innerHTML = groups.map((g,i) => `<button class="filter ${i===0?'active':''}" data-group="${safe(g)}">${safe(g)}</button>`).join('');

  function renderMembers(group = 'Todos') {
    const list = group === 'Todos' ? cfg.membros : cfg.membros.filter(m => m.grupo === group);
    $('#membersGrid').innerHTML = list.map((m,i) => `<article class="member-card reveal visible" style="--d:${(i%4)*60}ms">
      <div class="member-top"><span class="member-number">${String(cfg.membros.indexOf(m)+1).padStart(2,'0')}</span><span class="member-role">${safe(m.cargo)}</span></div>
      <div class="skin-stage">
        <div class="skin-halo"></div>
        <img src="${upperBody(m.nick)}" alt="Skin de ${safe(m.nick)}" loading="lazy" onerror="this.src='https://mc-heads.net/body/MHF_Steve/600'">
      </div>
      <div class="member-info"><h3>${safe(m.nick)}</h3><p>${safe(m.frase)}</p></div>
      <a class="namemc-link" href="${namemc(m.nick)}" target="_blank" rel="noreferrer">VER NO NAMEMC <span>↗</span></a>
    </article>`).join('');
  }
  renderMembers();
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMembers(btn.dataset.group);
  }));

  // ----- Galeria -----
  $('#gallery').innerHTML = cfg.galeria.map((g,i) => `<article class="gallery-card reveal gallery-${i+1}">
    <img src="${safe(g.imagem)}" alt="${safe(g.titulo)}" loading="lazy">
    <div class="gallery-overlay"><small>${safe(g.subtitulo)}</small><h3>${safe(g.titulo)}</h3><span>0${i+1}</span></div>
  </article>`).join('');

  $('#requirements').innerHTML = cfg.recrutamento.requisitos.map((r,i) => `<div><span>0${i+1}</span>${safe(r)}<b>✓</b></div>`).join('');

  // ----- Ticker -----
  const tickerItems = [...cfg.ticker, ...cfg.ticker];
  $('#tickerTrack').innerHTML = tickerItems.map(t => `<span>${safe(t)} <b>✦</b></span>`).join('');

  // ----- Reveal -----
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .11 });
  $$('.reveal').forEach(el => revealObs.observe(el));

  // ----- Cursor glow / progress -----
  const glow = $('#cursorGlow');
  window.addEventListener('pointermove', e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#progress').style.width = max > 0 ? `${(scrollY/max)*100}%` : '0%';
  }, { passive:true });

  // ----- Mobile menu -----
  $('#menuBtn').addEventListener('click', () => {
    const opened = $('#navLinks').classList.toggle('open');
    $('#menuBtn').setAttribute('aria-expanded', String(opened));
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => $('#navLinks').classList.remove('open')));

  // ----- Magnetic buttons (desktop) -----
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.08}px, ${(e.clientY-r.top-r.height/2)*.12}px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = 'translate(0,0)');
  });

  // ----- Copy easter egg -----
  $$('.monogram').forEach(el => el.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(cfg.site.nome); showToast('WHITE copiado. Aura +1.'); } catch { showToast('WHITE.'); }
  }));
  function showToast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); }
})();
