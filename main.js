
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


let producto = prompt("¿Que desea comprar?").toLocaleLowerCase;
let cantidad = parseInt(prompt("¿Cuantos quieres llevar?").toLocaleLowerCase);


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


 // Arituculos


 function Vehiculos(modelo, marca, version, anio, combustible, precio){
    this.modelo = modelo;
    this.marca = marca;
    this.version = version
    this.anio = anio;
    this.combustible = combustible;
    this.precio = precio;
 }

 const volkswagenGolTrend = new Vehiculos("Auto","Volkswagen", "Gol Trend", "2018", "Nafta", "$3500000");
 const fiatPalio = new Vehiculos("Auto","Fiat", "Palio", "2014", "Nafta", "$3500000");
 const fordFiesta = new Vehiculos("Auto","Ford", "Fiesta Kinetic", "2014", "Nafta", "$2750000");
 const peugeot208 = new Vehiculos("Auto","Peugeot","208", "2017", "Diesel", "$3890000");
 const toyotaHilux = new Vehiculos("Camioneta","Toyota", "Hilux", "2015", "Turbo Diesel", "$4350000");

 
 //Agregar articulos nuevos


const nuevoVehiculo = () =>  {
	let modeloVehiculo = prompt("Modelo (Auto, Camioneta, Utilitario)");
	let marcaVehiculo = prompt("Marca");
	let versionVehiculo = prompt("Version");
	let anioVehiculo = parseInt(prompt("Año"));
	let combustibleVehiculo = prompt("Combustible");
	let precioVehiculo = parseInt(prompt("Precio"));

    const vehiculo = new Vehiculos(modeloVehiculo, marcaVehiculo, versionVehiculo, anioVehiculo, combustibleVehiculo, precioVehiculo);
    console.log(vehiculo);
    return vehiculo;
}
