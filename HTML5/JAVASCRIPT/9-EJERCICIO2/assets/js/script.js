let a = 60; // 70, 60 // 70, 60 // 70, 60
let b = 0; // 20 // 40 // 60 // se ejecuta 3 veces
let x = 100; // 200 // 300 // 400
let y = 100; //200 // 300 // 400
let z = 100; //

while( a != b ) {

    a = a + 10;

    while(x = y) {

        x = x + z;

    }

    b = b + 20;
    a = a - 10;
    y = x;
}

console.log(a)