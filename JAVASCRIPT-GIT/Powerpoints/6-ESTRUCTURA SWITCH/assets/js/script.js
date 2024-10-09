//DEPENDIENDO DE LA FRUTA ELEGIDA SE NOS MOSTRARÁ EN EL DOCUMENTO
//WEB UNA IMAGEN DE ESA FRUTA
console.log("empieza el programa");

let laFruta = window.prompt("Elige una fruta: fresa, manzana, platano, naranja o uva");

/* if (laFruta == "fresa"){

    document.write("Las fresas se comen con nata");
    document.write(`<img src="./assets/img/fresa.png">`);

}else if(laFruta == "manzana"){

    document.write("Manzanas asturianas");
    document.write(`<img src="./assets/img/manzana.png">`);

}else if(laFruta == "platano"){

    document.write("Platanos canarios");
    document.write(`<img src="./assets/img/platano.png">`);

}else if(laFruta == "naranja"){

    document.write("Naranjas de Valencia");
    document.write(`<img src="./assets/img/naranja.png">`);


}else if(laFruta == "uva"){

    document.write("Uvas para navidad");
    document.write(`<img src="./assets/img/uva.png">`);

} else{
    
    document.write("Has elegido mal...");
    
}*/


switch(laFruta){

    case "fresa":
        document.write("Las fresas se comen con nata");
        document.write(`<img src="./assets/img/fresa.png">`);
        break;
    case "platano":
        document.write("Platanos canarios");
        document.write(`<img src="./assets/img/platano.png">`);
        break;
    case "naranja":
        document.write("Naranjas de Valencia");
        document.write(`<img src="./assets/img/naranja.png">`);
        break;
    case "uva":
        document.write("Uvas para navidad");
        document.write(`<img src="./assets/img/uva.png">`);
        break;
    case "manzana":
        document.write("Manzanas asturianas");
        document.write(`<img src="./assets/img/manzana.png">`);
        break;
    default:
        document.write("Has elegido mal...");

}


console.log("termina el programa");
