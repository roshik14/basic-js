const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('argument is not an array');
  let transformedArr = [];
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardNext || arr[i] === discardPrev
        || arr[i] === doubleNext || arr[i] === doublePrev ) continue;

    if (arr[i - 1] === discardNext || arr[ + 1] === discardPrev) {
      continue;
    } else if (arr[i - 1] === doubleNext) {
      if (arr[i + 1] === doublePrev) {
        transformedArr.push(arr[i], arr[i], arr[i]);
        continue;
      } else if (arr[i + 1] === discardPrev) {
        transformedArr.push(arr[i]);
        continue;
      } else {
        transformedArr.push(arr[i], arr[i]);
        continue;
      }

    } else if (arr[i + 1] === discardPrev || arr[i - 1] === discardNext) {
      continue;

    } else if (arr[i + 1] === doublePrev) {
      if (arr[i - 1] === discardNext) {
      continue;
      }
      transformedArr.push(arr[i], arr[i]);
      continue;
    } else {
    transformedArr.push(arr[i]);
    }
  }
  console.log(arr);
  return transformedArr;
};
