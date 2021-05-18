const split = function split(arr, start, end) {
  return arr.slice(start, end);
};

// const splitArray = function splitArray(arr, idx, m) {
//   if (m === 1) {
//     return 'not sure what to return here yet';
//   }

//   if (arr.length - idx === m) {
//     return 'not sure what to return here either';
//   }

//   if (arr.length - idx > m) {
//     return -1;
//   }

//   for (let i = idx; i < arr.length; i += 1) {
//     const curr = splitArray(arr, i, m - 1);
//     if (curr < 0) {
//       break;
//     }
//   }
// };

const splitArray = function splitArray(arr, idx, m) {
  if (m === 1) {
    return arr[idx];
  }

  const splitArr = split(arr, idx, m);
  for (let i = idx; i < arr.length; i += 1) {
    const curr = splitArray(arr, i, m - 1);
    console.log('curr', curr);
  }

  return splitArr;
};

const arr = [1, 2, 3, 4, 5];
const m = 2;
console.log(splitArray(arr, 0, m));
