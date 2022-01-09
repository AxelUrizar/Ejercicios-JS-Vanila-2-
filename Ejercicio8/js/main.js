let numArray = [];

let num = 0;

for (let i = 1; i <= 10; i++) {
    num = parseInt(prompt(`Di el número que irá en la posición n${i}`));
    numArray.push(num);
    document.write((`${i}: ${num} <br>`));    
}

