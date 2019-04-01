/*
Vázquez Ramírez Luis Gerardo
===============================
==      Ejercicio # 3        ==
===============================
- Usando POO crear una clase llamada Cuadrado la cual tendra las siguientes habilidades:
  - Calcular area
  - calcular perimetro

  Crear..... (documento)
*/
const rl = require('readline-sync');

class Cuadrado {

    constructor(lado){
        this.lado = lado;
    }

    calcularPerimetro(){
        return this.lado * 4;
    }

    calcularArea(){
        return this.lado * this.lado;
    }
}

class Cubo extends Cuadrado {

    constructor(lado){
        super(lado);
    }

    calcularPerimetro(){
        return this.lado * 12;
    }

    calcularVolumen(){
        return this.lado * this.lado * this.lado;
    }

}

function operar(figura, calculo, lado){
    if(figura == "cuadrado"){
        const c = new Cuadrado(lado);
        if(calculo == "area"){
            console.log("El resultado del calculo "+calculo+" de la figura "+figura+" con lado "+lado+" es "+c.calcularArea());
        } else if(calculo == "perimetro"){
            console.log("El resultado del calculo "+calculo+" de la figura "+figura+" con lado "+lado+" es "+c.calcularPerimetro());
        }
    } else if(figura == "cubo"){
        const c = new Cubo(lado);
        if(calculo == "volumen"){
            console.log("El resultado del calculo "+calculo+" de la figura "+figura+" con lado "+lado+" es "+c.calcularVolumen());
        } else if(calculo == "perimetro"){
            console.log("El resultado del calculo "+calculo+" de la figura "+figura+" con lado "+lado+" es "+c.calcularPerimetro());
        }
    }
    rl.question("\nPresione enter para continuar... ");
}

function calcular(){
    //recolectando el numero
    let numero = parseFloat(rl.question("Escriba la medida de el lado: "));
    let opcion = -1;
    do {
        //impresion de menu
        console.clear();
        console.log("=======================================\n==  Menu de calculos  ==\n=======================================\n\nLado: "+numero+"\n\nMenu principal\n1) Cuadrado: Calculo Area \n2) Cuadrado: Calculo de Perimetro\n3) Cubo: Calcular Volumen\n4) Cubo:Calcular Perimetro\n5) Regresar");
        //recoleccion de datos
        opcion = parseInt(rl.question("\nSeleccione una opcion: "));
        //switch para realizar la operacion adecuada    
        switch (opcion) {
            case 1:
                operar('cuadrado', 'area', numero);
                break;
            case 2:
                operar('cuadrado', 'perimetro', numero);
                break;
            case 3:
                operar('cubo', 'volumen', numero);
                break;
            case 4:
                operar('cubo', 'perimetro', numero);
                break;
            case 5:
                break;
            default:
                console.log("Lo sentimos opcion no disponible");
        }
    } while(opcion !== 5);
}

//funcion principal
function main() {
    let opcion = -1;
    do {
        //limpieza de pantalla e impresion de menu
        console.clear();
        console.log("=======================================\n==  Calculos de figuras  ==\n=======================================\n\nMenu principal\n1) Calcular\n2) Salir\n");
        //recoleccion de datos
        opcion = parseInt(rl.question("Seleccione una opcion: "));

        //switch para realizar la operacion adecuada    
        switch (opcion) {
            case 1:
                calcular();
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