let maxNumeros = parseInt(prompt('Cual será el MAYOR numero que esta aplicación pueda generar?'));
let minNumeros = parseInt(prompt('Cual será el MENOR numero que esta aplicación pueda generar?'));

let numeros = parseInt(prompt('Cuantos números quieres generar?'));

let arrNumeros = [];

for (let i = 0; i < numeros; i++) {
    arrNumeros.push(Math.round(Math.random()* (maxNumeros - minNumeros) + minNumeros));
}

console.log(arrNumeros);