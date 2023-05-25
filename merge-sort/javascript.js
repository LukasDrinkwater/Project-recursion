// let array = [5,2,1,3,6,4]

let array = [4, 8, 6, 2, 1, 7, 5, 3];

function mergeSortRec(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(mergeSortRec(leftArray), mergeSortRec(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  //if both arrays have something in ten it will keep executing
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSortRec(array));
