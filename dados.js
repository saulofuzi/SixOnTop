// =====================================================
//  DADOS DO SITE – Edite somente este arquivo!
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "SixOnTop",
    subtitulo: "Uma nova jornada",
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

  // ---------- FUNDADORES ----------
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

  // ---------- MEMBROS ----------
  membrosAtuais: {
    titulo: "Membros",
    lista: [
      { nome: "teste", cargo: " teste", foto: "imagens/membro6.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro7.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro8.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro8.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro9.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro10.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro11.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro12.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro13.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro14.png" },
      { nome: "teste", cargo: "teste", foto: "imagens/membro15.png" }
    ]
  },

  // ---------- TIERS DE PVP ----------
  tiers: {
    titulo: "Tiers da SixOnTop",
    subtitulo: "Nossos níveis no PvP",
    lista: [
      {
        tier: "LT3",
        nome: "Lendário Tier 3",
        icone: "imagens/tier-lt3.png",
        cor: "#FFD700" // dourado (opcional, pode usar para borda/fundo)
      },
      {
        tier: "LT2",
        nome: "Lendário Tier 2",
        icone: "imagens/tier-lt2.png",
        cor: "#C0C0C0" // prateado
      },
      {
        tier: "LT1",
        nome: "Lendário Tier 1",
        icone: "imagens/tier-lt1.png",
        cor: "#CD7F32" // bronze
      },
      {
        tier: "Crystal",
        nome: "Crystal (Topo)",
        icone: "imagens/tier-crystal.png",
        cor: "#00FFFF" // ciano
      },
      {
        tier: "Diamante",
        nome: "Diamante",
        icone: "imagens/tier-diamante.png",
        cor: "#00BFFF"
      },
      {
        tier: "Ouro",
        nome: "Ouro",
        icone: "imagens/tier-ouro.png",
        cor: "#FFD700"
      },
      {
        tier: "Ferro",
        nome: "Ferro",
        icone: "imagens/tier-ferro.png",
        cor: "#A9A9A9"
      },
      {
        tier: "Pedra",
        nome: "Pedra",
        icone: "imagens/tier-pedra.png",
        cor: "#808080"
      }
    ]
  },

  // ---------- CONQUISTAS ----------
  conquistas: {
    titulo: "Conquistas da SIX",
    itens: [
      "🏆 O Clã com mais vitorias em guerras no servidor 'Minezinho' (30+) ",
      "⚔️ O Clã vencedor da Primeira LIGA DE CLÃ do servidor 'Minezinho' "
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
    texto: "© 2024 SixOnTop – O terror da EyE"
  }
};

// Exporta para ser usado no script principal
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
