let x=0;//3
let y=7;//24
let z=4;//7

//NO EJECUTAR ESTE PROGRAMA. ES UN BUCLE INFINITO!!!

while( x != z ){

    if(y < 15 ){

        y = y + 4;

    }else{

        if( z < 0 ){

            z = z + 2;
        }else{

            z = z + 1;
            x = x + 1;
        }

        y = y + 3;

    }

}