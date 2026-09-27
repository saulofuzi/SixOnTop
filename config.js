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
    logo: "assets/logo.svg",
    discord: "https://discord.gg/SEU-LINK-AQUI",
    rodape: "WHITE — Minecraft PvP Clan. Feito para competir."
  },

  hero: {
    aviso: "RECRUTAMENTO ABERTO",
    titulo: "NÃO JOGAMOS|PARA PARTICIPAR.|JOGAMOS PARA DOMINAR.",
    texto: "A WHITE é um clã competitivo de Minecraft PvP feito para quem entra no servidor com um objetivo simples: deixar o nick marcado."
  },

  cla: {
    titulo: "FRIO NA ESTÉTICA.|BRUTAL NO PVP.",
    texto: "A WHITE reúne players que levam PvP a sério sem transformar o jogo em emprego. Treino, call, rivalidade, clipes absurdos e uma comunidade que tem identidade própria.",
    frase: "“SE É PRA ENTRAR NA FIGHT, ENTRA PRA SER LEMBRADO.”"
  },

  estatisticas: [
    { numero: "24+", legenda: "MEMBROS" },
    { numero: "8", legenda: "SERVIDORES" },
    { numero: "137", legenda: "VITÓRIAS" },
    { numero: "∞", legenda: "EGO" }
  ],

  // O top 3 aparece no pódio. O restante aparece na tabela abaixo.
  ranking: [
    { nick: "Saulofuzi", pontos: 2840, vitorias: 93, derrotas: 18, kd: "5.17", funcao: "Líder" },
    { nick: "WhiteGhost", pontos: 2510, vitorias: 80, derrotas: 21, kd: "3.81", funcao: "Capitão" },
    { nick: "xVoidBR", pontos: 2295, vitorias: 74, derrotas: 25, kd: "2.96", funcao: "PvPer" },
    { nick: "Clutchzera", pontos: 1970, vitorias: 61, derrotas: 29, kd: "2.10", funcao: "PvPer" },
    { nick: "NoMercy", pontos: 1840, vitorias: 55, derrotas: 31, kd: "1.77", funcao: "PvPer" },
    { nick: "W4rrior", pontos: 1655, vitorias: 49, derrotas: 33, kd: "1.48", funcao: "Membro" }
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
    { nick: "Saulofuzi", cargo: "Fundador", grupo: "Liderança", frase: "Call, estratégia e o botão de ban moral." },
    { nick: "Dream", cargo: "Capitão", grupo: "Liderança", frase: "Troque pelo nick real do seu membro." },
    { nick: "Technoblade", cargo: "PvPer", grupo: "Competitivo", frase: "Exemplo visual — edite no config.js." },
    { nick: "Sapnap", cargo: "PvPer", grupo: "Competitivo", frase: "Combo primeiro. Pergunta depois." },
    { nick: "BadBoyHalo", cargo: "Membro", grupo: "Membro", frase: "Disciplina, presença e call limpa." },
    { nick: "Skeppy", cargo: "Membro", grupo: "Membro", frase: "Sempre pronto pra puxar fight." }
  ],

  // Use arquivos locais dentro de /assets ou URLs externas de imagem.
  galeria: [
    { imagem: "assets/momento-1.svg", titulo: "CLUTCH", subtitulo: "1V3 • RANKED" },
    { imagem: "assets/momento-2.svg", titulo: "DOMÍNIO", subtitulo: "TEAM FIGHT" },
    { imagem: "assets/momento-3.svg", titulo: "GG", subtitulo: "SEM CHORO" }
  ],

  recrutamento: {
    titulo: "TEM MECÂNICA?|TEM MENTAL?|PROVA.",
    texto: "Entre no Discord, abra um ticket e manda teu nick, servidores que joga e um clipe. Sem currículo de 14 páginas, pelo amor de Deus 😭",
    requisitos: ["16+ ou maturidade", "Microfone decente", "Atividade no Discord", "Experiência em PvP", "Sem ego insuportável"]
  },

  ticker: ["WHITE", "PVP", "CLUTCH", "RANKED", "COMUNIDADE", "BLACK / WHITE", "NO MERCY"]
};
