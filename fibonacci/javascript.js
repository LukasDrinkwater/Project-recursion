function fibs(num) {
  let fibNumArray = [];

  for (let i = 0; i <= num; i++) {
    console.log(i);
    if (i === 0 || i === 1) {
      fibNumArray.push(i);
    } else {
      fibNumArray.push(fibNumArray[i - 1] + fibNumArray[i - 2]);
    }
  }
  console.log(fibNumArray);
}

function fibsRec(n, fibArray = [0, 1]) {
  if (n === 1) {
    return [0];
  } else if (fibArray.length >= n) {
    return fibArray;
  }
  console.log(fibArray);
  // console.log(fibArray.a);
  return fibsRec(n, [...fibArray, fibArray.at(-1) + fibArray.at(-2)]);
  //fibArray is getting passed back in then its adding fibArray.at(-1) + fibArray.at(-2)
  //to the array
}

console.log(fibsRec(8));
