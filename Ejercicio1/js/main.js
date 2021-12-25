const pi = 3.14;

let radio = 0;

let base = 0;
let altura = 0;

let lado =0;

let forma = prompt('De que forma quieres calcular el área? (Circulo, Cuadrado o Triangulo)')

switch (forma) {
    case 'Circulo':
        radio = parseFloat(prompt('De cuanto será el radio del círculo?'));
        resultado = (radio**2) * pi;
        alert(`El área del circulo es de ${resultado}`);

        break;

    case 'Triangulo':
        base = parseFloat(prompt('Cual será la base del triángulo?'));
        altura = parseFloat(prompt('Cual será la altura del triángulo?'));
        resultado = (base * altura) / 2;
        alert(`El área del triangulo es de ${resultado}`);

        break;

    case 'Cuadrado':
        lado = parseFloat(prompt('Cual será el lado del cuadrado?'));
        resultado = lado * lado;
        alert(`El área del cuadrado es de ${resultado}`);

        break;

    default:
        alert('asegurate de escribir bien el nombre de la figura')
        break;
}