//PASO 1: CREAR CLASE PADRE

class Cantante {
    cantar() {
        console.log("Cantando una canción...");
    }
}

//PASO 2:CREAR CLASES HIJAS

    //CLASE HIJA 1
    class Lock extends Cantante {
        cantar() {
            console.log("Lock canta una canción traviesa.");
        }
    }

    //CLASE HIJA 2
    class Barrel extends Cantante {
        cantar() {
            console.log("Barrel canta una canción escalofriante.");
        }
    }


//PASO 3: CREAR FUNCION

function cantarCancion(cantante) {
    cantante.cantar();
}

const lock = new Lock();
const barrel = new Barrel();

  cantarCancion(lock); // Lock canta su canción traviesa
  cantarCancion(barrel); // Barrel canta su canción escalofriante
