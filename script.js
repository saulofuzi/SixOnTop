// =====================================================
//  SCRIPT PRINCIPAL – Pega os dados e injeta no HTML
// =====================================================

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function () {
  // Se os dados não existirem, avisa
  if (typeof siteData === 'undefined') {
    console.error('Arquivo dados.js não carregado ou com erro.');
    return;
  }

  const d = siteData;

  // ----- HERO -----
  document.getElementById('hero-titulo').textContent = d.cabecalho.titulo;
  document.getElementById('hero-subtitulo').textContent = d.cabecalho.subtitulo;
  // A imagem de fundo já está no CSS, mas podemos também setar via JS se quiser
  // (opcional) document.querySelector('.hero').style.backgroundImage = `url(${d.cabecalho.imagemHeroi})`;

  // ----- SOBRE -----
  document.getElementById('sobre-titulo').textContent = d.sobre.titulo;
  const sobreTextoDiv = document.getElementById('sobre-texto');
  sobreTextoDiv.innerHTML = d.sobre.historia.map(p => `<p>${p}</p>`).join('');
  document.getElementById('sobre-imagem').src = d.sobre.imagemSobre;

  // ----- MEMBROS -----
  document.getElementById('membros-titulo').textContent = d.membros.titulo;
  const membrosGrid = document.getElementById('membros-lista');
  membrosGrid.innerHTML = d.membros.lista.map(m => `
    <div class="membro-card fade-up">
      <img src="${m.foto}" alt="${m.nome}" />
      <h3>${m.nome}</h3>
      <p>${m.cargo}</p>
    </div>
  `).join('');

  // ----- CONQUISTAS -----
  document.getElementById('conquistas-titulo').textContent = d.conquistas.titulo;
  const conquistasLista = document.getElementById('conquistas-lista');
  conquistasLista.innerHTML = d.conquistas.itens.map(item => `<li>${item}</li>`).join('');

  // ----- CONTATO -----
  document.getElementById('contato-titulo').textContent = d.contato.titulo;
  document.getElementById('contato-texto').textContent = d.contato.texto;
  document.getElementById('contato-discord').href = d.contato.discord;
  document.getElementById('contato-instagram').href = d.contato.instagram;
  document.getElementById('contato-email').href = `mailto:${d.contato.email}`;

  // ----- RODAPÉ -----
  document.getElementById('rodape-texto').textContent = d.rodape.texto;

  // Adiciona classe de animação para elementos visíveis (opcional)
  // Você pode usar IntersectionObserver para animar ao rolar, mas já temos fade-up nos cards.
});
