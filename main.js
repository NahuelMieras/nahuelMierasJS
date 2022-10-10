
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

 let precioArticulo = parseInt(prompt("Precio del producto"));
 let cantidadCuotas = parseInt(prompt("Cantidad de cuotas"));
 let porcentajeInteres = parseInt(prompt("Porcentaje interes"));

 let valorProducto = calcularCuotas (precioArticulo, cantidadCuotas, porcentajeInteres)
  console.log (valorProducto);


 // Arituculos


 class Vehiculo {
    constructor(modelo, marca, version, anio, combustible, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.version = version;
        this.anio = anio;
        this.combustible = combustible;
        this.precio = precio;
    }
}

 const volkswagenGolTrend = new Vehiculo("Auto","Volkswagen", "Gol Trend", "2018", "Nafta", "$3500000");
 const fiatPalio = new Vehiculo("Auto","Fiat", "Palio", "2014", "Nafta", "$3500000");
 const fordFiesta = new Vehiculo("Auto","Ford", "Fiesta Kinetic", "2014", "Nafta", "$2750000");
 const peugeot208 = new Vehiculo("Auto","Peugeot","208", "2017", "Diesel", "$3890000");
 const toyotaHilux = new Vehiculo("Camioneta","Toyota", "Hilux", "2015", "Turbo Diesel", "$4350000");

 
 //Agregar articulos nuevos
const vehiculos = [];

function agregarVehiculo () {
    let modeloVehiculo = prompt("Modelo (Auto, Camioneta, Utilitario)");
    let marcaVehiculo = prompt("Marca");
    let versionVehiculo = prompt("Version");
    let anioVehiculo = parseInt(prompt("Año"));
    let combustibleVehiculo = prompt("Combustible");
    let precioVehiculo = parseInt(prompt("Precio"));

    const vehiculoNuevo = new Vehiculo(modeloVehiculo, marcaVehiculo, versionVehiculo, anioVehiculo, combustibleVehiculo, precioVehiculo);
    vehiculos.push(vehiculoNuevo);
    return vehiculoNuevo;
}
agregarVehiculo();

//Buscador de productos

const productos = [
    {tipo: "auto", marca: "Volkswagen", version: "Gol Trend", anio: "2018", combustible: "Nafta", precio: "$3500000" },
    {tipo: "camioneta", marca: "Ford", version: "Ranger", anio: "2020", combustible: "Diesel", precio: "$5000000" },
    {tipo: "auto", marca: "Fiat", version: "Palio", anio: "2015", combustible: "Nafta", precio: "$2300000" },
]

const resultadoBusqueda = productos.filter((el)  => el.tipo.indexOf(prompt("Buscar")));
console.log(resultadoBusqueda);
