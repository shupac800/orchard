describe("The specification for the orchard app", function() {
  it("should have a Plant function", function() {
    expect(Plant).toBeDefined();
  });
  it("should have a Tree function", function() {
    expect(Tree).toBeDefined();
  });
  it("should have a function named increaseHeight on the prototype of Plant", function() {
    expect(Plant.increaseHeight).toBeDefined();
  });
  it("should have a function named decreaseHeight on the prototype of Plant", function() {
    expect(Plant.decreaseHeight).toBeDefined();
  });
  it("should have a property height on Plant", function() {
    expect(Plant.height).toBeDefined();
  });
  it("should have a function named grow on the prototype of Plant", function() {
    expect(Plant.grow).toBeDefined();
  });
  it("should have a function named trim on the prototype of Plant", function() {
    expect(Plant.trim).toBeDefined();
  });
  it("should subtract the trim argument from tree height", function() {
    var prevHeight = Tree.height;
    Tree.trim(2);
    expect(Tree.height).toBe(prevHeight - 2);
  });
  it("should subtract a branch when trim is invoked on Tree", function() {
    var prevBranches = Tree.branches;
    Tree.trim();
    expect(Tree.branches).toBe(prevBranches - 1);
  });
  it("should add the grow argument to tree height", function() {
    var prevHeight = Tree.height;
    Tree.grow(3);
    expect(Tree.height).toBe(prevHeight + 3);
  });
});