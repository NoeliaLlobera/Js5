// 1. A partir de la pizza sustituías todos los elemento del array por cervezas:
let arr1 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
for(let i=0; i<arr1.length; i++){
    arr1[i] = "🍺";
}
console.log(arr1)


// 2. Encontrar si existe un elemento en el array que sea una piña.
let arr2 = ["🍕","🍕","🍍","🍕","🍕"];

let hay = false;
let i = 0;


while(hay==false || i<arr2.length){
    if(arr2[i] == "🍍"){
        hay = true;
    }
    i++;
}

if(hay == true){
    console.log("Hay piña")
} else{
    console.log("No hay piña")
}


// 3. Quita la piña del siguiente array.
let arr3 = ["🍕","🍕","🍍","🍕","🍕"];

arr3.splice(2,1);
console.log(arr3);


// 4. A partir del siguiente array convierte todas las fresas en 🍄
let arr4 = ["🍓","🍋","🍓","🍋","🍓"];

for(let i=0; i<3; i++){
    let index = arr4.findIndex(item => item =="🍓");
    arr4[index] = "🍄"; 
}
console.log(arr4);

// 5. Añade el siguiente icono 🥵 inmediatamente después del cada 🌶️ en el siguiente array:
let arr5 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];

let arr51 = arr5.slice([0],[2]);
arr51.push("🥵");

let arr = [];

for(let i=0; i<9; i=i+3){
    arr[i] = arr51[0];
    arr[i+1] = arr51[1];
    arr[i+2] = arr51[2];
}
console.log(arr);

// 6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por ejemplo:🎴🃏🎴 En el siguiente array:
let arr6 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let arr6i = [];
let val = "🎴";
let j = 0;
for(let i=0; i<arr6.length; i++){
    if(arr6[i]==val){
        arr6i.push(i+(1+j));
        j++
    }
}
for(let i=0; i<arr6i.length; i++){
    arr6.splice(arr6i[i],0,"🃏");
}
console.log(arr6)