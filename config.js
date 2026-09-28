/* ============================================================
   WHITE — ARQUIVO PRINCIPAL DE EDIÇÃO
   Edite este arquivo pelo GitHub e a Vercel atualiza o site.
   Não precisa mexer no HTML para trocar textos, membros, ranking,
   estatísticas, fotos, Discord ou requisitos.
   ============================================================ */

window.WHITE_CONFIG = {
  site: {
    nome: "WHITE",
    tag: "PVP CLAN",
    logo: "assets/logo.png",
    discord: "https://discord.gg/37Y4QCpx9R",
    rodape: "WHITE — Os que brilham.."
  },

  hero: {
    aviso: "RECRUTAMENTO ABERTO",
    titulo: "SE ENTRAR NA MIRA, VIRA SAUDADE",
    texto: "A WHITE é um clã competitivo de Minecraft PvP feito para quem entra no servidor com um objetivo simples: Ganhar."
  },

  cla: {
    titulo: "INFORMAÇÕES.|CLÃ WHITE.",
    texto: "A WHITE é um clã focado em pvp, com otimos membros em ascenção.",
    frase: "“Somos os melhores !.”"
  },

  estatisticas: [
    { numero: "30+", legenda: "MEMBROS" },
    { numero: 20+", legenda: "GUERRAS" },
    { numero: "+999", legenda: "AURA" },
    { numero: "∞", legenda: "EGO" }
  ],

  // O top 3 aparece no pódio. O restante aparece na tabela abaixo.
  ranking: [
    { nick: "hszin_888", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Líder" },
    { nick: "Saulofuzi", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Líder" },
    { nick: "HenriquePr0", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "LTK7", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "sou_home", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "Marechal_01", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "CamaraJooJ", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "dudumatabot", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "NathanXz_", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "exaltei", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
    { nick: "uJosca", pontos: 0, vitorias: 0, derrotas: 0, kd: "0", funcao: "Membro" },
  ],

  /*
    MEMBROS
    - nick: nome exato no Minecraft.
    - cargo: qualquer cargo que quiser.
    - grupo: usado nos filtros (Liderança, Competitivo, Membro...).
    - frase: texto pequeno do card.

    A render da skin usa MCHeads automaticamente pelo nick.
    O clique "NAMEMC" abre: https://namemc.com/profile/NICK
  */
  membros: [
    { nick: "Saulofuzi", cargo: "Líder", grupo: "Liderança", frase: "Sempre buscar ser melhor." },
    { nick: "Dream", cargo: "Capitão", grupo: "Liderança", frase: "Vazio.." },
    { nick: "Technoblade", cargo: "PvPer", grupo: "Competitivo", frase: "Vazio.." },
    { nick: "Sapnap", cargo: "PvPer", grupo: "Competitivo", frase: "Vazio.." },
    { nick: "BadBoyHalo", cargo: "Membro", grupo: "Membro", frase: "Vazio.." },
    { nick: "Boogwiser", cargo: "Membro", grupo: "Membro", frase: "Vazio.." }
  ],

  // Use arquivos locais dentro de /assets ou URLs externas de imagem.
  galeria: [
    { imagem: "assets/familia.svg", titulo: "FAMILIA", subtitulo: "Unidos" },
    { imagem: "assets/guerra.svg", titulo: "GUERRA", subtitulo: "TEAM FIGHT" },
    { imagem: "assets/momento-3.svg", titulo: "vazio", subtitulo: "vazio" }
  ],

  recrutamento: {
    titulo: "TEM VONTADE?|TEM CAPACIDADE?|PROVA.",
    texto: "Entre no Discord, abra um ticket e manda teu nick, servidores que joga e um clipe. Sem currículo de 14 páginas, pelo amor de Deus 😭",
    requisitos: ["12+ ou maturidade", "Microfone decente", "Atividade no Discord", "Experiência em PvP", "Ter aura infinita"]
  },

  ticker: ["WHITE", "ON", "TOP", "O", "RESTO", "É", "RESTO"]
};
