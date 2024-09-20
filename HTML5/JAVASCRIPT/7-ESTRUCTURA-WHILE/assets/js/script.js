// Un Orco va por el bosque y se encuentra con un manzano
// Si tiene hambre 
// Se va a subir al manzano hasta comerse todas las manzanas hasta que su hambre desaparezca
// Si no tiene hambre pasará de largo

function ejecutar() {
    let selectorHambre = document.getElementById("select").value;
    let orco = {
        nombre: "Urk",
        hambre: selectorHambre,
    }

    let manzano = {
        nManzanas: 5
    }


    if(orco.hambre == "true"){
        console.log(`${orco.nombre} se sube al manzano`)

        while(manzano.nManzanas > 0) {
            manzano.nManzanas -= 1
            document.write(`<img src="./assets/img/manzana.png">`)
        }


    } else {
        console.log(`${orco.nombre} como no tiene hambre, pasa de largo y se va a su casa`)
    }
}



let manzano = {
    nManzanas: 5
}

let orco = {
    nombre: "Urk",
    hambre: true,
}




console.log(`${orco.nombre} va por el bosque y se encuetra un manzano...`)

if(orco.hambre == true){
    console.log(`${orco.nombre} se sube al manzano`)

    while(manzano.nManzanas > 0) {
        manzano.nManzanas -= 1
        document.write(`<img src="./assets/img/manzana.png">`)
    }

} else {
    console.log(`${orco.nombre} como no tiene hambre, pasa de largo y se va a su casa`)

}



