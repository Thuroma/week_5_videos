let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[100])

animals[3] = 'giraffe'
console.log(animals)
console.log([5])

animals.push('elephant')
animals.unshift('deer')

let firstAnimal = animals.shift()
console.log(firstAnimal)

let lastAnimal = animals.pop
console.log(lastAnimal)

animals.reverse
console.log(animals)

animals.sort
console.log(animals)

console.log(animals.indexOf('lion'))

console.log(animals.indexOf('walrus'))
if (animals.indexOf(('walrus') == -1)) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach(function(animal) {
    console.log(animal.toUpperCase)
})

animals.forEach(function(animal) {
    console.log(animal.length)
})