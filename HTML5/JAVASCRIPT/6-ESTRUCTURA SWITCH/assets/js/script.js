// DEPENDIENDO DE LA FRUTA ELEGIDA SE NOS MOSTRARA 
// EN EL DOCUMENTO WEB UNA IMAGEN DE ESA FRUTA

let laFruta = window.prompt("Elige una fruta entre estas opciones: fresa, manzana, naranja, platano, uva");


/* if(laFruta == "fresa") {
    document.write(`<img style='width:200px' src=./assets/img/fresa.png>'`);
} */

/* Sin usar case, usando indexOf */

let listaDeFrutas = ["fresa", "manzana", "naranja", "platano", "uva"]

let indexFrutas = listaDeFrutas.indexOf(laFruta);
let fruta = listaDeFrutas[indexFrutas]


if(fruta){
    document.write(`<img style='width:200px' src=./assets/img/${fruta}.png>`);
} else {
    document.write("Introduce un valor valido")
}

/* Usando Switch */

switch (indexFrutas) {
    case "fresa":
        document.write(`<img style='width:200px' src=./assets/img/fresa.png>`);
        break;
    case "manzana":
        document.write(`<img style='width:200px' src=./assets/img/manzana.png>`);
        break;
    case "naranja":
        document.write(`<img style='width:200px' src=./assets/img/naranja.png>`);
        break;
    case "platano":
        document.write(`<img style='width:200px' src=./assets/img/platano.png>`);
        break;
    case "uva":
        document.write(`<img style='width:200px' src=./assets/img/uva.png>`);
        break;
    default:
        document.write("Introduce un valor valido")
    
} 

/* document.write(<h1>{laFruta}</h1>) */