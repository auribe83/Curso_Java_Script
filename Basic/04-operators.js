// Operadores 

// Operadores Aritmeticos
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Modulo(resto de la division)
console.log(a ** b) // Exponencial


a++ // Incremento
console.log(a) 

b-- // Decremento
console.log(b) 


// Operadores de Asignación (=, +=, -=, *=, %=, **=)
let myVariable = 2
myVariable +=2
console.log(myVariable) 


// Operadores de Comparación (>, <, >=, <=, ==, ===) al utilizarlos retorna valores booleanos

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor igual
console.log(a <= b) // Menor igual
console.log(a == b) // Igual
console.log(a === b) // Identidad
console.log(a != b) // Distinto
console.log(0 == false) // Booleano

// Truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El Boolean true

// Falsy values (Valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El Boolean false
// Cadena de texto vacia

// Operadores lógicos (compara sus valores booleanos)

// and (&&)
console.log(" *** Operador and ***")

console.log(5 > 10 && 15 > 20) // 2 Condiciones son falsas el el resultado en false
console.log(5 < 10 && 15 < 20) // 2 Condiciones verdaderas, el resultado es true
console.log(5 < 10 && 15 > 20) // 1 Condicion verdadera y otra false, el resultado es false

// or (|| Solo se debe cumplir una  para que la condicion se cumpla)
console.log(" *** Operador Or ***")

console.log(5 > 10 || 15 > 20) // 2 Condiciones son falsas el el resultado en false
console.log(5 < 10 || 15 < 20) // 2 Condiciones verdaderas, el resultado es true
console.log(5 < 10 || 15 > 20) // 1 Condicion verdadera y otra false, el resultado es true
console.log(5 > 10 && 15 > 20 || 30 < 40 ) // 2 Condiciones falsas y una true, el resultado es true

// not (! Negación)
console.log(" *** Operador de Negación ***") // Se invierte el valor resultante

console.log(!(5 > 10 && 15 > 20)) // 2 Condiciones son falsas el el resultado es true
console.log(!(5 > 10 || 15 > 20)) // 1 Condicion false o Condición False, el resultado es true
console.log(!true)                // El resultado es false
console.log(!false)               // El resultado es true

/* Operadores ternarios(Permiten escribir una condición, si se cumple algo se realiza una cosa, 
   si se cumple la otra, se realiza otra cosa)
*/
console.log(" *** Operadores ternarios ***") //

const isRaining = true

isRaining ? console.log('Esta lloviendo') : console.log('No Esta lloviendo')