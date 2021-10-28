
const assertEqual = function(array1, array2){
  if (array1 === array2) {
      console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
 
   } else {
      console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);

  }
};

const tail = function(Array) {
  console.log(Array.slice(1));
}




const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);


assertEqual(words.length, 3);