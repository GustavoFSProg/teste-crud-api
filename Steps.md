Passos

# 1- Instalar o packege.json em um projeto node:

yarn init -y

npm init -y

# 2 -Instalar express cors nodemon

comando: yarn add express cors nodemon

# 3 - Instalar o Eslint Babel

1- yarn add -D eslint
3- ./node_modules/.bin/eslint --init
4- yarn add -D prettier eslint-config-prettier eslint-plugin-prettier@latest --save-dev

# 4 - Configurar o eslint

{
"env": {
"es6": true,
"node": true
},
"extends": ["airbnb-base", "prettier"],
"plugins": ["prettier"],
"globals": {
"Atomics": "readonly",
"SharedArrayBuffer": "readonly"
},
"parserOptions": {
"ecmaVersion": 2018,
"sourceType": "module"
},
"rules": {
"prettier/prettier": "error"
}
}

# 5 - Configurar o Prettier

{
"tabWidth": 2,
"singleQuote": true,
"semi": false,
"trailingComma": "es5"
}

# 6 Instalar o Babel

yarn add babel-cli babel-core babel-node babel-plugin-transform-runtime babel-preset-env

# 7 Criar o arquivo .Babelrc

.babelrc

# 8- Configurar o arquivo Babelrc

         {
              "presets": [
                [
                  "env",
                  {
                    "targets": {
                      "node": "current"
                    }
                  }
                ]
              ]
            }

# 9- Colar os scripts no arquivo packageJSON

"scripts": {
"dev": "NODE_ENV=development nodemon --exec babel-node src/index.js",
"start": "NODE_ENV=production node dist",
"build": "babel src -d dist",
"lint": "eslint --ext .js --ignore-path .gitignore ."
},

# 10 Criar a pasta src e o arquivo index.js

# 11 Instalar o dotenv

yarn add dotenv

# criar o arquivo .env

# Setar a PORT no env = 3001

# criar o servidor no src/index.js
