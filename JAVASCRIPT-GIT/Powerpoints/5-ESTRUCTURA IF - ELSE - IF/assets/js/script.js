//Urk es un orco. Tiene una fuerza de 10 y no posee la llave de un castillo
//a la que quiere acceder.
//Representar en un objeto a Urk. Este objeto va a tener 3 datos:
//1) String con el nombre
//2) Number con la fuerza
//3) Boolean con la posesión de la llave en false

/* if(){
}else if(){
}else if(){
}else if(){
}else{} */

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
    fuerza: 10,
    poseeLlave: true,

}

/* irwee.fuerza
irwee["fuerza"]
urk.fuerza
urk["fuerza"] */



//Urk lucha Irwee. Gana el que tiene más fuerza
//y es el que se queda con la llave
//A lo largo de la lucha el ganador pierde 2 puntos de fuerza
//el perdedor pierde 4


/* if(urk tiene mas fueza que irwee){

     urk gana la llave y irwee la pierde
} */
console.log("Empieza la aventura");

console.log("Urk e Irwee empiezan a pegarse");

/* El operador mayor que es > */
if(urk.fuerza > irwee.fuerza){

    console.log("Urk ha vencido a Irwee");//Esta linea de código solo se ejecuta si se cumple la condición
    //Urk le quita la llave a Irwee
    urk.poseeLlave = true;
    irwee.poseeLlave = false;
    //Urk pierde 2 puntos de fuerza porque ha vencido. Irwee pierde 4
    urk.fuerza = urk.fuerza  - 2;
    irwee.fuerza = irwee.fuerza - 4;


}else if(urk.fuerza < irwee.fuerza){

    console.log("Irwee ha vencido a Urk");
    //Irwee pierde 2 puntos de fuerza porque ha vencido.Urk pierde 4
    urk.fuerza = urk.fuerza  - 4;
    irwee.fuerza = irwee.fuerza - 2;


}else{

    console.log("Irwee y Urk han empatado");
    //Irwee y Urk pierden 4 puntos de fuerza
    urk.fuerza = urk.fuerza  - 4;
    irwee.fuerza = irwee.fuerza - 4;


}

console.log("Irwee tiene ahora una fuerza de: " + irwee.fuerza);
console.log("Urk tiene ahora una fuerza de: " + urk.fuerza);


//Urk llega al castillo

/* if(tiene la llave){

    urk esta dentro del castillo
} */
/* El operador de comparación es == */
if(urk.poseeLlave == true){

    console.log("Urk ha entrado en el castillo");
    console.log("Urk encuentra un manzano y se come una manzana");
    //Una manzana aporta 1 punto de fuerza
    urk.fuerza = urk.fuerza + 1;


}else{
    console.log("Urk lo ha intentado pero no ha podido entrar en el castillo")
}


console.log("Irwee tiene ahora una fuerza de: " + irwee.fuerza);
console.log("Urk tiene ahora una fuerza de: " + urk.fuerza);

console.log("Acaba la aventura");

