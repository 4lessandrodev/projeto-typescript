# Typescript ptoject

- npm init -y
- npm install typescript -D
- npm install express --save
- npm install @types/express -D
- npm tsc --init
- npx tsc --init

- configure o arquivo tsconfig,json descomentar a tag "outDir" passando o caminho onde os arquivos devem ser compilados

- no package.json configurar o script start para inicializar o arquivo app.js compilado na pasta dist

- instalar o ts-node-dev para automatizar o processo de compilação "npm install ts-node-dev --save-dev"

- configurar no package.json do projeto a tag dev para executar o arquivo app.js com o ts-node-dev
"dev:server": "ts-node-dev --respawn --transpile-only src/app.ts"
