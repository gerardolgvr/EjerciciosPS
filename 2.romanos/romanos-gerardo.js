/*
Vázquez Ramírez Luis Gerardo
===============================
==      Ejercicio # 2        ==
===============================
- Elaborar un programa en consola que convierta un numero entero en un rango de 1 a 1000
  introducido por el usuario a su representacion en numeracion romana, tomando en cuenta
  las consideraciones del documento proporcionado
*/
const rl = require('readline-sync');
const NUMERACION = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const VALORES = [1, 5, 10, 50, 100, 500, 1000];

function procesar(numero){
    let cadena = '';
    let lista = [0, 0, 0, 0, 0, 0, 0];
    for(let i = NUMERACION.length; i > -1; i--){
        cant = parseInt(numero / VALORES[i]);
        if(cant > 0){
            lista[i] = cant;
            numero -= cant * VALORES[i];
        }
    }

    //imprimir resultados
    for(let i = NUMERACION.length; i > -1; i--){
        if(lista[i] > 0 && lista[i] < 4 && (NUMERACION[i] == "I" || NUMERACION[i] == "X" || NUMERACION[i] == "C" || NUMERACION[i] == "M")){
            for(let j = 0; j < lista[i]; j ++){
                cadena += NUMERACION[i];                
            }            
        } 
        
        if(lista[i] == 1 && (NUMERACION[i] == "V" || NUMERACION[i] == "L" || NUMERACION[i] == "D")){            
            if(lista[i-1] == 4 && (NUMERACION[i-1] == "I" || NUMERACION[i-1] == "X" || NUMERACION[i-1] == "C" || NUMERACION[i-1] == "M")){
                lista[i-1] = 1;
                lista[i] = 0;
                lista[i+1] = 1;
                cadena +=  NUMERACION[i-1] + NUMERACION[i+1];
            } else {
                cadena += NUMERACION[i];
            }
        }
    }

    return cadena;
}

function imprimirResultados(numero, resultado){
    //mostrando resultados
    console.log("\nResultados \n\nEl numero "+numero+" convertido a romano es: "+resultado);
    rl.question("\nPresione enter para continuar... ");
}

function convertir(){
    //recolectando el numero
    numero = parseInt(rl.question("Escriba el numero a convertir: "));
    if( numero > 0 && numero < 1001 ) {
        //procesamos el numero
        resultado = procesar(numero);
        //imprimimos resultados
        imprimirResultados(numero, resultado);
    } else {
        console.log("\nError! Rango permitido 1-100");
    }        
}

function main() {
    let opcion = -1;
    do {
        //limpieza de pantalla e impresion de menu
        console.clear();
        console.log("=======================================\n==  Conversion a numeracion romana  ==\n=======================================\n\nMenu\n1) Convertir\n2) Salir\n");
        //recoleccion de datos
        opcion = parseInt(rl.question("Seleccione una opcion: "));

        //switch para realizar la operacion adecuada    
        switch (opcion) {
            case 1:
                convertir();
                break;
            case 2:
                break;
            default:
                console.log("Lo sentimos opcion no disponible");
        }
        //mensaje de despedida
        console.log('Nos vemos pronto :)');
    } while (opcion !== 2);
}

//corremos nuestro programa
main();