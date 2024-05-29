//Part 1: Thinking Functionally

//Take an array of numbers and return the sum

let randomNum = [13, 45, 97, 33, 78]

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
console.log(sumArray(randomNum))

//Take an array of numbers and return the average.

function averageArray(numbers) {
    const sum = sumArray(randomNum)
    return sum / numbers.length
}
console.log(averageArray(randomNum))

//Take an array of strings and return the longest string.

let vegetables = ["carrot", "broccoli", "spinach", "cauliflower", "pepper", "tomato"]

function findLongestVegetable(vegetables) {
    let longestVeggie = ''
    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length > longestVeggie.length) {
            longestVeggie = vegetables[i]
        }
    }
    return longestVeggie;
}

console.log(findLongestVegetable(vegetables))

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function longerThanNumber(array, number) {
    return array.filter(arr => arr.length > number);
}
console.log(longerThanNumber(vegetables, 6))

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let n = 10
function recurse(n) {
    if (n <= 1) {
        return
    }
    recurse(n - 1)
    console.log(n)
}
console.log(recurse(n))


//Part 2: Thinking Methodically

// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.



// Part 3 Thinking Critically   

/* develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.*/