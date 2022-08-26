class Persona{
    nombre;
    apellido;
    edad;

    constructor(name, lastName, age){
        this.nombre = name;
        this.apellido = lastName;
        this.edad = age;
    }

    getDetalles(){
        console.log("Empleado: " + this.nombre + " " + this.apellido + " de " + this.edad  + " años");
    }
}

class Empleado extends Persona{
    tipoConfianza;
    constructor(name, lastName, age, employeeType){
        super(name, lastName, age);
        this.tipoConfianza = employeeType;
    }

    getDetalles(){
        super.getDetalles();
        let confianza = "- C Pertenece a Empleado de confianza"
       
        if (this.tipoConfianza=="S") {   
           confianza  = "- S Pertenece a Empleado de sindicato" 
        }
        console.log(confianza);
    }

}

class Nomina {
    arregloEmpleados;
    constructor(empleadoInfo){
        this.arregloEmpleados = empleadoInfo;
    }

    calcularPago(){
        console.log ("--------------------------------- ")
        console.log ("------- Detalle de Nomina ------- ")
        console.log ("--------------------------------- ")
        console.log (" ");
        for (let i = 0; i < this.arregloEmpleados.length; i++) {
            let tipoEmpleadoNew = this.arregloEmpleados[i][3] ;
            let empleadoNomina = new Empleado(this.arregloEmpleados[i][0],this.arregloEmpleados[i][1], this.arregloEmpleados[i][2], this.arregloEmpleados[i][3] );
            empleadoNomina.getDetalles();
            
            let diasTrabajados = this.generarDiasTrabajados(5,15);
            let subtotal = 0;
            let descuento = 0;
            let total = 0;
            let porcentajeDescuento = 0;
            let valor = 0

            if (tipoEmpleadoNew.toUpperCase() == "C") {
                valor = 500;
                porcentajeDescuento = 13;
            }
            else{
                valor = 250;
                porcentajeDescuento= 10;
            }
            
            subtotal = diasTrabajados * valor;
            descuento = (subtotal * porcentajeDescuento) / 100;
            total = subtotal - descuento;
            
            console.log("Su detalle es: ")
            console.log("Subtotal " + subtotal);
            console.log("Descuento " + porcentajeDescuento + " % = " + descuento  );
            console.log("Suelto  " + total + " por " + diasTrabajados + " trabajados ");
            console.log("Valor por Día " + valor);
            console.log(" ");
        }
    }

    generarDiasTrabajados(minNumber = 5, maxNumber = 15) {
        let numberResult = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        return numberResult
    }

}

let nomina1 = new Nomina([["Maria", "Carvajal", 33, "C"],["Juan", "Almeira", 23, "C"] , ["Dulce", "Salguero", 42, "S"]]);
nomina1.calcularPago();