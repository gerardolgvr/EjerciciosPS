/*
Vázquez Ramírez Luis Gerardo
===============================
==      Ejercicio # 1        ==
===============================
- Elaborar un programa, que traduzca texto a codigo morse y viceversa, 
  en base a las consideraciones del documento proporcionado
*/
const rl = require('readline-sync');
const TRADUCTOR = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----' };

//funcion que traduce una cadena a morse
function traducirAMorse(cadena) {
    let traducida = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) != " ") {
            traducida += TRADUCTOR[cadena.charAt(i)] + " ";
        } else {
            traducida += "   ";
        }
    }
    return traducida;
}

//funcion que traduce morse a texto
function traducirATexto(cadena) {
    let traducida = '';
    let frases = cadena.split("   "); //cortamos para obtener las frases que contiene 

    //recorremos de acuerdo a la cantidad de frases encontradas
    for (let cont = 0; cont < frases.length; cont++) {
        //recorremos cada palabra obtenida para posteriormente traducirla
        cadena = frases[cont].split(" ");
        for (let i = 0; i < cadena.length; i++) {
            for (let j = 0; j < Object.values(TRADUCTOR).length; j++) {
                if (cadena[i] == Object.values(TRADUCTOR)[j]) {
                    traducida += Object.keys(TRADUCTOR)[j];
                }
            }
        }
        traducida += " "; //agregamos el espacio si es que hay mas de una palabra
    }
    return traducida;
}

function imprimirResultados(cadena, traducida, modo) {
    //mostrando resultados
    console.log("\nResultados Modo " + modo + ": \n\nLa frase original: " + cadena + "\nLa frase traducida: " + traducida);
    rl.question("\nPresione enter para continuar... ");
}

function traducir(modo) {
    //recolectando la cadena a traducir
    cadena = rl.question("Escriba la frase a convertir (Modo " + modo + "): ");
    //traducimos la frase de acuerdo al modo
    traducida = (modo === "texto-morse") ? traducirAMorse(cadena) : traducirATexto(cadena);
    //impresion de resultados
    imprimirResultados(cadena, traducida, modo);
}

function main() {
    let opcion = -1;
    do {
        //limpieza de pantalla e impresion de menu
        console.clear();
        console.log("========================\n==  Traductor Morse  ==\n========================\n\nMenu\n1) Traducir texto-morse\n2) Traducir morse-texto\n3) Salir\n");
        //recoleccion de datos
        opcion = parseInt(rl.question("Seleccione una opcion: "));

        //switch para realizar la operacion adecuada    
        switch (opcion) {
            case 1:
                traducir('texto-morse');
                break;
            case 2:
                traducir('morse-texto');
                break;
            case 3:
                break;
            default:
                console.log("Lo sentimos opcion no disponible");
        }
        //mensaje de despedida
        console.log('Nos vemos pronto :)');
    } while (opcion !== 3);
}

//corremos nuestro programa
main();