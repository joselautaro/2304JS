// Estructuras de control de flujo
// Estructuras de control de flujo (switch)
// bucles
// Recorriendo arrays
// Funciones, declaración y alcance de las variables


// Estructuras de control de flujo

// let edad = 20;

// let e = parseInt(prompt("Ingrese su edad"));

// if(e >= 18){
//     // Se evalúa la condición y ejecuta lo pedido
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// }

// if( (e >= 18) && ( e < 25) ){
//     console.log("Podés ingresar, pero en compañia de alguien más grande");
// }else if(e >= 25){
//     console.log("Puede ingresar solo")
// }else{
//     console.log("No puede ingresar")
// }

// /_______________________________________________________________________________________

// Switch

// let dia = prompt("Ingrese un dia de semana");

// switch(dia){
//     case "Lunes":
//         console.log("Comienzo de semana");
//         break;
//     case "Viernes":
//         console.log("Hoy es Viernes, dia libre");
//         break;
//         default:
//     console.log("Es un dia común")
// }

// //_______________________________________________________________________________

// Bucle for

// console.log("Repetición 1")
// console.log("Repetición 2")
// console.log("Repetición 3")
// console.log("Repetición 4")

// Inicialización; operando; iterador
// for( let i = 3; i <= 5; i++ ){
//     console.log("Repetición", i)
// }

// _________________________________________________________________________________

// Bucle while

// let contador = 0;

// while( contador <= 3 ){
//     console.log("Contador: ", contador);
//     contador++
// }

// __________________________________________________________________________________

// Array

// let frutas = [ "Manzana", "Banana", "Pera" ];

// for( let fruta of frutas ){
//     console.log(fruta)
// }
// console.log([...frutas])

// Array de objetos

// let estudiantes = [
//     {
//         // Claves: valores,
//         nombre: 'Juan',
//         edad: 20
//     },
//     {
//         nombre: 'Ana',
//         edad: 19
//     },
//     {
//         nombre: 'Renzo',
//         edad: 22
//     }
// ];

// for( let estudiante of estudiantes ){

//     if(estudiante.edad >= 21){
//         console.log(`${estudiante.nombre} es mayor de edad`)
//     }else{
//         console.log(`${estudiante.nombre} es menor de edad`)
//     }

// }

// _________________________________________________________________________________

// Validamos y verificamos si el usuario ingreso o no un numero, en el caso que no lo haya ingresado o haya ingresado un texto, el bucle continua solicitándolo hasta el fin de los tiempos

// let entradaUsuario;


// do{

//     entradaUsuario = prompt("Ingrese un número");

//     // Validar si la entrada NO ES UN NÚMERO
//     if( isNaN(entradaUsuario) ){
//         alert("Por favor ingresa un valor numérico valido")
//     }


// }while(isNaN(entradaUsuario))

// let numero = Number(entradaUsuario);

// console.log("El número ingresado es: ", numero);

// ________________________________________________________________________________________

// Funciones se crearon desde los principios de la programación

// palabra reservada suma(){

// }

// Funcion explícita con return explicito
// function suma ( a, b, c){
//     return a * b * c
// }
// 
// A partir de aca, EcmaScript 6 + (año 2016 en adelante)
// Funcion implicita con return explicito
// const suma = (a, b, c) => {
//     return a * b * c
// }

const suma = (a, b, c) => a * b * c


// suma(3, 3, 3)
console.log(suma(10, 10, 10))