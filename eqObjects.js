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

const eqObjects = function(object1, object2) {
  for(const key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key], object2[key])){
            return false;
        } else {
          continue
        }
    }
    
    if(object1[key] === object2[key]) {
      return true
    } 
  }
  return false;
};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false