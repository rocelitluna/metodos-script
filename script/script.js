class persona{
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    mostrarDatos(){
        console.log("Nombre:", this.nombre)
        console.log("Apellido:", this.apellido)
        console.log("Edad:", this.edad)
        console.log("Email:", this.email)
    }
}

let Persona = new persona("Rocelit", "Luna", 18, "roce@gmail.com");

console.log(Persona);


Persona.mostrarDatos();
