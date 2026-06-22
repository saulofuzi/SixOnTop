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

  // ---------- MEMBROS ATUAIS ----------
  membrosAtuais: {
    titulo: "Membros",
    lista: [
      { nome: "Jogador1", cargo: "PvP", foto: "imagens/membro6.png" },
      { nome: "Jogador2", cargo: "Construtor", foto: "imagens/membro7.png" },
      { nome: "Jogador3", cargo: "Redstone", foto: "imagens/membro8.png" },
      { nome: "Jogador4", cargo: "Arqueiro", foto: "imagens/membro9.png" },
      { nome: "Jogador5", cargo: "Suporte", foto: "imagens/membro10.png" },
      { nome: "Jogador6", cargo: "Explorador", foto: "imagens/membro11.png" },
      { nome: "Jogador7", cargo: "PvP", foto: "imagens/membro12.png" },
      { nome: "Jogador8", cargo: "Base Builder", foto: "imagens/membro13.png" },
      { nome: "Jogador9", cargo: "Farming", foto: "imagens/membro14.png" },
      { nome: "Jogador10", cargo: "Trainee", foto: "imagens/membro15.png" }
    ]
  },

  // ---------- TIERS DE PVP (MCTIERS & SUBTIERS) ----------
  tiers: {
    titulo: "Tiers da SixOnTop",
    subtitulo: "Nossos níveis no PvP",
    lista: [
      // ===== MCTIERS =====
      {
        tier: "LT3",
        nome: "Lendário Tier 3",
        icone: "imagens/tier-lt3.png",
        cor: "#FFD700",
        categoria: "MCTier"
      },
      {
        tier: "LT2",
        nome: "Lendário Tier 2",
        icone: "imagens/tier-lt2.png",
        cor: "#C0C0C0",
        categoria: "MCTier"
      },
      {
        tier: "LT1",
        nome: "Lendário Tier 1",
        icone: "imagens/tier-lt1.png",
        cor: "#CD7F32",
        categoria: "MCTier"
      },
      // ===== SUBTIERS =====
      {
        tier: "Crystal",
        nome: "Crystal (Topo)",
        icone: "imagens/tier-crystal.png",
        cor: "#00FFFF",
        categoria: "SubTier"
      },
      {
        tier: "Diamante",
        nome: "Diamante",
        icone: "imagens/tier-diamante.png",
        cor: "#4FC3F7",
        categoria: "SubTier"
      },
      {
        tier: "Ouro",
        nome: "Ouro",
        icone: "imagens/tier-ouro.png",
        cor: "#FFD700",
        categoria: "SubTier"
      },
      {
        tier: "Ferro",
        nome: "Ferro",
        icone: "imagens/tier-ferro.png",
        cor: "#A9A9A9",
        categoria: "SubTier"
      },
      {
        tier: "Pedra",
        nome: "Pedra",
        icone: "imagens/tier-pedra.png",
        cor: "#808080",
        categoria: "SubTier"
      }
    ]
  },

  // ---------- CONQUISTAS ----------
  conquistas: {
    titulo: "Conquistas da SIX",
    itens: [
      "🏆 O Clã com mais vitorias em guerras no servidor 'Minezinho' (30+)",
      "⚔️ O Clã vencedor da Primeira LIGA DE CLÃ do servidor 'Minezinho'"
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Quer entrar na Six?",
    texto: "Venha ser membro da SixOnTop, clique no link abaixo!",
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
