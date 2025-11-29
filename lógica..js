// Declaração de variáveis
let a = 5;
let b = 3;

// Operação básica (soma)
let soma = a + b;
console.log(`Soma de a e b: ${soma}`);

// Estrutura condicional if/else
if (soma > 5) {
  console.log('A soma é maior que 5');
} else {
  console.log('A soma é 5 ou menor');
}

// Usando if, else if e else para múltiplos cenários
let operador = '+';
if (operador === '+') {
  console.log(`Resultado da soma: ${a + b}`);
} else if (operador === '-') {
  console.log(`Resultado da subtração: ${a - b}`);
} else {
  console.log('Operador inválido');
}

// Laço de repetição for
console.log('Contagem de 1 a 5:');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Função simples para encapsular lógica
function calculaOperacao(x, y, op) {
  if (op === '+') {
    return x + y;
  } else if (op === '-') {
    return x - y;
  } else if (op === '*') {
    return x * y;
  } else if (op === '/') {
    return x / y;
  } else {
    return 'Operador inválido';
  }
}

// Testa a função
console.log(calculaOperacao(10, 2, '*'));
