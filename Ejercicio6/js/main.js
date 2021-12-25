let num = prompt('Dame un número');
let numSplit = num.split('');
let numArray = [];

for (let i = 0; i < numSplit.length; i++) {
    numArray.push(numSplit[i]);
    
}

document.write(numArray)

