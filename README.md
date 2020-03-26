# Be the Hero Api
Api em NodeJS que gerencia um sistema que auxilia as ongs a exibir as oportunidades de ajudar.

## Ferramentas

* NodeJS
* Express
* KnexJS
* SQLite3

## Instalando o projeto

Baixe e instale as dependências do projeto

```
$ git clone git@github.com:acmesquita/be-the-hero-api.git
$ cd be-the-hero-api/
$ npm install
```

Cria o banco e atualiza o *schema* pela migrações
```
$ npx knex migrate:latest
```

Roda o servidor
```
$ npm start
```

Acesse via Insomnia e importe o arquivo doc-routes.JSON ou doc-routes.har e utilize visualize todas as requisições da api.

