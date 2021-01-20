"use strict";

//NIVELL1
//Exercici 1: Converteix a funcions fletxa

/*Funció 1*/
const multiply = (num1, num2) => num1 * num2;
//Compruebo que funciona
console.log(multiply(2,3));

/*Funció 2*/
const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);
//Compruebo que funciona
console.log(toCelsius(66));

/*Funció 3*/
const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
    } 
    return numStr;
}
//Compruebo que funciona
console.log(padZeros(12,10));

/*Funció 4*/
const power = (base, exponent) => {
    let result=1; 
    for (var i=0; i < exponent; i++) { 
        result *=base; 
    } 
    return result;
}
//Compruebo que funciona
console.log(power(5,2));

/*Funció 5*/
const greet = who => {
    console.log("Hello " + who);
}
//Compruebo que funciona
greet("Marc");

//Exercici 2: Arregla l'error
var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

users.map(function (user) {
    //Incorporo el console log para ver que funciona
    console.log(user.firstName);
});

/*Exercici 3: Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
Resultat per consola: 'a long time ago in a galaxy far far away'
Nota: no fa falta fer un "join".*/

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let answer= epic.reduce((prev, curr) => `${prev} ${curr}`);
console.log(answer);


//Exercici 4: Crear una funció que accepti un string i retornada aquest string revertit. Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
 
const getReverse = myString =>  {
    console.log([...myString].reverse());
}

getReverse("Hello everybody");


//Exercici 5: Reemplaça bloc de codi la promesa per async/await

//Función b() en formato flecha con código para testear que funciona
const b = () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("¡Hecho!"), 1000)
    });
    return promise;
}
//Función async a() en formato flecha en la que incorporo el await en la función b()
const a = async () => {
    let c = await b();
    //para testear que doMoreWork espera la ejecución de b()
    console.log(c);
    doMoreWork();
}
//Llamo a la función a()
a();
//Declaro la función doMoreWork con código propio para poder testear
const doMoreWork = () => {
    console.log(5);
}

//Exercici 6: Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
let tasks = [
{
    'name' : 'Start React web',
    'duration' : 120
},
{
    'name' : 'Work out',
    'duration' : 60
},
{
    'name' : 'Procrastinate on facebook',
    'duration' : 240
}
];    
    
//- Usar .forEach() per obtenir aquest array.
let arr = [];
tasks.forEach((item) => {    
    arr.push(item.name);
});
console.log(arr);
    
//- Usar .map() per obtenir aquest array.
let result = tasks.map((task) => task.name);
console.log(result);
    
//NIVELL2
/*Exercici 7: Comento el ejercicio 7 para poder hacer el 8 sin que salten prompts al ejecutarlo

/*Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.*/

/*Pido los números al usuario mediante dos prompts*/
let number1 = prompt("Escriu un número",1);
let number2 = prompt("Escriu un número",2);

let numAux=1;
//Función que hace la operación y la muestra por pantalla usando la recursividad
const tabla = (numAux) => {//Default param para inicializar numAux a 1
    //indico que sólo entre en la condición si el multiplicador actual (numAux) es más pequeño o igual al máx multiplicador indicado por el usuario en el prompt
    if(numAux<=number2){
        //Imprimo por consola el multiplicando por el multiplicador actual igual al producto
        if((number1 != "" && number1 <= 10  && number1 >= 1) && (number2 != "" && number2 <= 10 && number2 >= 1)){ //Si ambos inputs tienen valores y el número es igual o menor a 10
            console.log(`${number1}x${numAux}=${number1*numAux}`);
            //la función tabla se llama a si misma incrementando 1 el valor del numAux
            tabla(numAux+1);
        } else {
            alert("Escribe números del 1 al 10");
        } 
    }
} 
tabla(numAux);
