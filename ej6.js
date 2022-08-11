// Apartado 1
let suma = (a,b,c) => {
    let x = a+b+c;
    return x
}

console.log(suma(2,3,5))

// Apartado 2
let nombre = (nombre, apellido1, apellido2) => {
    let nombre_completo = nombre+" "+apellido1+" "+apellido2;
    return nombre_completo;
}

console.log(nombre("Noèlia","Llobera","Sànchez"));

// Apartado 3
let num_mayor = (x,y) => {
    if (x>y){
        console.log(`El numero mayor es: ${x}`);
    } else{
        console.log(`El numero mayor es: ${y}`);
    }
}
num_mayor(4,2);