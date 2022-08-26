/*Escribir un programa JavaScript orientado a objetos, llamado TuNombre_Examen3, que
realice las siguientes operaciones:
• Crear dos matrices de tamaño con los siguientes datos.
• Rellenar la primera con los datos: 3, 2, 1, 1, 2, 3, 2, 3, 1.
• Rellenar la segunda con los datos: 1, 1, 2, 2, 1, 1, 1, 2, 1.
_______________________________________________________________________________________________
_______________________________________________________________________________________________
• Mostrar el contenido de ambas matrices.
• Multiplicar la primera por la segunda y mostrar el resultado.
• Sumar la primera por la segunda y mostrar el resultado.*/

class OperacionesMatematicas {
    arregloNuevo1;
    arregloNuevo2;
    constructor(primerArreglo, segundoArreglo){
        this.arregloNuevo1 = primerArreglo;
        this.arregloNuevo2 = segundoArreglo;
    }

  mostrarContenidoMatrices() {
    console.log("Arreglo 1: ")
    console.log(this.arregloNuevo1);

    console.log("Arreglo 2: ")
    console.log(this.arregloNuevo2);
    console.log(" ");
  }

  mostrarOperaciones(){
    for (let i = 0; i < this.arregloNuevo1.length; i++) {
        for (let j = 0; j < this.arregloNuevo2.length; j++) {
            let valorArreglo1 = this.arregloNuevo1[i];
            let valorArreglo2 = this.arregloNuevo2[j];
            let resultadoSuma = valorArreglo1 + valorArreglo2;
            let resultadoMultiplicacion = valorArreglo1 * valorArreglo2;

            console.log(valorArreglo1 +" + " + valorArreglo2 + " = " + resultadoSuma);
            console.log(valorArreglo1 +" * " + valorArreglo2 + " = " + resultadoMultiplicacion);
            console.log("---------------------------------------------------");
            console.log(" ");
        }      
    }
  }
}


let arreglo1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let arreglo2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];

let arreglos = new OperacionesMatematicas(arreglo1, arreglo2);
arreglos.mostrarContenidoMatrices();
arreglos.mostrarOperaciones();

