//FUNCIONES DE ORDEN SUPERIOR

function  mayorQue(n){
    return m => m > n; 
} 

let mayorQueCinco = mayorQue(5); //m => m > n
console.log(mayorQueCinco(7));