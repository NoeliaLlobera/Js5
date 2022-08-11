// Apartado 1
let pregunta = window.prompt("Introduce un número del 1-12");
pregunta = parseInt(pregunta);
let mes;
switch (pregunta) {
    case 1:
    mes = "enero";        
    break;
    case 2:
    mes = "febrero";   
    break;
    case 3:
    mes="marzo";
    break;
    case 4:
    mes = "abril";
    break;
    case 5:
    mes="mayo";        
    break;
    case 6:
    mes="junio"        
    break;
    case 7:
    mes="julio";       
    break;
    case 8:
    mes="agosto";       
    break;
    case 9:
    mes="septiembre";     
    break;
    case 10:
    mes="octubre";   
    break;
    case 11:
    mes="noviembre";  
    break;
    case 12:
    mes="diciembre";        
    break;
}
let alerta = alert(mes)

//apartado 2 incluido en el 1
