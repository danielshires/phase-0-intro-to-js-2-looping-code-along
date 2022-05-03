// // Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I am ${age} years old. Happy birthday to me!`)
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and add a bow!`)
    }
    return gifts
}

// function wrapGifts(gifts) {
//     let i = 0
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and add a bow!`)
//         i++
//     }
//     return gifts
// }

// console.log(wrapGifts(gifts))

function writeCards(array, eventName) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}

// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))

function countDown(int) {
    let i = 0
    while (i <= int) {
        console.log(int)
        int -= 1
    }
}


console.log(countDown(10))