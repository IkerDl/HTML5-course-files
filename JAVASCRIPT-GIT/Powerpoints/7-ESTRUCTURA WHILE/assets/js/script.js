//Un Orco va por le bosque y se encuentra con un manzano
//Si tiene hambre sube al manzano hasta comerse todas las 
//manzanas.
//Si no tiene hambre pasará de largo
//Al final del programa aparecerán en el documento tantas
//manzanas como haya comido


let manzano = {

    nManzanas:120,
    altura: 5
}


let orco = {

    hambre: false,
    nombre: "Urk"
}


console.log("Empieza el programa");

/* console.log(orco.nombre + " va por el bosque y se encuentra un manzano..."); */
console.log(`${orco.nombre} va por el bosque y se encuentra un manzano...`);

if(orco.hambre == true){

    console.log("Se sube al manzano y empieza a comer manzanas");

    while(manzano.nManzanas > 0){

           console.log(`${orco.nombre} se come una manzana`);
           document.write(`<img src="./assets/img/manzana.png">`)
           manzano.nManzanas = manzano.nManzanas - 1;
    }



}else{

    console.log(`${orco.nombre} pasa de largo...`);
}

if(manzano.nManzanas == 0){
    console.log("No quedan manzanas en el manzano");
}else{
    console.log("En el manzano quedan: " + manzano.nManzanas + " manzanas");
}

console.log("Termina el programa");