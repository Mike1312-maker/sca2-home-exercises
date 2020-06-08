// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null]

const multOf7 = el => {
  if (el % 7 === 0) {
    return el;
  };
}

// Challenge: Implement the filter method below!

//Note: lines 20 - 22 are just to ensure false doesn't break my calcs. Not sure the proper way to implement this since the real filter does not allow this
Array.prototype.filter = function(fun) {
  const arr = this;
  let newArr = [];
  let x;
  for (let item of arr) {
    if (item == false) {
      item = 1
    }
    x = fun(item)
    if (x !== undefined && x !== null) {
      newArr.push(x)
    }
  };
  return newArr;
}

const newArr = arr.filter(multOf7)

console.log(newArr)