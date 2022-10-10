function gpa_validator(gpa) {
    if (gpa < 0 && gpa > 4) {
        return false;
    } else {
        return true;
    }
}

student_gpa = gpa_validator(4.5)

console.log(student_gpa)


function city_state_address(city, state) {
    let address = `${city}, ${state.toUpperCase()}`;
    return address;
}

let city = 'Saint Paul'
let state = 'mn'
let new_city_state = city_state_address(city, state)
console.log(new_city_state)

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
let message = `This class is ${department} ${classCode} ${className}`
console.log(message)