function Plant() {
  this.height = 0;
}
Plant.prototype.increaseHeight = function(growth) {
  this.height += growth;
};
Plant.prototype.decreaseHeight = function(diminution) {
  this.height -= diminution;
};

function Tree() {
  this.branches = 0;
}
Tree.prototype = new Plant();

Tree.prototype.grow = function(delta) {
  // first check if we're crossing a 10-inch boundary
  // if so, add 1 to branches
  if (parseInt(this.height / 10) !== parseInt((this.height + delta) / 10)) {
    this.branches += 1;
  }
  this.increaseHeight(delta);
  console.log("new height:",this.height);
  console.log("branches =",this.branches);
};
Tree.prototype.trim = function(delta) {
  console.log("trimming");
  this.decreaseHeight(delta);
  this.branches -= 1;
};

var PearTree = new Tree();
var OakTree = new Tree();





var i = 0;
var intervalID = window.setInterval(callback, 100);
console.log("finished");  // why doesn't this execute?


function callback() {
  var outputEl = document.getElementById("outputField");

  PearTree.grow(3);
  OakTree.grow(7);
  if ((i + 1) % 10 === 0) {  // every tenth time (i = 9, i = 19, i = 29)
    PearTree.trim(3);
    OakTree.trim(7);
  }
  outputEl.innerHTML = `<p>After ${i + 1} iterations,</p>`;
  outputEl.innerHTML += `<p>Pear tree is now ${PearTree.height}cm and has ${PearTree.branches} branches</p>`;
  outputEl.innerHTML += `<p>Oak tree is now ${OakTree.height}cm and has ${OakTree.branches} branches</p>`;

  i++;
  if (i === 30) {
    window.clearInterval(intervalID);
  }
}