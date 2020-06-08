const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let newStr = ""
  for(let char of str) {
    newStr = char.toString() + newStr
  };
  return newStr;
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  if (num == 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const words = {
    months: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'October', 'Novermber', 'December'],
    hourNumbers: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
    minuteNumbers: []
  };
  const date = new Date();
  let timeOfDay;
  if (date.getHours() < 12) {
    timeOfDay = 'morning';
  } else {
    timeOfDay = 'evening';
  };
  let suffix;
  if (date.getDate() == 1) {
    suffix = 'st';
  } else if (date.getDate() == 2) {
    suffix = 'nd';
  } else if (date.getDate() == 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  };
  
  return `Today's date is ${words.months[date.getMonth()]} ${date.getDate()}${suffix}, ${date.getFullYear()}. It is ${date.getHours()}:${date.getMinutes()} in the ${timeOfDay}`;
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  str = str.slice(str.length - num) + str.slice(0, str.length - num);
  return str;
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ")
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  elements = [];
  let dupe;
  for (let item of ary) {
    dupe = false;
    for (let uItem of elements) {
      if (item === uItem) {
        dupe = true;
        break;
      };
    };
    if (!dupe) {
      elements.push(item);
    };
  };
  return elements;
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  let newArr = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    newArr.push([arr1[i], arr2[i]]);
  };
  return newArr;
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [];
  let arr2 = [];
  for (let item of arr) {
    arr1.push(item[0]);
    arr2.push(item[1]);
  }
  return arr1, arr2
}

// Write tests here:
assert(reverse("3df") === "fd3")
assert(factorial(5) == 120)
console.log(announceDate())
assert(shiftRight('Hello', 3) == 'lloHe')
// assert(tokenize('This is several words!') == [ 'This', 'is', 'several', 'words!' ])
console.log(tokenize('This is several words!'))
console.log(uniqueOnes([1,1,1,2,3,3,4,5,5,5,6,7,7,7,1,9,4,9]))
console.log(zip([1, 2, 3], [5, 3, 1]))
console.log(unzip([[ 1, 5 ], [ 2, 3 ], [ 3, 1 ]]))