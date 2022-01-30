# Semana Omnistack11
Creation of the Backend developed on Node.js platform, during the week OmniStack11.

[![Current Version](https://flat.badgen.net/npm/v/celebrate?icon=npm)](https://www.npmjs.org/package/celebrate)
[![Build Status](https://flat.badgen.net/travis/arb/celebrate?icon=travis)](https://travis-ci.org/arb/celebrate)

## Celebrate
>Link Github: [Celebrate](https://github.com/arb/celebrate/blob/master/README.md)

## Joi
>Link Api [Joi](https://hapi.dev/module/joi/)

## Criação de Teste
Para utilizarmos teste em nossa aplicação utilizaremo o Framework Jest, sendo assim, na raiz do projeto executa o seguinte comando:

>Link Documentação: [Jest](https://jestjs.io/docs/en/getting-started)

    npm install jest

* Após a instalação do Jest, realizamos algumas configurações executando os seguintes comandos: 
    - >npx jest --init
    - Responda algumas perguntas:
        - Would you kike to use Jest when running "test" script in "package.json"? Yes
        - Choose the teste environment that will be used for testing: escolha Node ou jsdom
        - Do you want Jest to add coverage reports: N
        - Automatically clear mock calls and instances between eery test? Yes

Deste modo, é criado um arquivo com o nome de *'jest.config.js'* 

### Exemplo de Teste unitário

```javascript
    const generateUniqueId = require('../../src/utils/generetionUniqueId');

    describe('Generation Unique Id', () => {
        it('should generate an unique ID', () => {
            const id =  generateUniqueId();
            expect(id).toHaveLength(8);
        });
    });
```

Rodar os testes

> npm test

Configurando o Banco de dados para os teste de integração
para trabalhar com as requisições api instalaremo uma biblioteca para chamada no modo teste

# SuperTest
Link: [https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)

>npm install supertest --save-dev



## About

The motivation with this module is to provide a high-level abstraction for testing
HTTP, while still allowing you to drop down to the [lower-level API](https://visionmedia.github.io/superagent/) provided by superagent.

## Getting Started

Install SuperTest as an npm module and save it to your package.json file as a development dependency:

```bash
npm install supertest --save-dev
```

## Fonte da semana Omnistak
>Link Semana Omnistak 11 [Vídeo Youtube](https://www.youtube.com/watch?v=-jtO7JMtm3o&list=PLWcRbSW0qUDex3wInV9cdu1--pOviiwLU)
