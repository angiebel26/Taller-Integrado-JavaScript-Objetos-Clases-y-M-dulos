/* Importar Modulos */
const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");
const { calcularTotalCarrito } = require("./utilidades");


// 1. Crear tres usuarios
const cliente = new Usuario("Andrea", "andrea43@mail.com"); // cliente regular
const admin = new Usuario("Steven", "sueks@mail.com", "administrador"); // administrador
const vip = new UsuarioVIP("Valentin", "valentin5@mail.com", "Gold"); // usuario VIP

// 2. Crear cuatro productos
const cuaderno = new Producto("Cuaderno", 40000, "educativo");
const celular = new Producto("Celular", 1500000, "tecnología");
const cursoOnline = new ProductoDigital("Curso de Computacion", 200000, "anual");
const software = new ProductoDigital("Revista de Tecnología", 800000, "de por vida");

// 3. Desactivar uno de los usuarios y verificar resumen()
console.log("\nDesactivando usuario administrador:");
console.log(admin.desactivar());
console.log(admin.resumen());

// 4. Aplicar un descuento de 20% a un producto físico
console.log("\nAplicando descuento al celular:");
console.log(`Precio con descuento del celular: $${celular.aplicarDescuento(20)}`);

// 5. Imprimir la tarjeta() de todos los productos
console.log("\nProductos:");
console.log(cuaderno.tarjeta());
console.log(celular.tarjeta());
console.log(cursoOnline.tarjeta());
console.log(software.tarjeta());

// 6. Imprimir el resumen() de todos los usuarios
console.log("\nUsuarios:");
console.log(cliente.resumen());
console.log(admin.resumen());
console.log(vip.resumen());

// 7. Calcular total del carrito
const carrito = [cuaderno, celular, cursoOnline];
console.log("\nTotal del carrito:");
console.log(`$${calcularTotalCarrito(carrito)}`);


