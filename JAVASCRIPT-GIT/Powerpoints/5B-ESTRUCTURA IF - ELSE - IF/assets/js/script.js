//Vamos a crear 3 objetos que representen 3 equipos de fútbol
//El nombre del objeto va a ser el nombre del equipo
//Cada objeto va a tener 3 atributos: colorCamiseta y colorPantalon
//que van a ser de tipo String y un atributo numérico que va a ser
//el año de fundación

//El programa nos va a hacer dos preguntas:
//1) el nombre del equipo
//2) y sobre que tema queremos información

let liverpool = {

    colorCamiseta:"Rojo",
    colorPantalon:"Rojo",
    anhoFundacion: 1892
}

let everton = {

    colorCamiseta:"Azul oscuro",
    colorPantalon:"Blanco",
    anhoFundacion: 1878
}

let athletic = {

    colorCamiseta:"Rojiblanca",
    colorPantalon:"Negro",
    anhoFundacion: 1898
}


//El programa nos pregunta 

let equipoElegido = window.prompt("Elige un equipo: liverpool, everton, athletic");
let temaElegido = window.prompt("¿Sobre qué tema quieres info?: camiseta, pantalon, año");


//document.write("<h1 class='" + equipoElegido + "'>" + equipoElegido + "</h1>");
document.write(`<h1 class="${equipoElegido}">${equipoElegido}</h1>`);

//document.write("<img style='width:200px' src='./assets/img/" + equipoElegido + ".jpg'>");
document.write(`<img style='width:200px' src='./assets/img/${equipoElegido}.jpg'>`);



if(temaElegido == "camiseta"){


    if(equipoElegido == "liverpool"){
        document.write(liverpool.colorCamiseta);
    }else if(equipoElegido == "everton"){
        document.write(everton.colorCamiseta);
    }else if(equipoElegido == "athletic"){
        document.write(athletic.colorCamiseta);
    }

   

}else if(temaElegido == "pantalon"){


    if(equipoElegido == "liverpool"){
        document.write(liverpool["colorPantalon"]);
    }else if(equipoElegido == "everton"){
        document.write(everton["colorPantalon"]);
    }else if(equipoElegido == "athletic"){
        document.write(athletic["colorPantalon"]);
    }

}else if(temaElegido == "año"){

    
    if(equipoElegido == "liverpool"){
        document.write(liverpool.anhoFundacion);
    }else if(equipoElegido == "everton"){
        document.write(everton.anhoFundacion);
    }else if(equipoElegido == "athletic"){
        document.write(athletic.anhoFundacion);
    }

}else{

    document.write("El usuario ha metido mal el dato");

}



 

