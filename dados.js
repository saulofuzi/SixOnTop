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

  // ---------- MEMBROS (UMA LISTA ÚNICA) ----------
  membros: {
    titulo: "Nossa Equipe",
    lista: [
      // ---- Fundadores (mantive os cargos originais) ----
      { nome: "Saulofuzi", cargo: "Fundador", foto: "imagens/membro1.png" },
      { nome: "Suzly", cargo: "Lider", foto: "imagens/membro2.png" },
      { nome: "uCarlsoXz_", cargo: "Sub Lider", foto: "imagens/membro3.png" },
      { nome: "uJosca", cargo: "Gerente", foto: "imagens/membro4.png" },
      { nome: "Black_KiritoXz", cargo: "Mobile kkk", foto: "imagens/membro5.png" },
      
      // ---- Membros novos (preencha com nomes reais depois) ----
      { nome: "Membro1", cargo: "PvP", foto: "imagens/membro6.png" },
      { nome: "Membro2", cargo: "Construtor", foto: "imagens/membro7.png" },
      { nome: "Membro3", cargo: "Redstone", foto: "imagens/membro8.png" },
      { nome: "Membro4", cargo: "Arqueiro", foto: "imagens/membro9.png" },
      { nome: "Membro5", cargo: "Suporte", foto: "imagens/membro10.png" },
      { nome: "Membro6", cargo: "Explorador", foto: "imagens/membro11.png" },
      { nome: "Membro7", cargo: "PvP", foto: "imagens/membro12.png" },
      { nome: "Membro8", cargo: "Base Builder", foto: "imagens/membro13.png" },
      { nome: "Membro9", cargo: "Farming", foto: "imagens/membro14.png" },
      { nome: "Membro10", cargo: "Trainee", foto: "imagens/membro15.png" }
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
