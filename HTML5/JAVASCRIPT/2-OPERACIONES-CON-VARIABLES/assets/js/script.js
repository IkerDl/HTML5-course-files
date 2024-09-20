let miNumero = 34.78;
let miNumero2 = 2;
let resultadoSuma;
let resultadoResta;
let resultadoProducto;
let resutladoDivision;
let edad = 27;
let texto1 = "Mi edad";
let texto2 = "es";

let mensaje = "Los hobbits";
let mensaje2 = "desayunan dos veces";

// Concatenación de Strings
let mensajeFinal = mensaje + " "+ mensaje2;
console.log(mensajeFinal)
//Template strings
let mensajeFinal2 = `${mensaje} ${mensaje2}`;
console.log("El otro mensaje:", mensajeFinal2)

let mensajeSobreMiEdad = `${texto1} ${texto2} ${edad}`
console.log(mensajeSobreMiEdad)

/* document.write("<h1>Hola</h1>", "<p>lorem2sjfnsfjnsdsndskdsks</p>"); */

let elfo = {
    nombre : "Erk",
    edad : 23,
    vida: 10,
    hablar : function(text) {
        console.log("Elfo dice:",text)
    }
}

elfo.hablar("Hola que tal?");

const colores = ["Negro", "Blanco", "Amarillo"];

let gato = {
    nombre: "Mizifuz",
    colorPelo : colores[0],

}

//Notación del punto

console.log(gato.colorPelo)

//Notación del corchete
console.log(gato["colorPelo"])

//Operación suma
resultadoSuma = 53 + 35;
alert(resultadoSuma)

numeros = [0,1,2,3,4,5,6,7,8,9];

const sumar = (numeros) => {
    for(i in numeros) {
        if (i<=100) {
            console.log(i)
            i++;
        }
    }
}

sumar(numeros);

//Suma random

const sumaRandom = Math.random(100)
console.log(sumaRandom)
