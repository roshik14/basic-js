const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  
  for (let i = 0; i < matrix.length; i++) {
   for (let j = 0; j < matrix[i].length; j++) {
     if (matrix[i][j] === '^^') {
       counter += 1;
     }
   }
  }
  if (counter === 0) return 0;
  return counter;
  // remove line with error and write your code here
};
