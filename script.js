# /*

# SCRIPT PRINCIPAL DA WHITE

*/

// ==================================================
// EFEITO DO CURSOR
// ==================================================

const brilho = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(evento) {

if (!brilho) return;

brilho.style.left = evento.clientX + "px";
brilho.style.top = evento.clientY + "px";

});

// ==================================================
// CONFIGURAÇÕES DO SITE
// ==================================================

document.getElementById("descricao-hero").innerHTML =
CONFIGURACAO.descricaoHero.replace(/\n/g, "<br>");

document.getElementById("sobre-paragrafo-1").textContent =
CONFIGURACAO.sobre.paragrafo1;

document.getElementById("sobre-paragrafo-2").textContent =
CONFIGURACAO.sobre.paragrafo2;

document.getElementById("texto-recrutamento").textContent =
CONFIGURACAO.recrutamento;

document.getElementById("link-discord").href =
CONFIGURACAO.discord;

document.getElementById("botao-recrutamento").href =
CONFIGURACAO.discord;

document.getElementById("estatistica-membros").textContent =
CONFIGURACAO.estatisticas.membros;

document.getElementById("estatistica-servidores").textContent =
CONFIGURACAO.estatisticas.servidores;

document.getElementById("estatistica-eventos").textContent =
CONFIGURACAO.estatisticas.eventos;

document.getElementById("copyright").textContent =
`© ${CONFIGURACAO.ano} ${CONFIGURACAO.nome} CLÃ. TODOS OS DIREITOS RESERVADOS.`;

// ==================================================
// GERAR URL DA SKIN
// ==================================================

function gerarSkin(nick) {

return `https://mc-heads.net/body/${encodeURIComponent(nick)}/100`;

}

// ==================================================
// GERAR LINK DO NAMEMC
// ==================================================

function gerarNameMC(nick) {

return `https://namemc.com/profile/${encodeURIComponent(nick)}`;

}

// ==================================================
// RANKING
// ==================================================

const listaRanking = document.getElementById("lista-ranking");

CONFIGURACAO.ranking.forEach(function(jogador, indice) {

const linha = document.createElement("div");

linha.className = "linha-ranking";

linha.innerHTML = `

```
<span class="posicao">
  ${String(indice + 1).padStart(2, "0")}
</span>

<a
  class="jogador-ranking"
  href="${gerarNameMC(jogador.nome)}"
  target="_blank"
  rel="noopener"
>

  <img
    src="${gerarSkin(jogador.nome)}"
    alt="Skin de ${jogador.nome}"
    loading="lazy"
  >

  <span>
    <b>${jogador.nome}</b>
    <small>${jogador.cargo}</small>
  </span>

</a>

<span>
  <em class="badge ${indice === 0 ? "branco" : ""}">
    ${jogador.patente}
  </em>
</span>

<span class="elo">
  ${jogador.elo}
</span>

<span>
  ${jogador.vitorias} / ${jogador.derrotas}
</span>
```

`;

listaRanking.appendChild(linha);

});

// ==================================================
// MEMBROS
// ==================================================

const listaMembros = document.getElementById("lista-membros");

CONFIGURACAO.membros.forEach(function(membro, indice) {

const cartao = document.createElement("article");

cartao.className = "cartao-membro";

cartao.innerHTML = `

```
<a
  href="${gerarNameMC(membro.nome)}"
  target="_blank"
  rel="noopener"
  class="imagem-jogador"
>

  <img
    src="${gerarSkin(membro.nome)}"
    alt="Skin de ${membro.nome}"
    loading="lazy"
  >

</a>

<div class="info-membro">

  <h3>${membro.nome}</h3>

  <p>
    ${membro.cargo} · ${membro.patente}
  </p>

</div>

<span class="numero-membro">
  ${String(indice + 1).padStart(2, "0")}
</span>
```

`;

listaMembros.appendChild(cartao);

});

// ==================================================
// ANIMAÇÕES
// ==================================================

const elementos = document.querySelectorAll(
".conteudo-hero, .grade-sobre, .estatisticas, .tabela-ranking, .cartao-membro, .caixa-recrutamento"
);

const observador = new IntersectionObserver(function(entradas) {

entradas.forEach(function(entrada) {

```
if (entrada.isIntersecting) {

  entrada.target.style.opacity = "1";
  entrada.target.style.transform = "translateY(0)";

  observador.unobserve(entrada.target);

}
```

});

}, {
threshold: 0.12
});

elementos.forEach(function(elemento) {

elemento.style.opacity = "0";

elemento.style.transform = "translateY(25px)";

elemento.style.transition =
"opacity .7s ease, transform .7s ease";

observador.observe(elemento);

});

// ==================================================
// MENU MOBILE
// ==================================================

const botaoMenu = document.querySelector(".botao-menu");

const navegacao = document.querySelector(".navbar nav");

botaoMenu?.addEventListener("click", function() {

const aberto = navegacao.classList.contains("menu-aberto");

navegacao.classList.toggle("menu-aberto");

if (!aberto) {

```
navegacao.style.display = "flex";
```

} else {

```
navegacao.style.display = "";
```

}

});
