evite uso emoji,e tudo num so redline

```markdown
# JavaScript & Node.js - Exercícios Práticos

Repositório com exercícios fundamentais de JavaScript e Node.js. Todos os arquivos estão organizados na raiz do projeto para facilitar o aprendizado e execução.

## Estrutura do Projeto

```
javascript-nodejs/
├── README.md                 # Documentação completa
├── package.json              # Configurações npm e scripts
├── .gitignore               # Arquivos ignorados pelo Git
├── index.js                 # Menu principal
├── exercicio-01-variaveis.js     # Declaração de variáveis e operações
├── exercicio-02-condicionais.js  # Estruturas if/else e switch
├── exercicio-03-loops.js         # Laços for, while e forEach
├── exercicio-04-funcoes.js       # Funções tradicionais e arrow functions
├── calculadora-cli.js           # Calculadora interativa no terminal
└── servidor-simples.js          # Servidor HTTP com rotas básicas
```

## Conteúdo dos Exercícios

| Arquivo                      | Conceitos Demonstrados                          |
|------------------------------|------------------------------------------------|
| exercicio-01-variaveis.js    | let, const, var, template literals, operações matemáticas |
| exercicio-02-condicionais.js | if/else if/else, switch/case, operadores lógicos |
| exercicio-03-loops.js        | for, while, forEach, manipulação de arrays     |
| exercicio-04-funcoes.js      | funções tradicionais, arrow functions, callbacks |
| calculadora-cli.js           | readline, tratamento de entrada/saída, validação |
| servidor-simples.js          | módulo http, rotas, respostas HTTP, status 404 |

## Pré-requisitos

- Node.js versão 18 ou superior
- npm (gerenciador de pacotes Node.js)
- Editor de texto (VS Code recomendado)

## Instalação

```
git clone <repository-url>
cd javascript-nodejs
npm install
```

## Scripts Disponíveis

```
npm start                 # Exibe menu principal com todos os exercícios
npm run exercicio1        # Executa exercício 1 - Variáveis
npm run exercicio2        # Executa exercício 2 - Condicionais
npm run exercicio3        # Executa exercício 3 - Loops
npm run exercicio4        # Executa exercício 4 - Funções
npm run calculadora       # Executa calculadora interativa CLI
npm run servidor          # Inicia servidor HTTP na porta 3000
```

## Exemplos de Execução

### Exercício 1 - Saída esperada:
```
Exercício 01: Variáveis e Tipos de Dados

Dados da pessoa:
Nome: Maria Silva
Idade: 28 anos
Salário: R$ 2500.50
Altura: 1.65 m

Operações matemáticas:
15 + 7 = 22
15 - 7 = 8
15 * 7 = 105
15 / 7 = 2.14
```

### Servidor HTTP:
```
npm run servidor
```
Acesse http://localhost:3000
- `/` - Página inicial
- `/sobre` - Página sobre o projeto
- Outras rotas - Retorna 404

## package.json Completo

```
{
  "name": "javascript-nodejs-exercicios",
  "version": "1.0.0",
  "description": "Exercícios práticos de JavaScript e Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "exercicio1": "node exercicio-01-variaveis.js",
    "exercicio2": "node exercicio-02-condicionais.js",
    "exercicio3": "node exercicio-03-loops.js",
    "exercicio4": "node exercicio-04-funcoes.js",
    "calculadora": "node calculadora-cli.js",
    "servidor": "node servidor-simples.js"
  },
  "keywords": ["javascript", "nodejs", "exercicios", "aprendizado"],
  "author": "Desenvolvedor",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## .gitignore

```
node_modules/
.DS_Store
.env
*.log
coverage/
```

## Suporte Técnico

Para dúvidas ou assistência técnica:
WhatsApp: https://wa.me/5527998158753

## Contribuições

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: descrição da funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

MIT License - veja LICENSE para detalhes completos.

---

