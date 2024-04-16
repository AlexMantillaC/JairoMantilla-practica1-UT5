'use strict';
function Ejercicio1(cadena, booleano, arreglo, funcion)
{
    let continuar=true;
    let producto=1;
    if ( cadena===undefined || booleano===undefined || arreglo===undefined || funcion===undefined) {
        console.log("Error, parametro no esperado.");
    }else{
        arreglo.forEach(num => {
            if (!Number.isInteger(num)) {
                console.log("Se esperaban parametros numericos en el array. Imposible continuar.");
                continuar=false;
            }
        });
        if (continuar==true && booleano==true) {
            arreglo.forEach(numero => {
                console.log(numero)
                producto*=numero
            });
            if (producto>100) {
                alert(cadena.includes("a")?" la 'a' no esta permitida":"Muy bien no has usado la 'a'");
            }else{
                console.log("El resultado de tu array es insuficiente para comprobar la cadena");
            }
        }else{
            if (continuar==true && booleano==false) {
                funcion();
            }
        }
    }
}
console.log("Primera Llamada...");
Ejercicio1();
console.log("Segunda Llamada...");
Ejercicio1("Hola Mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")});
console.log("Tercer Llamada...");
Ejercicio1("Sí",true,[10,20,30,40],()=>{alert("Se acabó el juego")});
console.log("Cuarta Llamada...");
Ejercicio1("Sí",false,[10,20,30,40],()=>{alert("Se acabó el juego")});

console.log("Quinta Llamada (verifica que los elementos del array sean numeros)...");
Ejercicio1("Hola Mundo",true,[1,'s',3,4],()=>{alert("Se acabó el juego")});