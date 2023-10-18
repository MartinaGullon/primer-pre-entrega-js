function saludar() {
    let nombre = prompt("Ingrese su nombre por favor")
    alert("Hola " + nombre)
}

saludar()

let numero1 = parseInt(prompt("Ingrese el primer número de su cuenta."))
let operacion = (prompt("Indique la operación que desea realizar (+,-,*,/)."))
let numero2 = parseInt(prompt("Ahora coloque el segundo."))

switch (operacion) {
    case "+":
        alert("El resultado de la suma es: " + (numero1 + numero2))
        break
    case "-":
        alert("El resultado de la resta es: " + (numero1 - numero2))
        break
    case "*":
        alert("El resultado de la multiplicacion es: " + (numero1 * numero2))
        break
    case "/":
        alert("El resultado de la division es: " + (numero1 / numero2))
        break
    default:
        alert("La operacion ingresada no es valida")
}

function despedida() {
    alert("Hasta luego!")
}

despedida()