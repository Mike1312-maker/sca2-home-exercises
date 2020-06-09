// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof(obj[key]) == 'object') {
      if ((!hasFalsyValue(obj[key]) && obj[key].length > 0) || (obj[key].length == 0 && !obj[key])) {
        return false;
      };
    } else if (!obj[key]) {
      return false;
    };
  };
  return true;
};

console.log(hasFalsyValue({x:true, y:{a: true, b:false}, z:true}));