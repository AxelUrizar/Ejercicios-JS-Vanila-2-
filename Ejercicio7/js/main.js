const libra = 0.86;
const dolar = 1.29;
const yen = 129.85;

let moneda = prompt('A que moneda quieres cambiar? (Libra, Dolar o Yen)');

let dinero = parseInt(prompt(`Cuanto dinero quieres cambiar a ${moneda}?`));

let cambio = 0;

switch (moneda) {
    case 'Libra':
        cambio = dinero * libra;
        document.write(`Tus ${dinero}€ pasarán a ser: ${libra}l`)
        break;

    case 'Dolar':
        cambio = dinero * dolar;
        document.write(`Tus ${dinero}€ pasarán a ser: ${dolar}$`)
 
        break;

    case 'Yen':
        cambio = dinero * yen;
        document.write(`Tus ${dinero}€ pasarán a ser: ${yen}y`)
  
        break;

    default:
        document.write('Asegurate de escribir bien la moneda a la que quieres cambiar.')
        break;
}