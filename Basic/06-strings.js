// Strings

// 1. Concatenación de cadenas
console.log("Concatenación de cadenas")
let myName = "Argenis"
let greeting = "Hola, " + myName + "!"

console.log(greeting)

// 2. Longitud de cadenas
console.log("Longitud de cadenas")

console.log(greeting.length)

// 3. Acceso a caracteres
console.log("Acceso a caracteres")

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[12])

// 4. Metodos Comunes
console.log("Metodos Comunes")

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Argenis"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Ricardo"))
console.log(greeting.includes("Hola"))    // Verifica si existe la cadena
console.log(greeting.includes("Argenis"))
console.log(greeting.includes("Ricardo"))
console.log(greeting.slice(0,10))        // Extrae solo un fragmento de la cadena
console.log(greeting.replace("Argenis", "Ricardo"))        // Remplaza la cadena original por la nueva

// 5. Template Literals (Plantillas literales) //Crea string de varias lineas con las comillas invertidas
console.log("Plantillas literales")

let message = `Hola, este es mi
curso de JavaScript`

console.log(message)

// 5.1. Interpolacion de variables, tambien utilizan las comillas invertidas
console.log("Interpolacion de variables ")

let email = "argenis429@gmail.com"

console.log(`Hola, ${myName}!`)
console.log(`Hola, ${myName}! Tu email es ${email}.`)