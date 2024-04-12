/*Crie um algoritimo que leia uma lista e retorne duas novas listas 
com uma contendo números pares e a outra números ímpares
OBS.: A lista deve conter números de 1 a 9 
e usar a estrutura de repetição FOR*/

// let lista = [1,2,3,4,5,6,7,8,9]
// let pares = []
// let impares = []


// for (let numero of lista){
//     if (numero % 2 == 0){
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

// console.log(pares)
// console.log(impares)

/*Professor de karate Miyagi-san tem uma lista de alunos(objetos) que
contém nome, nota 1 e nota 2, pois ele precisa qie realize o cálculo
da média das notas, e mostre o nome do aluno e a média de cada aluno*/

// const listaAlunos = [
//     {nome: "Daniel", notas: [3, 9]},
//     {nome: "Johnny", notas: [10, 8]},
//     {nome: "Jackie", notas: [4, 2]},
// ]

// for (let aluno of listaAlunos){
//     let media = (aluno.notas[0] + aluno.notas[1]) /2; 
//     console.log(`Nome: ${aluno.nome} - Média: ${media}`);
// }

/*Você foi convidado para desenvolver um algoritimo
para um bingo de terceira idade. É preciso fazer o
sorteio de 6 números entre 1 e 60 de forma aleatória*/

// let sorteio = []

// while (sorteio.length < 6){
//     let numero = Math.ceil(Math.random()*60);

//     if (numero){
//         sorteio.push(numero);
//     }
    
// }
// console.log(sorteio)

/*Crie um algoritmo que gere a porcenttagem de um número*/

// function calcPorc(num, perc){
//     return (num/100)*perc;
// }

// console.log(calcPorc(15,50))