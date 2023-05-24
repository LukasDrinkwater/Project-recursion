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

// fibs(8);

// function fibsRec(n) {
//   if (n < 2) {
//     return;
//   } else {
//     return fibsRec(n - 1) + fibsRec(n - 2);
//   }
// }

function fib(n) {
  if (n < 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(21));