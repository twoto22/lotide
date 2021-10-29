const numArray = [1, 2, 3,]

var middle = Math.floor(numArray.length / 2);
function findMiddle () {
  if(numArray.length % 2 === 0) {
    console.log("middle nums when array length is even: " + numArray[middle - 1]  + " " + numArray[middle]);
  } else {
    console.log("middle num when array length is odd: " + numArray[middle]);
  }
}

findMiddle();