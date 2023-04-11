import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

// Persona 1
const direccionPersona1 = new Direccion ("Calle Mayor", 123, 2, "A", 28001, "Madrid", "Madrid");
const telefonoPersona1 = new Telefono("movil",613851157);
const mailPersona1 = new Mail ("personal", "Matilda95@yahoo.es");
const datosPersona1 = new Persona("Matilda", "Short", 27,"05449948N", new Date (1995,6,20),"rosa","mujer",[direccionPersona1], [mailPersona1],[telefonoPersona1],"");


// Persona 2

const direccionPersona2 = new Direccion("Calle Gran Vía", 10, 4, "B", 28013, "Madrid", "Madrid");
const telefonoPersona2 = new Telefono("movil",767821511);
const mailPersona2 = new Mail ("personal", "SophiaJohnson@yahoo.com");
const datosPersona2 = new Persona("Sophia", "Johnson", 22, "34534833N" , new Date (2001,1,18), "azul" ,"mujer",[direccionPersona2],[mailPersona2],[telefonoPersona2],"");

//Persona 3

const direccionPersona3 = new Direccion ("Calle Alcalá", 100, 3, "C", 28009, "Madrid", "Madrid");
const telefonoPersona3 = new Telefono("movil",671583386);
const mailPersona3 = new Mail ("personal", "PoppyBenson@yahoo.com");
const datosPersona3 = new Persona ("Poppy","Benson",27, "56268992N", new Date (1995, 4, 21), "verde", "mujer", [direccionPersona3], [mailPersona3], [telefonoPersona3],"");



// Muestra por consola 
console.log("Contactos de mi agenda:");
console.log(datosPersona1);
console.log(datosPersona2);
console.log(datosPersona3);


// Realizo la busqueda de DNI y modifico los datos de la persona encontrada
const miAgenda: Persona [] = [datosPersona1, datosPersona2, datosPersona3];
function buscarPersonaDni(personas:Persona[], buscarDni: string): Persona | null{
  for (const persona of personas) {
    if (persona.getDni() === buscarDni) {
      console.log(persona);
      return persona;
    }
  }
  return null;
}

const buscardni: string = "34534833N";
function modificarPersona(buscarDni: string) {
  const persona = buscarPersonaDni([datosPersona1, datosPersona2, datosPersona3], buscarDni);
  if (persona) {
    const nuevaDireccion = new Direccion("Paseo del Prado", 21, 1, "B", 28014, "Madrid", "Madrid");
    const nuevoTelefono = new Telefono("casa", 976165108);
    const nuevoMail = new Mail("trabajo", "Sophiajob@yahoo.com");

    const direcciones = persona.getDirecciones();
    direcciones.push(nuevaDireccion);
    persona.setDirecciones(direcciones);
  
    const mails = persona.getMails();
    mails.push(nuevoMail);
    persona.setMails(mails);
  
    const telefonos = persona.getTelefonos();
    telefonos.push(nuevoTelefono);
    persona.setTelefonos(telefonos);

    console.log("Contacto editado:", persona);
  } else {
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
