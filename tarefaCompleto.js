const prompt = require("prompt-sync")();
let numExercicio = 1;
/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let grausCelsius = parseFloat(
  prompt(
    "Digite uma temperadura em graus Celsius para converter para Fahrenheit: "
  )
);
let grausFahrenheit = (grausCelsius * 9) / 5 + 32;
console.log(
  `${grausCelsius} graus Celsius correspondem à ${grausFahrenheit} graus Fahrenheit.`
);

/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let numeroEleitores = parseInt(prompt("Número de eleitores: "));
let votosBrancos = parseInt(prompt("Número de votos brancos: "));
let votosNulos = parseInt(prompt("Número de votos nulos: "));
let votosValidos = parseInt(prompt("Número de votos válidos: "));

let percentualBrancos = (votosBrancos / numeroEleitores) * 100;
let percentualNulos = (votosNulos / numeroEleitores) * 100;
let percentualValidos = (votosValidos / numeroEleitores) * 100;

console.log(`${percentualBrancos} (percentual de votos brancos)`);
console.log(`${percentualNulos} (percentual de votos nulos)`);
console.log(`${percentualValidos} (percentual de votos válidos)`);

/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let numero1 = parseInt(prompt("Primeiro número: "));
let numero2 = parseInt(prompt("Segundo número: "));
let numero3 = parseInt(prompt("Terceiro número: "));
let numero4 = parseInt(prompt("Quarto número: "));

let operacao1 = numero1 + 25;
let operacao2 = numero2 * 3;
let operacao3 = (numero3 * 0.12).toFixed(2);
numero4 = numero1 + numero2 + numero3;

console.log(`${numero1} + 25 = ${operacao1}`);
console.log(`O triplo do segundo número (${numero2}) é = ${operacao2}`);
console.log(`12% do valor de ${numero3}) é = ${operacao3}`);
console.log(
  `A soma dos valores originais dos três primeiros números (${numero1} + ${numero2} + ${numero3}) é = ${numero4}`
);

/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let prova1 = parseFloat(prompt("Primeira nota: "));
let prova2 = parseFloat(prompt("Segunda nota: "));
let media = (prova1 + prova2) / 2;

console.log(`Média semestral: ${media.toFixed(2)}`);
if (media >= 6) console.log("PARABÉNS! Você foi aprovado");

