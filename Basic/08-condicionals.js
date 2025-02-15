// Condicionales

// 1. if (si)
let age = 37

if (age == 37) {
    // Bloque
    console.log("La edad es: " + age)
}

// 2. if-else (si-no)
let age1 = 10

if (age1 == 37) {
    // Bloque
    console.log("La edad es: " + age1)
}else{
    console.log("La edad no es: " + age1)
}

// 3. else if (si no, si)
let age2 = 40

if (age2 == 37) {
    // Bloque
    console.log("La edad es: " + age2)
}else if (age2 < 18){
    console.log("Es menor de edad")   
}else{
    console.log("La edad no es: " + age2 + " ni es menor de edad")
}

// 4. Condicional ternario