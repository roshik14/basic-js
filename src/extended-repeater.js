const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string' || typeof options.addition !== 'string') {
    str = String(str);
    options.addition = String(options.addition);
  }
  function addRep(string = '') {
    let arr = [];
    if (options.additionRepeatTimes === undefined) {
       arr.push(string);
    } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        arr.push(string);
      }
    }
    return arr;
  }
  function sepAdd(string = '|') {
    return addRep(options.addition).join(string);
  }
  function concat(string) {
    const additionSep = sepAdd(options.additionSeparator);
    if (additionSep === 'undefined') {
      return string;
    }
    return string + additionSep;
  }
  function lastSep(string = '+') {
    let newArr = [];
    if (options.repeatTimes === undefined) {
      newArr.push(concat(str));
    } else {
      for (let i = 0; i < options.repeatTimes; i++) {
        newArr.push(concat(str));
      }
    }
    return newArr.join(string);
  }
  return lastSep(options.separator);


};
