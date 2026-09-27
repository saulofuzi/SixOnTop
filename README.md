# WHITE — Minecraft PvP Clan

Site estático pronto para **GitHub + Vercel**, feito em HTML/CSS/JavaScript puro.

## Como editar sem mexer no site inteiro
Abra `config.js`. Praticamente tudo que muda no dia a dia está ali:

- Nome e logo do clã
- Link do Discord
- Textos da home
- Estatísticas
- Ranking
- Membros
- Cargos e grupos
- Galeria
- Requisitos de recrutamento
- Frases do ticker

## Membros e skins automáticas
Adicione um membro em `config.js`:

```js
{ nick: "SeuNick", cargo: "PvPer", grupo: "Competitivo", frase: "Sua frase." }
```

O site usa o nick para renderizar a skin via MCHeads e cria o link do perfil no NameMC automaticamente.

### Por que a skin não é carregada diretamente pelo NameMC?
O NameMC é usado como página de perfil/pesquisa. Para a imagem renderizada, o projeto usa MCHeads, que oferece endpoint próprio para renderização por nick/UUID e funciona melhor para site estático.

## Trocar a logo
1. Coloque sua imagem dentro de `assets/` (ex.: `minha-logo.png`).
2. Em `config.js`, altere:

```js
logo: "assets/minha-logo.png"
```

SVG, PNG e WebP funcionam bem.

## Trocar fotos da galeria
Coloque as imagens em `assets/` e mude a seção `galeria` do `config.js`.

## Publicar no GitHub
1. Crie um repositório novo no GitHub.
2. Extraia este ZIP.
3. Envie todos os arquivos da pasta para a raiz do repositório.
4. Faça commit.

## Publicar na Vercel
1. Entre na Vercel.
2. Clique em **Add New > Project**.
3. Importe seu repositório do GitHub.
4. Framework Preset: **Other** (ou deixe a Vercel detectar).
5. Build Command: deixe vazio.
6. Output Directory: deixe vazio.
7. Clique em Deploy.

Depois disso, cada commit no GitHub gera um novo deploy automático.

## Estrutura

```
WHITE-clan-site/
├─ index.html
├─ style.css
├─ script.js
├─ config.js       <- edite aqui no dia a dia
├─ vercel.json
├─ README.md
└─ assets/
   ├─ logo.svg
   ├─ favicon.svg
   └─ momento-*.svg
```

## Dica
Antes de publicar, troque o link `https://discord.gg/SEU-LINK-AQUI` pelo convite real do seu Discord.
