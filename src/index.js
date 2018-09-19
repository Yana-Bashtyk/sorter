class Sorter {
  constructor() {
    this.instanceSorter = [];
  }

  add(element) {
    this.instanceSorter.push(element);
  }

  at(index) {
    return this.instanceSorter[index];
  }

  get length() {
    return this.instanceSorter.length;
  }

  toArray() {
    return this.instanceSorter;
  }

  sort(indices) {
    var arrNew = [];
    
    for (var i=0; i < indices.length; i++){
      arrNew.push(this.instanceSorter[indices[i]]);
      
    }
    if(!this.compareFunction){
      arrNew.sort(function (a, b) {
      return a - b;
      });
    }
    else {
      arrNew.sort(this.compareFunction);
    }
    
    indices.sort(function(x, y) {
      return x - y;
    });
    for (var k=0; k < indices.length; k++) {
      this.instanceSorter.splice(indices[k], 1, arrNew[k]);
    }
    return this.instanceSorter;
  }

  setComparator(compareFunction){
    return this.compareFunction = compareFunction;
  };
};

module.exports = Sorter;