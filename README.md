
# 🚀 REDLINE — Mini Curso Profissional de JavaScript

## ✨ Transforme suas ideias em código com JavaScript!

Este é o **Redline (Guia Rápido)** do nosso Mini Curso, um material organizado para você dominar os conceitos essenciais do JavaScript de forma **limpa, objetiva e profissional**.

---

## 📌 1. O que é JavaScript?

O JavaScript (JS) é a linguagem do dinamismo. É usada para criar **páginas web interativas**, sistemas robustos, **aplicativos mobile** (React Native), **bots**, **automações** e **servidores completos** (Node.js).

O JS funciona como um **intérprete**, executando instruções (comandos) linha por linha.

> **Exemplos de Instruções:**
> * `let nome = "Gwen"` // **Cria** variável
> * `console.log(nome)` // **Exibe** na tela
> * `const contato = "5527998158753"` // **Define** contato

---

## 💡 2. Fundamentos Essenciais (Sintaxe Básica)

A base para qualquer projeto em JS.

| Conceito | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Variável** (`let`/`const`) | Armazena valores que podem mudar (`let`) ou não (`const`). | `let x = 10` <br> `const PI = 3.14` |
| **Função** | Bloco de código que executa uma ação específica. | `function saudacao(){...}` |
| **Objeto** | Estrutura para dados organizados por `chave: valor`. | `{nome:"Ana", idade: 30}` |
| **Array** | Uma lista ordenada de elementos (valores). | `[1, 2, "texto"]` |
| **Condição** | Estrutura de decisão para executar código se uma expressão for `true`. | `if(x > 5){...}` |
| **Loop** | Estrutura para repetição de código. | `for(let i = 0; i < 5; i++){...}` |

---

## 🧮 3. Lógica Intermediária — Funções e Operadores

### Funções Simples

Funções são o coração da organização do código.

```javascript
// A função 'saudacao' recebe um 'nome' e retorna uma string
function saudacao(nome){
  return "Olá " + nome + "!";
}

// Uso: console.log(saudacao("Visitante"));

Tabela de Operadores
Usados para realizar operações e criar condições lógicas.
| Tipo | Operadores | Função |
|---|---|---|
| Aritméticos | +, -, *, /, % | Realizam cálculos matemáticos. |
| Comparação | ==, ===, !=, >, <, >= | Comparar valores (retorna true ou false). |
| Lógicos | && (AND), ` |  |
🧠 4. Lógica Avançada — Métodos de Array
Os métodos map, filter e reduce são essenciais para manipulação eficiente de dados. 
🔹 map (Transformação)
Cria um novo array aplicando uma função a cada elemento.
let numeros = [1, 2, 3];
// Dobra cada número: [2, 4, 6]
let dobro = numeros.map(n => n * 2); 

🔹 filter (Filtragem)
Cria um novo array com elementos que atendem a uma condição (true).
let numeros = [1, 2, 3, 4];
// Seleciona apenas os pares: [2, 4]
let pares = numeros.filter(n => n % 2 === 0);

🔹 reduce (Redução)
Reduz o array a um único valor (soma, média, etc.).
let numeros = [1, 2, 3];
// Soma todos os números, começando em 0: 6
let soma = numeros.reduce((total, n) => total + n, 0); 

📝 5. Desafios Práticos do Mini Curso
Pratique a teoria! Resolva estes exercícios usando o que você aprendeu.
 * Crie uma função que receba um número e retorne a string “Par” ou “Ímpar”.
 * Use map() para aplicar 10% de desconto em uma lista de preços.
 * Use filter() para remover todos os números menores que 50 de um array.
 * Use reduce() para somar todos os valores de um array.
 * Crie um objeto aluno com nome, notas (array) e uma função para calcular a média.
🌐 6. Exemplo Completo — Servidor com Express
O JavaScript no backend com Node.js e o framework Express permite criar APIs e sites completos.
const express = require("express");
const app = express();

// Rota principal: '/'
app.get("/", (req, res) => {
  res.send("Bem-vindo ao Mini Curso de JavaScript!");
});

// Rota de exemplo usando map()
app.get("/map", (req, res) => {
  const lista = [1, 2, 3, 4];
  const dobrados = lista.map(n => n * 2);
  res.json({ resultado: dobrados }); // Envia um JSON
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000...")); 

> Explicação Resumida:
>  * express(): Cria a instância do servidor.
>  * app.get(): Define uma rota (endereço web) que responde a requisições GET.
>  * res.send()/res.json(): Envia a resposta de volta ao navegador/cliente.
>  * listen(3000): Inicia o servidor na porta 3000.
> 
📚 7. Tabelas de Bolso (Memorização Rápida)
Tipos de Dados
| Tipo | Exemplo | Uso Principal |
|---|---|---|
| String | "Olá Mundo" | Texto, nomes, frases. |
| Number | 10, 3.14 | Cálculos, quantidades. |
| Boolean | true ou false | Decisões lógicas. |
| Array | ["a", "b"] | Listas ordenadas de elementos. |
| Object | {nome: "Ana"} | Estruturas de dados complexas. |
Estruturas de Controle
| Estrutura | Função | Exemplo |
|---|---|---|
| if/else | Controla o fluxo do programa com base em condições. | if(idade >= 18) |
| for | Repetição com contador definido. | for(i = 0; i < 10; i++) |
| while | Repetição enquanto uma condição for true. | while(energia > 0) |
✅ Resumo: O que você aprendeu?
 * O funcionamento e a importância do JavaScript no desenvolvimento moderno.
 * A sintaxe de instruções, variáveis, funções, objetos e arrays.
 * A lógica avançada com os métodos de alto nível: map, filter, e reduce.
 * A criar um mini-servidor web usando o Express (Node.js).
 * A praticar com exercícios reais e o uso de tabelas de memorização.
👋 Para contato e dúvidas sobre o curso:
5527998158753

**Gostaria de adicionar mais alguma seção ou detalhe específico ao README?**


Isso significa que:

- Ele executa um comando por vez (“single-thread”)
- O código é lido linha por linha sem compilar antes (“interpretado”)
- Pode executar tarefas em paralelo usando Promises e async/await (“assíncrono”)

O motor do JavaScript (V8 no Chrome e Node) faz:

1. **Ler o código**
2. **Interpretar**
3. **Executar**
4. Gerenciar eventos, timers, promessas e chamadas externas

---

## 🔥 Explicação da lógica de cada arquivo

### ▶ index.js
Arquivo principal de testes.  
Aqui você importa os outros módulos e executa os exercícios.

### ▶ counter.js  
Mostra como funcionam **closures**, que permitem guardar valores dentro de uma função.

### ▶ retry.js  
Mostra como fazer tentativas automáticas de uma função assíncrona,
com limite e tempo entre cada tentativa.

### ▶ math.js  
Funções matemáticas simples para demonstrar modularização.

### ▶ string.js  
Funções para manipular textos: inverter, contar caracteres, etc.

### ▶ express-site.js  
Um **mini-site usando Express** que importa e usa todos os módulos acima para demonstrar como aplicá-los em um servidor real.

---

## 📞 Suporte e contato  
**WhatsApp**: 5527998158753
Essas instruções deixam o estudo **mais organizado**, **objetivo** e **fácil de acompanhar**, especialmente para quem está começando ou quer aprender assuntos avançados de forma clara.

---

## 🚀 Como rodar o projeto

1. Crie uma pasta:
