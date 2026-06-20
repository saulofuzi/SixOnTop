// =====================================================
//  DADOS DO SITE – Edite somente este arquivo!
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "SixOnTop",
    subtitulo: "Uma nova jornada",
    // imagem de fundo do herói (dentro da pasta imagens/)
    imagemHeroi: "imagens/hero.jpg"
  },

  // ---------- SOBRE O CLÃ ----------
  sobre: {
    titulo: "Quem somos?",
    historia: [
      "Somos a antiga SEGA 666, um clã criado originalmente por Black_KiritoXz e continuado por saulofuzis",
      "Somos um clã de minecraft focado em PvP 1.9+.",
      "Um clã de amigos, e muita resenha !."
    ],
    imagemSobre: "imagens/sobre.jpg"
  },

  // ---------- MEMBROS FUNDADORES ----------
  membros: {
    titulo: "Fundadores",
    lista: [
      { nome: "Saulofuzi", cargo: "Fundador", foto: "imagens/membro1.png" },
      { nome: "Suzly", cargo: "Lider", foto: "imagens/membro2.png" },
      { nome: "uCarlsoXz_", cargo: "Sub Lider", foto: "imagens/membro3.png" },
      { nome: "uJosca", cargo: "Gerente", foto: "imagens/membro4.png" },
      { nome: "Black_KiritoXz", cargo: "Mobile kkk", foto: "imagens/membro5.png" }
    ]
  },

  // ---------- CONQUISTAS (opcional) ----------
  conquistas: {
    titulo: "Conquistas da SIX",
    itens: [
    "🏆 O Clã com mais vitorias em guerras no servidor 'Minezinho' (30+) ",
    "⚔️ O Clã vencedor da Primeira LIGA DE CLÃ do servidor 'Minezinho' ",
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Quer entrar na Six?",
    texto: "Venha ser membro da SixOnTop, clique no link abaixo !",
    discord: "https://discord.gg/eEMaUAhSC2",
    instagram: "https://instagram.com/sixontop",
    email: "sixontop@gmail.com"
  },

  // ---------- RODAPÉ ----------
  rodape: {
    texto: "© 2024 SixOnTop – Sempre no topo"
  }
};

// Exporta para ser usado no script principal
// (não mexa nesta linha)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
