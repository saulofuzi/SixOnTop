// =====================================================
//  DADOS DO SITE – sitedata.js
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
    tags: ["⚔️ PvP", "🎮 Minecraft", "🤝 Amizade", "🔥 Resenha"],
    imagemSobre: "imagens/sobre.jpg"
  },

  // ---------- FUNDADORES ----------
  fundadores: {
    titulo: "Fundadores",
    lista: [
      { nome: "Saulofuzi", cargo: "Fundador", foto: "imagens/membro1.png" },
      { nome: "Suzly", cargo: "Lider", foto: "imagens/membro2.png" },
      { nome: "uCarlsoXz_", cargo: "Sub Lider", foto: "imagens/membro3.png" },
      { nome: "uJosca", cargo: "Gerente", foto: "imagens/membro4.png" },
      { nome: "Black_KiritoXz", cargo: "Mobile kkk", foto: "imagens/membro5.png" }
    ]
  },

  // ---------- MEMBROS ATUAIS ----------
  membrosAtuais: {
    titulo: "Membros",
    lista: [
      { nome: "Jogador1", cargo: "PvP Master", foto: "imagens/membro6.png" },
      { nome: "Jogador2", cargo: "Construtor", foto: "imagens/membro7.png" },
      { nome: "Jogador3", cargo: "Redstone", foto: "imagens/membro8.png" },
      { nome: "Jogador4", cargo: "Arqueiro", foto: "imagens/membro9.png" },
      { nome: "Jogador5", cargo: "Suporte", foto: "imagens/membro10.png" },
      { nome: "Jogador6", cargo: "Explorador", foto: "imagens/membro11.png" },
      { nome: "Jogador7", cargo: "PvP Elite", foto: "imagens/membro12.png" },
      { nome: "Jogador8", cargo: "Base Builder", foto: "imagens/membro13.png" },
      { nome: "Jogador9", cargo: "Farming", foto: "imagens/membro14.png" },
      { nome: "Jogador10", cargo: "Trainee", foto: "imagens/membro15.png" }
    ]
  },

  // ---------- TIERS DE PVP ----------
  tiers: {
    titulo: "Tiers da SixOnTop",
    subtitulo: "Nossos níveis no PvP",
    lista: [
      { tier: "LT3", nome: "Lendário Tier 3", icone: "imagens/tier-lt3.png", cor: "#ff0000", categoria: "MCTier" },
      { tier: "LT2", nome: "Lendário Tier 2", icone: "imagens/tier-lt2.png", cor: "#cc0000", categoria: "MCTier" },
      { tier: "LT1", nome: "Lendário Tier 1", icone: "imagens/tier-lt1.png", cor: "#990000", categoria: "MCTier" },
      { tier: "Crystal", nome: "Crystal", icone: "imagens/tier-crystal.png", cor: "#ff1a1a", categoria: "SubTier" },
      { tier: "Diamante", nome: "Diamante", icone: "imagens/tier-diamante.png", cor: "#ff3333", categoria: "SubTier" },
      { tier: "Ouro", nome: "Ouro", icone: "imagens/tier-ouro.png", cor: "#ff4d4d", categoria: "SubTier" },
      { tier: "Ferro", nome: "Ferro", icone: "imagens/tier-ferro.png", cor: "#ff6666", categoria: "SubTier" },
      { tier: "Pedra", nome: "Pedra", icone: "imagens/tier-pedra.png", cor: "#ff8080", categoria: "SubTier" }
    ]
  },

  // ---------- CONQUISTAS ----------
  conquistas: {
    titulo: "Conquistas da SIX",
    itens: [
      "🏆 O Clã com mais vitórias em guerras no servidor 'Minezinho' (30+)",
      "⚔️ O Clã vencedor da Primeira LIGA DE CLÃ do servidor 'Minezinho'",
      "🔥 Melhor clã de PvP 1.9+ da temporada",
      "👑 Clã mais temido do servidor"
    ]
  },

  // ---------- GALERIA ----------
  galeria: {
    titulo: "Galeria do Clã",
    imagens: [
      { src: "imagens/cla-print.jpg", legenda: "Clã completo", destaque: true },
      { src: "imagens/cla-print2.jpg", legenda: "Momento épico" },
      { src: "imagens/cla-print3.jpg", legenda: "Guerra" },
      { src: "imagens/cla-print4.jpg", legenda: "Celebração" }
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Quer entrar na Six?",
    texto: "Venha ser membro da SixOnTop!",
    discord: "https://discord.gg/eEMaUAhSC2",
    instagram: "https://instagram.com/sixontop",
    email: "sixontop@gmail.com",
    onlineCount: 12
  },

  // ---------- RODAPÉ ----------
  rodape: {
    texto: "© 2024 SixOnTop – Feito com ❤️ e muito PvP"
  }
};

// Exporta para ser usado no script principal
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
