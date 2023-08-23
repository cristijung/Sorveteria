# Projeto com React + Redux + RTK + Query

Este projeto é a aplicação do RTK Query usando estilização de Scss

## Tecnologias usadas
### Criação do projeto:
Usando o CRA <br/>
`npx create-react-app nome-do-projeto  --template redux-typescript`<br/>
ou usando o Vite <br/>
`npm init vite@latest vite-number-conversion -- --template react-ts`<br/>
ou usando Parcel<br/>
`npm install -D parcel-bundler babel-preset-react-app react react-dom` <br/>
e depois: <br/>
`npm install --save-dev typescript` <br/>

### Dependências relacionadas

- Redux ToolKit & RTK Query: (https://redux-toolkit.js.org/usage/usage-guide) <br/>
- React Router: (https://reactrouter.com/en/main) <br/>
- Redux Persist: (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#persisting-reactions)<br/>
- TypeScript: (https://www.typescriptlang.org/) <br/>
- Sass: (https://sass-lang.com/)<br/>
- Material UI: (https://mui.com/) <br/>
- Tailwind: (https://tailwindcss.com/) <br/>
- ClasseNames (https://www.npmjs.com/package/classnames) - (https://github.com/JedWatson/classnames)<br/>
- Mockapi.io: (https://mockapi.io/docs) <br/>
- React Content Loader: (https://www.npmjs.com/package/react-content-loader)
- React Icons: (https://react-icons.github.io/react-icons/)

# Análise inicial da aplicação a ser desenvolvida

É uma aplicação de uma sorveteria associada a e-comerce, portanto temos os seguintes tópicos:
1. Uma topbar (header) onde encontramos o logotipo e o nome da sorveteria, nesta topbar encontraremos o carrinho de compras + uma barra de busca
2. Uma barnav com os links 
   - Home
   - Sobre nós
   - Vendas online
   - Contato
3. Uma barra com os tipos de sorvetes que estão sendo vendidos online (categorias de sorvete) + um menu drop down com a seleção dos mais vendidos
4. No principal a grade com os sorvetes (imagens consumidas de API → mockapi → MockAPI Docs) 
5. Um footer com as informações gerais da sorveteria

## Uma observação: 
Neste projeto também estamos usando um recurso (biblioteca) bem interessante que é o Redux Persist. É responsável por auxiliar no gerenciamento de estado. Com ele é possível armazenar o estado do Redux em um local de armazenamento persistente, como o armazenamento local do navegador ou o armazenamento do dispositivo móvel.

Isso permite que o estado do Redux seja mantido mesmo quando o usuário atualiza ou fecha o aplicativo, ou quando o usuário troca de página ou aplicativo. Quando o aplicativo é iniciado novamente, o estado persistente é recuperado do armazenamento persistente e usado para restaurar o estado do Redux.

O Redux Persist é especialmente útil para aplicativos que têm um grande estado do Redux que precisa ser mantido entre as sessões do usuário. Ele também é útil para aplicativos que precisam armazenar informações confidenciais do usuário, como autenticação ou preferências.



