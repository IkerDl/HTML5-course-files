let x = 0;//3,6,-6
let y = 7;//11,15
let z = 4;//5,6,7,9,-6



while( x != z){

    if( y < 15){
        y = y + 4;
    }else{

        if( z < 0){
            z = z + 2;
        }else{
            z = z + 1;
            x = x + 3;
        }

        z = x + 3;

        if( z >= 9){
            z = z - y;
            x = x * -1;
        }

    }

}


