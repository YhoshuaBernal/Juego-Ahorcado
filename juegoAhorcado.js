const palabrasComunes = ["casa", "perro", "gato", "mesa", "sol", "agua", "luz", "flor", "mano", "jugar", "leche", "correr", "libro", "rojo", "verde", "azul", "blanco", "negro", "café", "cielo", "fuego", "música", "baño", "río", "nube", "tierra", "hoja", "pluma", "taza", "plato", "vaso", "silla", "mesa", "piso", "puerta", "ventana", "pared", "cama", "almohada", "cobija", "papel", "carta", "lapiz", "pintura", "fiesta", "amigo", "amor", "familia", "hijo", "hija", "madre", "padre", "abuelo", "abuela", "hermano", "hermana", "primo", "prima", "tío", "tía", "vecino", "ciudad", "calle", "parque", "jardín", "playa", "montaña", "bosque", "lago", "mar", "río", "cascada", "valle", "isla", "pueblo", "mercado", "tienda", "centro", "bolsa", "dinero", "tarjeta", "comida", "fruta", "verdura", "carne", "pollo", "pescado", "arroz", "pan", "leche", "huevos", "aceite", "sal", "azúcar", "sopa", "ensalada", "bebida", "refresco", "agua", "café", "té", "vino", "cerveza", "jugo", "limonada", "helado", "pastel", "galleta", "chocolate", "dulce", "postre", "regalo", "fiesta", "cumpleaños", "navidad", "año nuevo", "aniversario", "boda", "celebración", "evento", "concierto", "espectáculo", "teatro", "película", "cine", "deporte", "fútbol", "baloncesto", "béisbol", "tenis", "natación", "ciclismo", "atletismo", "gimnasia", "yoga", "pilates", "senderismo", "escalada", "surf", "esquí", "snowboard", "patinaje", "patinaje sobre hielo", "camping", "pesca", "caza", "aventura", "viaje", "excursión", "turismo", "vacaciones", "playa", "montaña", "ciudad", "país", "continente", "planeta", "espacio", "universo", "estrella", "sol", "luna", "planeta", "satélite", "galaxia", "nebulosa", "constelación", "órbita", "eclipse", "equinoccio", "solsticio", "estación", "primavera", "verano", "otoño", "invierno", "calor", "frío", "viento", "lluvia", "nieve", "tormenta", "tornado", "huracán", "terremoto", "volcán", "tsunami", "avalancha", "inundación", "sequía", "desierto", "selva", "sabana", "tundra", "glaciar", "océano", "mar", "río", "lago", "isla", "península", "golfo", "bahía", "playa", "costa", "cordillera", "montaña", "volcán", "meseta", "colina", "valle", "cañón", "cueva", "isla", "archipiélago", "península", "istmo", "cabo", "golfo", "bahía", "estrecho", "canal", "canal", "río", "arroyo", "torrente", "cascada", "laguna", "estanque", "charca", "pantano", "delta", "desembocadura", "cabecera", "boca", "ramificación", "cuenca", "afluente", "fuente", "manantial", "pozo", "acuífero", "riachuelo", "glaciar", "iceberg", "nieve", "hielo", "fuego", "agua", "aire", "tierra", "planta", "árbol", "flor", "hoja", "raíz", "rama", "tronco", "fruto", "semilla", "hongo", "musgo", "liquen", "pasto", "césped", "maleza", "arbusto", "matorral", "espinoso", "rosal", "violeta", "orquídea", "margarita", "girasol", "tulipán", "lirio", "pino", "roble", "abedul", "álamo", "cedro", "palmera", "plátano", "manzano", "peral", "ciruelo", "durazno", "fresa", "frambuesa", "morera", "zarzamora", "kiwi", "piña", "coco", "mango", "aguacate", "papaya", "sandía", "melón", "naranja", "limón", "lima", "mandarina", "toronja", "uva", "higo", "almendra", "nuez"]

function escogerPalabra (palabras) {
  let cantidad = palabras.length
  const indiceAleatorio = Math.floor(Math.random() * cantidad);
  return palabras[indiceAleatorio]
}

function buscarLetra (palabra, letra) {
  //use un array por si hay mas de una letra que coincida con lo ingresado
  let indices = [];
  
  palabra.forEach((elemento, indice) => {
    if (elemento === letra) {
      indices.push(indice);
    }
  });
  
  return indices;
}

function encriptarPalabra (arr) {
  let cadena = []
  for (let i = 0; i < arr.length; i++) {
    if(Math.random() > 0.3) {
      cadena.push("_")
    } else {
      cadena.push(arr[i])
    }
  }
  return cadena
}

function agregarLetra (arrOriginal, arrIndices, letra) {
  let arr = arrOriginal.slice()
  arrIndices.forEach((elementoIndice) => {
      arr[elementoIndice] = letra
  })
  return arr
}

function jugarAorcado () {
  let intentos = 10;
  let palabraSecreta = escogerPalabra(palabrasComunes);
  let arrPal = palabraSecreta.split("");
  let palabraConPista = encriptarPalabra(arrPal);

  console.log("Bienvenido al juego de ahorcado. Adivina la palabra:");

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 function mostrarProgreso() {
    console.log(palabraConPista.join(""));
  }

  function terminarJuego(mensaje) {
    console.log(mensaje);
    rl.close();
  }
  
  function realizarIntento(userInput) {
    let indicesLetraBuscada = buscarLetra(arrPal, userInput);
    if (indicesLetraBuscada.length > 0) {
      palabraConPista = agregarLetra(palabraConPista, indicesLetraBuscada, userInput);
      mostrarProgreso();
      if (!palabraConPista.includes("_")) {
        terminarJuego("¡Felicidades! Has adivinado la palabra.");
      }
    } else {
      intentos--;
      console.log("Incorrecto. Te quedan " + intentos + " intentos.");
      if (intentos === 0) {
        terminarJuego("¡Has perdido! La palabra era: " + palabraSecreta);
      }
    }
  }

  mostrarProgreso();

  rl.on("line", (userInput) => {
    realizarIntento(userInput);
  });
}

jugarAorcado()





