/*Clase Usuario */
class Usuario {
  constructor(nombre, email, rol = "cliente") {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    this.activo = true;
  }

/*Metodo usuario*/ 
  saludo() {
    return `Hola, soy ${this.nombre} y mi rol es ${this.rol}.`;
  }

/*Metodo desactivar cambia estado a inactivo */
  desactivar() {
    this.activo = false;
    return `${this.nombre} ha sido desactivado.`;
  }

/*Metodo resumen datos del usuario*/ 
  resumen() {
    return `Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}, Estado: ${this.activo ? "Activo" : "Inactivo"}`;
  }
}

class UsuarioVIP extends Usuario {
  constructor(nombre, email, membresia) {
    super(nombre, email, "clienteVip");
    this.membresia = membresia;
  }

  saludo() {
    return `Hola, soy ${this.nombre}, cliente VIP con membresía ${this.membresia}.`;
  }

  beneficios() {
    return `Beneficios exclusivos de la membresía ${this.membresia}.`;
  }
}

module.exports = { Usuario, UsuarioVIP };

