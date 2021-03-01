const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('argument is not an array');
  const transformedArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next' || arr[i - 1] === '--discard-next') {
      continue;
    }

    if (arr[i] === '--double-next') {
      if (arr[i + 1] === undefined || arr[i + 2] === undefined) {
        continue;
      }
      if (arr[i + 2] == '--discard-prev') {
        continue;
      }
      transformedArr.push(arr[i + 1]);
      continue;
    }

    if (arr[i] === '--discard-prev') {
      continue;
    }

    if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--double-next') {
        transformedArr.push(arr[i - 1]);
        continue;
      }
      if( arr[i - 1] === undefined) {
        continue;
      }
      if( arr[i - 2] === '--discard-next') {
        continue;
      }
      transformedArr.push(arr[i -1], arr[i - 1]);
      continue;
    }
    transformedArr.push(arr[i]);
  }
  return transformedArr;
};
