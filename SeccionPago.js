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

// Calculos

let ibc = (salario+comisiones+totalHorasExtra) * 0.7
let salud = ibc * porcentajeSalud
let pension = ibc * porcentajePension
