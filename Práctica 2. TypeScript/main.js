"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
// Persona 1
var direccionPersona1 = new direccion_1.Direccion("Calle Mayor", 123, 2, "A", 28001, "Madrid", "Madrid");
var telefonoPersona1 = new telefono_1.Telefono("movil", 613851157);
var mailPersona1 = new mail_1.Mail("personal", "Matilda95@yahoo.es");
var datosPersona1 = new persona_1.Persona("Matilda", "Short", 27, "05449948N", new Date(1995, 6, 20), "rosa", "mujer", [direccionPersona1], [mailPersona1], [telefonoPersona1], "");
// Persona 2
var direccionPersona2 = new direccion_1.Direccion("Calle Gran Vía", 10, 4, "B", 28013, "Madrid", "Madrid");
var telefonoPersona2 = new telefono_1.Telefono("movil", 767821511);
var mailPersona2 = new mail_1.Mail("personal", "SophiaJohnson@yahoo.com");
var datosPersona2 = new persona_1.Persona("Sophia", "Johnson", 22, "34534833N", new Date(2001, 1, 18), "azul", "mujer", [direccionPersona2], [mailPersona2], [telefonoPersona2], "");
//Persona 3
var direccionPersona3 = new direccion_1.Direccion("Calle Alcalá", 100, 3, "C", 28009, "Madrid", "Madrid");
var telefonoPersona3 = new telefono_1.Telefono("movil", 671583386);
var mailPersona3 = new mail_1.Mail("personal", "PoppyBenson@yahoo.com");
var datosPersona3 = new persona_1.Persona("Poppy", "Benson", 27, "56268992N", new Date(1995, 4, 21), "verde", "mujer", [direccionPersona3], [mailPersona3], [telefonoPersona3], "");
// Muestra por consola 
console.log("Contactos de mi agenda:");
console.log(datosPersona1);
console.log(datosPersona2);
console.log(datosPersona3);
// Realizo la busqueda de DNI y modifico los datos de la persona encontrada
var miAgenda = [datosPersona1, datosPersona2, datosPersona3];
function buscarPersonaDni(personas, buscarDni) {
    for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
        var persona = personas_1[_i];
        if (persona.getDni() === buscarDni) {
            console.log(persona);
            return persona;
        }
    }
    return null;
}
var buscardni = "34534833N";
function modificarPersona(buscarDni) {
    var persona = buscarPersonaDni([datosPersona1, datosPersona2, datosPersona3], buscarDni);
    if (persona) {
        var nuevaDireccion = new direccion_1.Direccion("Paseo del Prado", 21, 1, "B", 28014, "Madrid", "Madrid");
        var nuevoTelefono = new telefono_1.Telefono("casa", 976165108);
        var nuevoMail = new mail_1.Mail("trabajo", "Sophiajob@yahoo.com");
        var direcciones = persona.getDirecciones();
        direcciones.push(nuevaDireccion);
        persona.setDirecciones(direcciones);
        var mails = persona.getMails();
        mails.push(nuevoMail);
        persona.setMails(mails);
        var telefonos = persona.getTelefonos();
        telefonos.push(nuevoTelefono);
        persona.setTelefonos(telefonos);
        console.log("Contacto editado:", persona);
    }
    else {
        console.log("No se encontró ninguna persona con ese DNI.");
    }
}
// Llamar a la función modificarPersona
modificarPersona(buscardni);
// Muestro por consola los cambios realizados
console.log("Mis contactos con los cambios realizados:");
console.log(datosPersona1);
console.log(datosPersona2);
console.log(datosPersona3);
