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
    if (n > 1) { 
        console.log(n)
    }
}
recurse(n)


//Part 2: Thinking Methodically

let peopleInfo = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age.

function compareByAge(a, b) {
    return parseInt(a.age) - parseInt(b.age);
}
peopleInfo = peopleInfo.sort(compareByAge)
console.log(peopleInfo)

// Filter the array to remove entries with an age greater than 50.
let isGreaterThan50  = peopleInfo.filter(function(person) {
    return parseInt(person.age) <= 50
})

console.log(isGreaterThan50)
// Map the array to change the “occupation” key to “job” and increment every age by 1.

let updateInfo = peopleInfo.map(function(person) {
    return {
        id: person.id,
        name: person.name,
        job: person.occupation, 
        age: (parseInt(person.age)+ 1).toString()
    };   
});

console.log(updateInfo);

// Use the reduce method to calculate the sum of the ages.

let sumOfAge = peopleInfo.reduce(function(accumulator, person) {
    return accumulator + parseInt(person.age)
}, 0)
console.log(sumOfAge)

// Then use the result to calculate the average age.

function averageAge(age) {
    return sumOfAge / age.length
}
console.log(averageAge(peopleInfo))


// Part 3 Thinking Critically   

/* develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.*/

let person = {
    name:"Madina",
    age:0,
    occupation:"baby"

}

function incrementAge (number) {
    person.age += 1
    person.updated_at = new Date();
    return person.age;
}

let newAge = incrementAge(person);
console.log(person)

function copyAndIncrementAge(person) {
    let newPerson = { ...person }
    newPerson.age += 1
    newPerson.occupation ="toddler"
    return newPerson
}

let newPerson = copyAndIncrementAge(person);
console.log(newPerson);