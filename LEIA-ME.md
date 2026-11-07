# Casa de Nazaré

PWA de organização da casa e rotina das crianças. Sem dependências: `node servidor.js` (porta `PORT`, padrão 3000).

- `publico/index.html` — o app inteiro (dados salvos no celular via localStorage; exportar/importar JSON nos ajustes)
- `publico/manifest.webmanifest`, `publico/sw.js`, `publico/icones/` — instalação como app e uso offline
- `servidor.js` + `package.json` — para o Railway (Start command: `npm start`)

Para instalar no celular: abrir a URL (precisa ser https), menu do navegador → "Adicionar à tela inicial".