Repositório desenvolvido para ensino prático de JavaScript e Node.js com estrutura simplificada e arquivos centralizados na raiz do projeto.[web:134][web:135]
```

**Este é o README.md COMPLETO com tudo integrado. Copie e cole na raiz do projeto junto com os outros 9 arquivos mencionados anteriormente.**

Citações:
[1] node/doc/README.md at main · nodejs/node https://github.com/nodejs/node/blob/main/doc/README.md
[2] Folder structure for a Node JS project https://www.geeksforgeeks.org/node-js/folder-structure-for-a-node-js-project/
[3] Nodejs project structure https://www.reddit.com/r/node/comments/7ltao4/nodejs_project_structure/
[4] Folder Structure for NodeJS & ExpressJS project https://dev.to/mr_ali3n/folder-structure-for-nodejs-expressjs-project-435l
[5] Node.js Project Structure: Best Practices with Real-World ... https://javascript.plainenglish.io/node-js-project-structure-best-practices-with-real-world-example-6539fa89d469
[6] Advanced Node.js Project Structure Tutorial https://www.cloudbees.com/blog/advanced-node-js-project-structure-tutorial
[7] Node.js project architecture best practices https://blog.logrocket.com/node-js-project-architecture-best-practices/
[8] How do you properly structure your project? : r/node https://www.reddit.com/r/node/comments/1ijv4gp/how_do_you_properly_structure_your_project/
[9] Directory structure for JavaScript/Node Projects https://gist.github.com/tracker1/59f2c13044315f88bee9
[10] Node.js API documentation https://nodejs.org/docs/latest/api/
[11] A Study of Guide Documentation for Introductory Flutter Programming Learning with Exercises https://ieeexplore.ieee.org/document/11012814/
[12] Simple Interventions Can Greatly Improve Clinical Documentation: A Quality Improvement Project of Record Keeping on the Legal Aspect of Dementia at Memory Service https://www.cambridge.org/core/product/identifier/S2056472422003416/type/journal_article
[13] Organization of a Data Storage System for Research Projects to Create a System for Intelligent Processing of Scientific and Technical Documentation https://ieeexplore.ieee.org/document/11219860/
[14] Capacity-Building Training on Website Development for SMA 58 Jakarta Students Using HTML and JavaScript Programming Languages https://pkm.lpkd.or.id/index.php/MasyarakatMandiri/article/view/2140
[15] Enhancing Patient Care Through Improved Escalation Planning and Documentation: A Quality Improvement Project at a District General Hospital https://www.cureus.com/articles/355567-enhancing-patient-care-through-improved-escalation-planning-and-documentation-a-quality-improvement-project-at-a-district-general-hospital
[16] Medical Marijuana Documentation Practices in Patient Electronic Health Records: Retrospective Observational Study Using Smart Data Elements and a Review of Medical Records https://formative.jmir.org/2024/1/e65957
[17] Creation of a System for Processing Scientific and Technical Documentation Based on a Modular Architecture https://ieeexplore.ieee.org/document/10874995/
[18] A study of documentation for software architecture https://link.springer.com/10.1007/s10664-023-10347-2
[19] FORMATION OF OBJECT TOPOLOGY FOR THE HARMONIZATION OF THE EXAMINATION OF THE PROJECT DOCUMENTATION OF CONVERSION OBJECTS https://ered.pstu.ru/index.php/CG/article/view/705
[20] Features of Regulation Document Translation into a Machine-Readable Format within the Verification of Building Information Models https://www.mdpi.com/2673-4109/4/2/22
[21] Non Linear Software Documentation with Interactive Code Examples https://arxiv.org/pdf/2311.18057.pdf
[22] RootJS: Node.js Bindings for ROOT 6 http://arxiv.org/pdf/1704.07887.pdf
[23] Advanced OOP and new syntax patterns for Javascript http://arxiv.org/pdf/2411.08833.pdf
[24] An Empirical Study on README contents for JavaScript Packages http://arxiv.org/pdf/1802.08391.pdf
[25] Chain-of-Experts (CoE): Reverse Engineering Software Bills of Materials
  for JavaScript Application Bundles through Code Clone Search http://arxiv.org/html/2408.16198
[26] Generation of TypeScript Declaration Files from JavaScript Code https://arxiv.org/pdf/2108.08027.pdf
[27] Verifiable Source Code Documentation in Controlled Natural Language https://arxiv.org/pdf/1311.2702.pdf
[28] A Multi-Language Computing Environment for Literate Programming and Reproducible Research https://www.jstatsoft.org/index.php/jss/article/view/v046i03/v46i03.pdf
