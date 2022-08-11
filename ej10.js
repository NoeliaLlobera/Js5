// Apartado 1
let sustitucion = (string) => {
    let cadena = [];
    for(let i=0; i<string.length; i++){
        cadena[i] = string[i]
    };    

    for (let i=0; i<cadena.length; i++){
        if(cadena[i] == "A"){
            cadena[i] = "O";
        } else if (cadena[i] == "a"){
            cadena[i] = "o";
        }
    }
    cadena = cadena.join("");
    console.log(cadena);
}
sustitucion("Anagrama");

// Apartado 2
let comienzo = (string) => {
    let inicio = string.slice(0,3);
    if(inicio != "aca"){
        console.log(`No empieza por "aca"`);
    } else {
        console.log(`Empieza por "aca"`)
    }
}

// Apartado 3
let saludo = (string) => {
    if(string == "Hola"){
        string = `${string} `
        console.log(string.repeat(3));
    } 
}
saludo("Hola")
