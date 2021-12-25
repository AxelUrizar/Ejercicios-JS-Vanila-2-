let tamañoArray = parseInt(prompt('De cuantos numeros será la array?'));

let numArray = [];

let numMayor = 0;

for (let i = 0; i < tamañoArray; i++) {
    numArray.push(Math.floor(Math.random() * 10 + 1));
    if (numMayor < numArray[i]) {
        numMayor = numArray[i];
    }
} 

document.write(numArray + '<br>');
document.write(numMayor);