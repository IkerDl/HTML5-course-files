let miNumero = 34.78;
//let miEdad2 = "45";
let miEdad = 45;
let miTexto = "tengo";
let miTexto2 = "años";

let miNumero2 = 2;
let resultadoSuma;
let resultadoResta;
let resultadoProducto;
let resultadoDivision;

let mensaje = "Los Hobbits";
let mensaje2 = "desayunan dos veces";
let espacio = " ";

//Concatenación de Strings
//Manera tradicional
let mensajeFinal = mensaje + espacio + mensaje2;
console.log(mensajeFinal);
//Template strings
let mensajeFinal2 = `${mensaje} ${mensaje2}`;
console.log(mensajeFinal2);

let mensajeSobreMiEdad = miTexto + espacio + miEdad + espacio + miTexto2;
console.log(mensajeSobreMiEdad);

let mensajeSobreMiEdad2 = `${miTexto} ${miEdad} ${miTexto2}.`;
console.log(mensajeSobreMiEdad2);

document.write(mensajeSobreMiEdad2);


let elfo = {

   nombre:"Irwee",
   nivelMagia:8,
   vida:10,

}

let gato = {

    nombre:"Mizifuz",
    colorPelo:"negro",

}

//notación del punto
console.log(gato.nombre);
console.log(elfo.nivelMagia);
//notación del corchete
console.log(gato["nombre"]);
console.log(elfo["nivelMagia"]);

console.log(gato);

//Operación Suma
resultadoSuma = miNumero + miEdad;
console.log(resultadoSuma);
resultadoSuma = miNumero + miNumero2;
console.log(resultadoSuma);

//Operación Resta
resultadoResta = miNumero - miEdad;

//Operación Producto
resultadoProducto = miNumero * miEdad;

//Operación División
resultadoDivision = miNumero / miEdad;

//Operación Módulo o resto
let resultadoModulo = miNumero % miEdad;



