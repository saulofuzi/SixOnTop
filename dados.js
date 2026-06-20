// =====================================================
//  DADOS DO SITE – Edite somente este arquivo!
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "SixOnTop",
    subtitulo: "A jornada de um clã fora do comum",
    // imagem de fundo do herói (dentro da pasta imagens/)
    imagemHeroi: "imagens/hero.jpg"
  },

  // ---------- SOBRE O CLÃ ----------
  sobre: {
    titulo: "Quem somos?",
    historia: [
      "Nascemos em uma noite chuvosa de 2022, quando cinco amigos cansados de clãs genéricos decidiram criar o nosso próprio espaço.",
      "Não somos 'o maior clã', nem 'o mais forte'. Somos simplesmente SixOnTop – um grupo onde o respeito e a criatividade vêm antes de qualquer rank.",
      "Hoje somos mais de 30 membros ativos, com construções próprias, eventos semanais e uma base que é a nossa segunda casa."
    ],
    imagemSobre: "imagens/sobre.jpg"
  },

  // ---------- MEMBROS FUNDADORES ----------
  membros: {
    titulo: "Fundadores",
    lista: [
      { nome: "Lucas_OP", cargo: "Líder & Construtor", foto: "imagens/membro1.png" },
      { nome: "Mineiro_72", cargo: "Redstone Engineer", foto: "imagens/membro2.png" },
      { nome: "Dark_Wolf", cargo: "PvP Trainer", foto: "imagens/membro3.png" },
      { nome: "Aranha_Z", cargo: "Explorador Chefe", foto: "imagens/membro4.png" },
      { nome: "Foxy_YT", cargo: "Mídias & Eventos", foto: "imagens/membro5.png" }
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
