let tamañoArray = parseInt(prompt('De cuantos numeros será la array?'));

let numArray = [];

let suma = 0;

for (let i = 0; i < tamañoArray; i++) {
    numArray.push(Math.floor(Math.random() * 10 + 1)); 
    suma += numArray[i];
}


document.write(numArray + '<br>');
document.write(suma);

