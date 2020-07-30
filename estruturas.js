//a função foi declarada com um parametro
function soma(numero){
    if(numero > 0){
        numero++
        console.log(numero)
    }
}
soma(3)

//SWITCH
const imprimirNota = function (nota)
{
    switch (Math.floor(nota))
    {
        case 10: case 9:
            console.log("DIREETO")
            break
        case 8: case 7:
            console.log("aprovado")
            break //para interromper a sentença e sair do bloco switch
        default: //serve como else
        console.log("recuperação")
    }
}
imprimirNota(9);
imprimirNota(7);
imprimirNota(5);

//Usando while
function inteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredondamento para baixo
}

let opcao = 0;

while (opcao != -1){
    opcao = inteiroAleatorio(-1, 10);
    console.log(`Você sorteou ${opcao}`);
}

console.log("denovo");

do {
    opcao = inteiroAleatorio (-1, 10);
    console.log(`Você sorteou ${opcao}`);
} while (opcao != -1)


const numeros = [6.7, 5, 2.1, 9.8]; //Array
const numerosobj = { numero: 32, nome: "diego", altura: 1.53 } //Objeto
//percorrendo ARRAY com FOR
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
//percorrendo ARRAY com FOR IN
for (let i in numeros){
    console.log(i, numeros[i]);
}
//percorrendo OBJETO com FOR IN
for (let i in numerosobj){
    console.log(`${i} = ${numerosobj[i]}`)
}