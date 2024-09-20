let x = 0; // 0 //
let y = 7; // 11 // 15
let z = 4; // 6, 9, 2// 4, 7



while (x != z){

    if(y < 15){
        y += 4;
    } else {
        if(z < 0){
            z += 2;
        } else{
            z += 1;
            x += 3;
        }

        z = x + 3;

        if(z >= 9){
            z = z - y;
            x = x * -1;
        }
    }

}