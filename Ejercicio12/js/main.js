let arrlength = parseInt(prompt('Cuantos números entre el 1 y el 300 contendrá la array?'));
let arrNum = [];

let numDeseado = parseInt(prompt('Cuál es tu número favorito?'))
let arrNumDeseado = [];

for (let i = 0; i < arrlength; i++) {
    arrNum.push(Math.round(Math.random() * (300 - 1) + 1));
    if ((arrNum[i] % 10) == numDeseado) {
        arrNumDeseado.push(arrNum[i]);
    }
}

console.log(arrNum);
console.log(`Se mostrarán los números cuyos últimos digitos sean ${numDeseado}`);
console.log(arrNumDeseado);

