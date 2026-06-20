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
    titulo: "Conquistas que carregamos com orgulho",
    itens: [
      "🏆 Base mais bonita do servidor (votação popular – 2023)",
      "⚔️ Vencedores do Torneio de Inverno (categoria equipes)",
      "🧱 Primeiro clã a construir um castelo no Nether (sério, temos provas!)"
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Venha jogar conosco!",
    texto: "Se você se identificou com a nossa vibe, manda um oi no Discord ou no Instagram.",
    discord: "https://discord.gg/seu-link",
    instagram: "https://instagram.com/seu-perfil",
    email: "contato@sixontop.com"
  },

  // ---------- RODAPÉ ----------
  rodape: {
    texto: "© 2025 SixOnTop – Feito com blocos e muita paixão."
  }
};

// Exporta para ser usado no script principal
// (não mexa nesta linha)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
