export default class Task {
  constructor(nombre, apellido, telefono, email, estadoConexion) {
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Telefono = telefono;
    this.Email = email;
    this.Estado = estadoConexion || false;
  }
}
