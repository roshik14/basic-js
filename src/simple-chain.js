const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: Array.from(this),
  getLength() {
      return res.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
       this.res.push('( )');
    }
    if (value === 'null') {
      this.res.push('(' + value + ')');
    }
    else {
    this.res.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 0 || position > this.res.length) {
      this.res.splice(0, this.res.length);
      throw new Error('position is not correct');
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
   const cur = this.res.join('~~');
   this.res.splice(0, this.res.length);
   return cur;
  }
};

module.exports = chainMaker;
