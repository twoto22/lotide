
const assertEqual = function(array1, array2){
  if (array1 === array2) {
      console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
 
   } else {
      console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);

  }
};




const eqArrays = function(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      output = output && eqArrays(array1[element], array2[element]);
    } else if (array1[element] !== array2[element]) {
      output = output && false;
    }
  }
  return output;
};

module.exports = eqArrays;



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);