console.log('Hello World!')

// Three ways to create variables
let color = 'blue'  // decalre using let
var size = 'medium' // not recommended, large scope
const language = 'JavaScript' // Final value, use for HTML elements

let quantity = 4
let distance = 3.5

// single and double quotes both work
let text = 'Hello World'
let message = "Hello"

let temp = 65

console.log('Today\'s temperature is ' + temp + 'F')

let tempC = (temp - 32) * 5 / 9

console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')