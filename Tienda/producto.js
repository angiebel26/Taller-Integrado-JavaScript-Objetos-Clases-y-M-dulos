/*Clase Producto*/
class Producto {
constructor(nombre, precio, categoria) {
this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

/*Calcular total iva 19%*/
 calcularTotal() {
    return this.precio * 1.19; // IVA 19%
  }

/*Precio con descuento aplicado (sin modificar el precio original*/ 
aplicarDescuento(porcentaje) {
    return this.precio - (this.precio * porcentaje / 100);
  }

/*Metodo resumen*/
resumen() {
return `Producto: ${this.nombre}, Categoría: ${this.categoria}, Precio base: $${this.precio}`;
}

 tarjeta() {
    return `Producto: ${this.nombre}, Categoría: ${this.categoria}, Precio con IVA: $${this.calcularTotal()}`;
}

}

/*Clase extendida producto Digital */ 
class ProductoDigital extends Producto {
  constructor(nombre, precio, licencia) {
    super(nombre, precio, "digital");
    this.licencia = licencia;
  }

/*Sobreescribe Calcular Total*/ 
calcularTotal() {
    return this.precio; 
  }

/*Sobreescribe Tarjeta*/ 
  tarjeta() {
    return `Producto Digital: ${this.nombre}, Licencia: ${this.licencia}, Precio: $${this.precio}`;
  }
}

/*Exportacion de ambas clases*/ 
module.exports = { Producto, ProductoDigital };
