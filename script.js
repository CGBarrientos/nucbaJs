/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, 
indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array 
multiplicado por el número pasado por parámetro.*/

function parImpar(numero) {
    if (numero / 2 == 0) {
    console.log(numero, ", es un número par")
    } else {
    console.log(numero, " es un número impar")
    }
}
console.log(parImpar(7));

//---------------------------------------------------

function mayorQue (x,y) {
    if (x < y) {
        console.log(x, "es mayor que " ,y);
    }else if (x>y) {
        console.log(y, "es mayor que " ,x)
    }else {
        console.log("Los números son iguales")
    }
}
mayorQue (7,9)

//---------------------------------------------------

function multiploDe5(numero) {
    if(numero % 5 == 0){
        console.log("El número es múltiplo de 5 ")
    }else {console.log("No es múltiplo de 5")}
}
multiploDe5(555);
multiploDe5(369);

//---------------------------------------------------

function printNum (number) {
    for(i=0; i<number; i++)
    console.log(i)
}
printNum (27);

//---------------------------------------------------

function frasesilla (frase,cantidad){
    for(i=0; i<=cantidad; i++)
    console.log(frase);
}
frasesilla ("vecinirijillo", 9)

//---------------------------------------------------

let listarda = ([]) => {
    console.log(listarda)
}
arrays(["tomate", "lechuga" ,"papa", "cebolla"]);

//---------------------------------------------------


