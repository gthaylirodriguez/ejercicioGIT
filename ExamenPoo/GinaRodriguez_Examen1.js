/*Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta
que las horas ordinarias (40 primeras horas de trabajo) se pagan a 265.00 USD la hora. A
partir de la hora 41, se pagan a 350.00 USD la hora. Tomando en cuenta que un trabajador
acumulo en la semana, 53 horas, el programa debe mostrar el monto a pagar por las horas
ordinarias y el monto a pagar por las horas extra. Ejemplo:*/

let primerasHorasPrecio = 265;
let extraHorasValorPrecio = 350;

let horasTrabajadas = 60;
let primerasHoras = 40;

if (horasTrabajadas >40) {
    let horasExtra = horasTrabajadas-primerasHoras;
    let horasExtraPrecio = horasExtra * extraHorasValorPrecio;
    let horasNormalesPrecio = primerasHoras * primerasHorasPrecio;
    console.log("El total a pagar por horas laborales normal ("+ primerasHoras+") es de :" + horasNormalesPrecio);
    console.log("El total a pagar por horas extras ("+ horasExtra+") es de :" + horasExtraPrecio);
}else{
    let primerasHorasTotal = horasTrabajadas * primerasHorasPrecio;
    console.log("El total a pagar por horas laborales normal ("+ primerasHoras+") es de :" + primerasHorasTotal);   
}