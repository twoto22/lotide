
const assertEqual = function(array1, array2){
  if (array1 === array2) {
      console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
 
   } else {
      console.log(`❌❌❌ Assertion Failed: ${array1} is not equal to ${array2}`);

  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if(allItems[item]) {
      if(itemsToCount[item]){
        results[item] += 1
      } else {
        results[item] = 1
      }
    }

    console.log(item);
  }

  return results;
}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);