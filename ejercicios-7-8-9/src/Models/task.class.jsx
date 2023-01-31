//Forma nueva ecma6, clases
export default class Task {
  constructor(nombre, apellido, telefono, email, estadoConexion) {
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Telefono = telefono;
    this.Email = email;
    this.Estado = estadoConexion || false;
  }
}
 //forma antigua de clases
// export default function Task (nombre, apellido, telefono, email, estadoConexion){
//   this.Nombre = nombre;
//   this.Apellido = apellido;
//   this.Telefono = telefono;
//   this.Email = email;
//   this.Estado = estadoConexion || false;
// }