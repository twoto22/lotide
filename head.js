
const assertEqual = function(array1, array2){
  if (array1 === array2) {
      console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
 
   } else {
      console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);

  }
};

const head = function(array) {
  if (array.length >= 1)
    return array[0];
}

// head([5,6,7], 5);
// head(["Hello", "Lighthouse", "Labs"], "Hello");
// console.log(head([1]));


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
