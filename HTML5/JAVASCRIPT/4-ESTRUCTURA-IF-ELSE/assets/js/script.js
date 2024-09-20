// Urk es un orco. Tiene una fuerza 10 y no posee la llave de un castillo
// a la que quiere acceder.
// Representar en un objeto a Urk. Va a tener 3 datos:
// 1) Un string con el nombre
// 2) Un number con la fuerza
// 3) Boolean que se llamará tieneLaLlave con la posición de la llave en falso

let orco = {
    nombre: "Urk",
    fuerza: 10,
    tieneLaLlave: false
}

const mostrarPesonaje = (obj) => {
    alert(`El nombre es ${obj.nombre} y tiene una fuerza de ${obj.fuerza}`)
}

/* mostrarPesonaje(orco);*/

//Irwee es un elfo. Tiene una fuerza de 8 y posee la llave del castillo.
//Representar en un objeto a Irwee

let elfo = {
    nombre: "Irwee",
    fuerza: 8,
    tieneLaLlave: true
}
/* mostrarPesonaje(elfo) */

// Urk lucha con Irwee

var luchar = function(personaje1, personaje2) {

    opcion1 = document.getElementById(1);
    opcion2 = document.getElementById(2)

    let personaje1 = opcion1.value;
    let personaje2 = opcion2.value;

    console.log(opcion1.value)

    if(personaje1.fuerza > personaje2.fuerza) {
        personaje1.fuerza -= 1
        peresonaje2.fuerza -= 1
        console.log(`${personaje1.nombre} gana la llave, y ${personaje2.nombre} la ha perdido`)
    } else {
        console.log(`${personaje2.nombre} gana la llave, y ${personaje1.nombre} la ha perdido`)

    }
}

