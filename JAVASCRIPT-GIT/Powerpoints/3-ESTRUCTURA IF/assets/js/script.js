//Urk es un orco. Tiene una fuerza de 10 y no posee la llave de un castillo
//a la que quiere acceder.
//Representar en un objeto a Urk. Este objeto va a tener 3 datos:
//1) String con el nombre
//2) Number con la fuerza
//3) Boolean con la posesión de la llave en false

let urk = {

    nombre: "Urk",
    fuerza: 10,
    poseeLlave: false,

}



//Irwee es un elfo. Tiene una fueza de 8 y posee la llave del castillo
//Representar en un objeto a Irwee
//1) String con el nombre
//2) Number con la fuerza
//3) Boolean con la posesión de la llave en false

let irwee = {

    nombre: "Irwee",
    fuerza: 12,
    poseeLlave: true,

}

/* irwee.fuerza
irwee["fuerza"]
urk.fuerza
urk["fuerza"] */

//Urk lucha Irwee. Gana el que tiene más fuerza
//y es el que se queda con la llave


/* if(urk tiene mas fueza que irwee){

     urk gana la llave y irwee la pierde
} */
console.log("Empieza la aventura");

if(urk.fuerza > irwee.fuerza){

    console.log("Urk ha vencido a Irwee");//Esta linea de código solo se ejecuta si se cumple la condición
    //Urk le quita la llave a Irwee
    urk.poseeLlave = true;
    irwee.poseeLlave = false;
}


//Urk llega al castillo

/* if(tiene la llave){

    urk esta dentro del castillo
} */

if(urk.poseeLlave == true){

    console.log("Urk ha entrado en el castillo");
}

console.log("Acaba la aventura");

