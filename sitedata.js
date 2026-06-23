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
      { nome: "mnitdino", cargo: "Elite PvP", foto: "imagens/dino.png" },
      { nome: "CamaraJooJ", cargo: "Dupador", foto: "imagens/camara.png" },
      { nome: "Ryannz", cargo: "Elite", foto: "imagens/ryan.png" },
      { nome: "cremild0", cargo: "Elite", foto: "imagens/cremildo.png" },
      { nome: "Snoopao", cargo: "Membro", foto: "imagens/snoopao.png" },
      { nome: "Statella", cargo: "Elite", foto: "imagens/statella.png" },
      { nome: "Uriel", cargo: "Elite", foto: "imagens/uriel.png" },
      { nome: "Usovo", cargo: "Membro", foto: "imagens/usovo.png" },
      { nome: "OPdrzINSn7x", cargo: "Aliado", foto: "imagens/pdr.png" },
      { nome: "LznLuiz", cargo: "Membro", foto: "imagens/luiz.png" },
      { nome: "Alazevedo", cargo: "Membro", foto: "imagens/azevedo.png" },
      { nome: "MARECHAL_01", cargo: "Membro", foto: "imagens/marechal.png" },
      { nome: "IMENINAINOCENTE", cargo: "Membro", foto: "imagens/jessica.png" },
      { nome: "FenixH4X", cargo: "Membro", foto: "imagens/Fenix.png" },
      { nome: "IaLouça", cargo: "Membro", foto: "imagens/louca.png" },
      { nome: "S6fz", cargo: "Elite", foto: "imagens/membro1.png" },
      { nome: "tecks", cargo: "Membro", foto: "imagens/tecks.png" },
      { nome: "sou_home", cargo: "Membro", foto: "imagens/souhome.png" },
      { nome: "swy", cargo: "Membro", foto: "imagens/swy.png" },
      { nome: "Zeusx", cargo: "Membro", foto: "imagens/zeus.png" }
    ]
  },

  // ---------- MEMBRO DO MÊS ----------
  membroMes: {
    titulo: "Membro do Mês",
    subtitulo: "O membro mais foda do mês!",
    mes: "Junho 2024",
    membro: {
      nome: "Statella",
      cargo: "Elite",
      foto: "imagens/statella.png",
      motivo: "🏆 Melhor PvP do mês com 25 vitórias consecutivas!",
      destaque: "🔥 Lendário"
    }
  },

  // ---------- TIERS DE PVP ----------
  tiers: {
    titulo: "Tiers da SixOnTop",
    subtitulo: "Nossos níveis no PvP",
    lista: [
      { tier: "HT4 Sword", nome: "S6yx", icone: "imagens/membro1.png", cor: "#ff0000", categoria: "MCTier" },
      { tier: "LT3 Sword", nome: "Statella", icone: "imagens/statella.png", cor: "#cc0000", categoria: "MCTier" },
      { tier: "LT4 Crystal", nome: "S6yx", icone: "imagens/membro1.png", cor: "#990000", categoria: "MCTier" },
      { tier: "HT4 D.Crystal", nome: "mntdino", icone: "imagens/dino.png", cor: "#ff1a1a", categoria: "SubTier" },
      { tier: "HT5 Creeper", nome: "Statella", icone: "imagens/statella.png", cor: "#ff3333", categoria: "SubTier" },
      { tier: "LT3 Elytra", nome: "Statella", icone: "imagens/statella.png", cor: "#ff4d4d", categoria: "SubTier" },
      { tier: "Vazio", nome: "Vazio", icone: "imagens/bow.png", cor: "#ff6666", categoria: "SubTier" },
      { tier: "Vazio", nome: "Vazio", icone: "imagens/tier-pedra.png", cor: "#ff8080", categoria: "SubTier" }
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

  // ---------- MÍDIAS (PRINTS E VÍDEOS) ----------
  midias: {
    titulo: "Mídias",
    subtitulo: "Prints e vídeos do clã",
    lista: [
      // ===== IMAGENS =====
      { 
        tipo: "imagem",
        src: "imagens/cla.jpg",
        legenda: "Clã completo reunido",
        destaque: true
      },
      { 
        tipo: "imagem",
        src: "imagens/cla2.jpg",
        legenda: "Guerra épica"
      },
      { 
        tipo: "imagem",
        src: "imagens/cla3.jpg",
        legenda: "Momento de resenha"
      },
      { 
        tipo: "imagem",
        src: "imagens/cla4.jpg",
        legenda: "Celebração"
      },
      
      // ===== VÍDEOS (YOUTUBE) =====
      { 
        tipo: "video",
        tipoVideo: "youtube",
        id: "dQw4w9WgXcQ", // Coloque o ID do vídeo do YouTube
        legenda: "Melhores momentos do clã"
      },
      { 
        tipo: "video",
        tipoVideo: "youtube",
        id: "VIDEO_ID_AQUI",
        legenda: "Guerra contra o clã rival"
      },
      
      // ===== VÍDEOS (MP4 LOCAL) =====
      { 
        tipo: "video",
        tipoVideo: "mp4",
        src: "imagens/clan-video.mp4",
        legenda: "Gameplay do clã"
      },
      { 
        tipo: "video",
        tipoVideo: "mp4",
        src: "imagens/clan-video2.mp4",
        legenda: "PvP intenso"
      }
    ]
  },

  // ---------- GALERIA ----------
  galeria: {
    titulo: "Galeria do Clã",
    imagens: [
      { src: "imagens/cla.jpg", legenda: "Six On Top", destaque: true },
      { src: "imagens/cla2.jpg", legenda: "Vazio" },
      { src: "imagens/cla3.jpg", legenda: "Vazio" },
      { src: "imagens/cla4.jpg", legenda: "Vazio" }
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Quer entrar na Six?",
    texto: "Venha ser membro da SixOnTop!",
    discord: "https://discord.gg/eEMaUAhSC2",
    instagram: "https://instagram.com/clasixontop",
    email: "sixontop@gmail.com",
    onlineCount: 67
  },

  // ---------- RODAPÉ ----------
  rodape: {
    texto: "© 2024 SixOnTop"
  }
};

// Exporta para ser usado no script principal
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
