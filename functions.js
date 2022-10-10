function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message = shout('hello web programmers!')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) {                        // undefined values are considered to be false (falsey values)
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}

function validGPA(gpa) {
    // can also write 'return gpa >= 0 && gpa <= 4'
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

console.log(validGPA(5))

function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)

let todayTemp = 75
todayCelcius = f_to_c(todayTemp, 3)
console.log(todayCelcius)