/*
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
prova1 = parseFloat(prompt("Primeira nota: "));
prova2 = parseFloat(prompt("Segunda nota: "));
media = (prova1 + prova2) / 2;

console.log(`Média semestral: ${media.toFixed(2)}`);
let mensagem =
  media >= 6
    ? "PARABÉNS! Você foi aprovado"
    : "Você foi REPROVADO! Estude mais";
console.log(mensagem);

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
const A = parseInt(prompt("Lado A: "));
const B = parseInt(prompt("Lado B: "));
const C = parseInt(prompt("Lado C: "));

if (A + B > C && A + C > B && B + C > A) {
  if (A === B && B === C) console.log("Triângulo eqüilátero");
  else if (A === B || A === C || B === C) console.log("Triângulo isóceles");
  else if (A !== B && B !== C) console.log("Triângulo escaleno");
} else console.log("Não forma triângulo");

/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let quantidadeMacas = parseInt(prompt("Quantidade de maçãs compradas: "));
const VALOR_UNITARIO = 0.3;
const VALOR_DUZIA = 0.25;
let resultado =
  quantidadeMacas < 12
    ? quantidadeMacas * VALOR_UNITARIO
    : quantidadeMacas * VALOR_DUZIA;
console.log(
  `O valor para compra de ${quantidadeMacas} maçã(s) é R$ ${resultado.toFixed(
    2
  )}`
);

/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
const valor1 = parseInt(prompt("Digite o primeiro valor: "));
const valor2 = parseInt(prompt("Digite o segundo valor: "));

if (valor1 < valor2) console.log(`${valor1} - ${valor2}`);
else console.log(`${valor2} - ${valor1}`);

/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
1 - Sul
2 - Norte
3 - Leste
4 - Oeste
5 ou 6 - Nordeste
7, 8 ou 9 - Sudeste
10 até 20 - Centro-Oeste
25 até 50 - Nordeste
Fora do intervalo, produto importado.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let codigoOrigem = parseInt(prompt("Digite o código de origem do produto: "));

switch (true) {
  case codigoOrigem === 1:
    console.log("Região Sul");
    break;
  case codigoOrigem === 2:
    console.log("Região Norte");
    break;
  case codigoOrigem === 3:
    console.log("Região Leste");
    break;
  case codigoOrigem === 4:
    console.log("Região Oeste");
    break;
  case codigoOrigem === 5 || codigoOrigem === 6:
    console.log("Região Nordeste");
    break;
  case codigoOrigem >= 7 && codigoOrigem <= 9:
    console.log("Região Sudeste");
    break;
  case codigoOrigem >= 10 && codigoOrigem <= 20:
    console.log("Região Centro-Oeste");
    break;
  case codigoOrigem >= 25 && codigoOrigem <= 50:
    console.log("Região Nordeste");
    break;
  default:
    console.log("Produto Importado");
    break;
}

/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let numero = parseInt(prompt("Digite um número: "));

for (i = 0; i < 10; i++) {
  console.log(numero);
}

/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let verificaParOuImpar;
console.log(
  "Digite um número positivo para verificar se é PAR ou ÍMPAR (para encerrar pressione 'ENTER' ou digite um valor negativo)"
);

do {
  verificaParOuImpar = parseInt(prompt("Digite um número: "));
  if (verificaParOuImpar >= 0 && verificaParOuImpar !== null)
    if (verificaParOuImpar % 2 === 0)
      console.log(`${verificaParOuImpar} é PAR.`);
    else console.log(`${verificaParOuImpar} é IMPAR.`);
} while (verificaParOuImpar >= 0 && verificaParOuImpar !== null);

/*
12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
for (i = 1000; i <= 1999; i++) if (i % 11 === 5) console.log(i);

/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let valorTabuada;

for (i = 1; i <= 5; i++) {
  valorTabuada = parseInt(prompt(`Digite o valor ${i}: `));
  for (j = 1; j <= valorTabuada; j++)
    console.log(`${j} x ${valorTabuada} = ${j * valorTabuada}`);
}

/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let contador = 0,
  acumulador = 0,
  leitura;

while (leitura !== 0) {
  leitura = parseFloat(prompt("Digite um número ou zero para parar: "));
  leitura !== 0 ? (acumulador += leitura) && contador++ : 0;
}

console.log(
  `A média dos valores digitados é igual a ${(acumulador / contador).toFixed(
    1
  )}`
);

/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let num = 0,
  peso = 0,
  somaMultiplicacaoNumeroPeso = 0,
  somaPesos = 0,
  leituraEx15;

while (leituraEx15 !== 0) {
  leituraEx15 = parseFloat(prompt("Digite um número ou zero para parar: "));
  num = leituraEx15 !== 0 ? leituraEx15 : 0;
  if (leituraEx15 !== 0) {
    peso = parseFloat(prompt(`Digite o peso do número ${num}: `));
    somaMultiplicacaoNumeroPeso += num * peso;
    somaPesos += peso;
  }
}

console.log(
  "A média ponderada dos valores digitados é igual a :",
  (somaMultiplicacaoNumeroPeso / somaPesos).toFixed(2)
);

/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/
console.log(` --- EXERCICIO ${numExercicio++} ---`);
let count = 50;
let teste = 100;
while (count > 0) {
  if (primo(teste)) {
    console.log(teste);
    count--;
    teste++;
  } else teste++;
}

/*
com 2 e o 3 consigo eliminar até o 24
a partir daí, definir uma variável iniciando em 5
testar 5  e  (5 + 2 = 7), depois acrescentar 6 na variável e repetir os testes
testar 11 e (11 + 2 = 13)
*/

function primo(numero) {
  if (numero === 2 || numero === 3) return true;
  if (numero <= 1 || numero % 2 === 0 || numero % 3 === 0) return false;
  let teste = 5;
  while (teste * teste <= numero) {
    if (numero % teste === 0 || numero % (teste + 2) === 0) return false;
    teste += 6;
  }
  return true;
}
