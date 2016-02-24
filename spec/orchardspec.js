describe("The orchard app", function() {
  it("should have a Plant function", function() {
    expect(Plant).toBeDefined();
  });
  it("should have a Tree function", function() {
    expect(Tree).toBeDefined();
  });
  it("should have a function named increaseHeight on the prototype of Plant", function() {
    expect(Plant.prototype.increaseHeight).toBeDefined();
  });
  it("should have a function named decreaseHeight on the prototype of Plant", function() {
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  });
  it("should have a property height on Plant", function() {
    // can't do expect(Plant.height).toBeDefined() because
    // Plant function doesn't run until it's called
    var p = new Plant();
    expect(p.height).toBeDefined();
  });
  it("should have a function named grow on the prototype of Tree", function() {
    expect(Tree.prototype.grow).toBeDefined();
  });
  it("should have a function named trim on the prototype of Tree", function() {
    expect(Tree.prototype.trim).toBeDefined();
  });
  it("should subtract the trim argument from tree height", function() {
    var t = new Tree();
    t.height = 10;
    t.trim(2);
    expect(t.height).toBe(8);
  });
  it("should subtract a branch when trim is invoked on Tree", function() {
    var t = new Tree();
    t.branches = 5;
    t.trim(0);  // argument doesn't matter
    expect(t.branches).toBe(4);
  });
  it("should add the grow argument to tree height", function() {
    var t = new Tree();
    t.height = 10;
    t.grow(3);
    expect(t.height).toBe(13);
  });
});