// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not.
// If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

answer = (num) => {
  if(num % 3 === 0) {
    return `${num} is divisible by three`
  } else
    return `${num} is not divisble by three`
}
console.log(answer(9))


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

const helloMe = {
  firstName: 'Miles',
  middleName: 'Mayer',
  lastName: 'Shumilak',
  dob: 7979,
  description: function() {
  // return this.firstName +' '+ this.middleName +' '+ this.lastName +' was born on ' +this.dob+'.'}   *** takes too much glitter to make it shine!
  return `${this.firstName} ${this.middleName} ${this.lastName} was born on ${this.dob}.`}
}
console.log(helloMe.description())


// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

const grocery = ['beer', 'eggs', 'cheese', 'bread', 'beer']

mostImportant = (array) => {
  return array[0] +', '+ array[2] +', '+ array[4]
}
console.log(mostImportant(grocery))


// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr).
// Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
  const bravo = str.split('')
  const alpha = bravo.sort()
  return alpha.join('')
}
console.log(alphabetSoup('cohort'))


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

animalNums = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i] + arr2[i])
  }
}
console.log(animalNums(nums,nouns))
// why undefined???


// 6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

const arrr = [1, 3, 5]

multThree = (array)=> {
  const answer = array.map(value => value * 3)
  return answer
}
console.log(multThree(arrr))
