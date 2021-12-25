let num = parseInt(prompt('Dame un número para que lo transofrme a base decimal'));

let numBinario = [];

function aBinario(numero) {
    
    while (numero > 1) {
        numBinario.push(parseInt((numero % 2)));
        numero /= 2;
       
    }
    console.log(numBinario)
}
aBinario(num)

