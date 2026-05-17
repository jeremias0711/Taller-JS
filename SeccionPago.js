let nombreCompleto = ""; 
let edad = 0;
let tipoDocumento = "";
let numeroDocumento = "";
let salario = 0;
let comisiones = 0;
let totalHorasExtra = 0;
let calificacionNiveldeRiesgo = "";
let valorHorasExtra = 0;
let niveldeRiesgo = 0;

// Consntantes

const smmlv = 1750905;
const auxilioTransporte = 250000;
const porcentajeSalud = 0.04;
const porcentajePension = 0.04;  
const porcentajeFondoSol= 0.01;
const riesgo1 = 0.00522;
const riesgo2 = 0.01044;
const riesgo3 = 0.02436;
const riesgo4 = 0.04350;
const riesgo5 = 0.06960;
const riesgos = ["Riesgo 1", "Riesgo 2", "Riesgo 3", "Riesgo 4", "Riesgo 5"];
const formulario = document.getElementById("datosTrabajador");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    nombreCompleto = document.getElementById("nombreCompleto").value.trim();
    edad = Number(document.getElementById("edad").value);
    tipoDocumento = document.getElementById("tipoDocumento").value;
    numeroDocumento = document.getElementById("numeroDocumento").value.trim();

    salario = Number(document.getElementById("salario").value);
    comisiones = Number(document.getElementById("comisiones").value);
    totalHorasExtra = Number(document.getElementById("totalHorasExtra").value);

    calificacionNiveldeRiesgo = document.getElementById("calificacionNiveldeRiesgo").value;

    if(
        nombreCompleto === "" ||
        edad === 0 ||
        tipoDocumento === "" ||
        numeroDocumento === "" ||
        salario === 0 ||
        comisiones < 0 ||
        totalHorasExtra < 0 ||
        calificacionNiveldeRiesgo === ""
    ){
        alert("Por favor complete todos los campos correctamente.");
        return;
    }

    let ibc = (salario + comisiones + totalHorasExtra) * 0.7;

    let salud = ibc * porcentajeSalud;
    let pension = ibc * porcentajePension;
    let fondoSol = ibc * porcentajeFondoSol;

    if (calificacionNiveldeRiesgo === "1") {
        niveldeRiesgo = ibc * riesgo1;

    } else if (calificacionNiveldeRiesgo === "2") {
        niveldeRiesgo = ibc * riesgo2;

    } else if (calificacionNiveldeRiesgo === "3") {
        niveldeRiesgo = ibc * riesgo3;

    } else if (calificacionNiveldeRiesgo === "4") {
        niveldeRiesgo = ibc * riesgo4;

    } else if (calificacionNiveldeRiesgo === "5") {
        niveldeRiesgo = ibc * riesgo5;
    }

    if (edad < 18) {

        alert("No se puede realizar el pago, el usuario es menor de edad.");
        return;

    } else if (edad >= 18 && edad < 25) {

        console.log("Usuario beneficiario por cotizante.");

    } else if (edad >= 25 && edad < 60) {

        console.log("Usuario cotizante.");

    } else {

        console.log("Usuario pensionado.");
    }

    let ibc = (salario + comisiones + totalHorasExtra) * 0.7;
    let salud = ibc * porcentajeSalud;
    let pension = ibc * porcentajePension;
    let fondoSol = ibc * porcentajeFondoSol;

    if (calificacionNiveldeRiesgo === "1") {

        niveldeRiesgo = ibc * riesgo1;

    } else if (calificacionNiveldeRiesgo === "2") {

        niveldeRiesgo = ibc * riesgo2;

    } else if (calificacionNiveldeRiesgo === "3") {

        niveldeRiesgo = ibc * riesgo3;

    } else if (calificacionNiveldeRiesgo === "4") {

        niveldeRiesgo = ibc * riesgo4;

    } else if (calificacionNiveldeRiesgo === "5") {

        niveldeRiesgo = ibc * riesgo5;
    }

    let totalDescuentos = salud + pension + fondoSol;
    let salarioFinal = salario + comisiones + totalHorasExtra - totalDescuentos;

    alert(
        "RESULTADOS DEL CÁLCULO\n\n" +

        "Nombre: " + nombreCompleto + "\n" +
        "Documento: " + numeroDocumento + "\n\n" +

        "IBC: $" + ibc.toFixed(2) + "\n" +
        "Salud: $" + salud.toFixed(2) + "\n" +
        "Pensión: $" + pension.toFixed(2) + "\n" +
        "Fondo Solidaridad: $" + fondoSol.toFixed(2) + "\n" +
        "ARL: $" + niveldeRiesgo.toFixed(2) + "\n\n" +

        "Total descuentos: $" + totalDescuentos.toFixed(2) + "\n" +
        "Salario final: $" + salarioFinal.toFixed(2)
);
});