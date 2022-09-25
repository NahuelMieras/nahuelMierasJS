//prueba de buscador

//let articulo1 = (tipo = "auto", marca = "volkswagen", modelo = "2018");
//let articulo2 = (tipo = "camioneta", marca = "ford", modelo = "2020");
//let articulo3 = (tipo = "auto", marca = "fiat", modelo = "2018");

//function buscarArticulo() {
 //   let tipo = prompt("¿Que tipo de vehiculo estas buscando?");
 //   let marca = prompt("¿Que marca es?");
 //   let modelo = prompt("¿Que modelo es?");
//}

// if (disponibilidadArticulo = true) {
  //  console.log("¿Desea comprar este articulo?");
//} else if (disponibilidadArticulo = false){
//    console.log("Este articulo no esta disponible");/
//} 


// Iniciar Sesion

let mail = "Nahuel"
let pass = "Mieras"

let loginMail = prompt("Ingresar correo electronico");
let loginPass = prompt("Ingresar contrasenia");

for (let loginAttemps = 3; loginAttemps > 0; loginAttemps--) {
    while ((mail !== loginMail) && (pass !== loginPass) && (loginAttemps > 0 )){
        loginAttemps--;
        alert(`Correo o contrasenia incorrecta. Vuelve a intentarlo.`);
        if (loginAttemps == 0) {
            alert(`Ya no te quedan intentos, vuelve a intentarlo mas tarde.`)
            break;
        }
        loginMail = prompt("Ingresar correo electronico");
        loginPass = prompt("Ingresar contrasenia");
    }
}


// Calculador de precio de producto

let producto = prompt("¿Que desea comprar?");
let cantidad = parseInt(prompt("¿Cuantos quieres llevar?"));


let precioProducto

 if (producto == "chocolates"){
    precioProducto = 100;

 } else if (producto == "alfajores"){
    precioProducto = 50;

 } else if (producto = "galletas"){
    precioProducto = 40;

} else if (producto = "gaseosa"){
    precioProducto = 500;

} else if (producto = "cigarrillos"){
    precioProducto = 300;

 } else {
    alert (`El producto que estas buscando no esta disponible`)
 }
let precioTotal = cantidad * precioProducto

alert ("Tiene que pagar $"+ precioTotal);


// Calculador de intereses

function calcularCuotas (precio, cuotas, porcentaje){
    let interes = precio * porcentaje/100;
    let valorCuota  = precio / cuotas + interes;
    let precioFinal = valorCuota * cuotas;

    return precioFinal;
}

let valorProducto = calcularCuotas( parseInt(prompt("Precio del producto")), (parseInt(prompt("Cantudad de cuotas"))), (parseInt(prompt("Porcentaje interes"))));
 console.log (valorProducto);