// 1. A partir de la pizza sustituΓ­as todos los elemento del array por cervezas:
let arr1 = ["π","π―","π£","π","π","π±","π","π","π₯©"];
for(let i=0; i<arr1.length; i++){
    arr1[i] = "πΊ";
}
console.log(arr1)


// 2. Encontrar si existe un elemento en el array que sea una piΓ±a.
let arr2 = ["π","π","π","π","π"];

let hay = false;
let i = 0;


while(hay==false || i<arr2.length){
    if(arr2[i] == "π"){
        hay = true;
    }
    i++;
}

if(hay == true){
    console.log("Hay piΓ±a")
} else{
    console.log("No hay piΓ±a")
}


// 3. Quita la piΓ±a del siguiente array.
let arr3 = ["π","π","π","π","π"];

arr3.splice(2,1);
console.log(arr3);


// 4. A partir del siguiente array convierte todas las fresas en π
let arr4 = ["π","π","π","π","π"];

for(let i=0; i<3; i++){
    let index = arr4.findIndex(item => item =="π");
    arr4[index] = "π"; 
}
console.log(arr4);

// 5. AΓ±ade el siguiente icono π₯΅ inmediatamente despuΓ©s del cada πΆοΈ en el siguiente array:
let arr5 = ["πΆοΈ","π₯","πΆοΈ","π₯","πΆοΈ","π₯"];

let arr51 = arr5.slice([0],[2]);
arr51.push("π₯΅");

let arr = [];

for(let i=0; i<9; i=i+3){
    arr[i] = arr51[0];
    arr[i+1] = arr51[1];
    arr[i+2] = arr51[2];
}
console.log(arr);

// 6. AΓ±ade una π cartas comodΓ­n entre medio de dos cartas . Por ejemplo:π΄ππ΄ En el siguiente array:
let arr6 = ["π΄","π΄","π΄","π","π΄","π΄","π΄"];
let arr6i = [];
let val = "π΄";
let j = 0;
for(let i=0; i<arr6.length; i++){
    if(arr6[i]==val){
        arr6i.push(i+(1+j));
        j++
    }
}
for(let i=0; i<arr6i.length; i++){
    arr6.splice(arr6i[i],0,"π");
}
console.log(arr6)