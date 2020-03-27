// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(a, b, c) {
    this.length = a;
    this.width  = b;
    this.height = c;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid2 = new CuboidMaker2(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
    constructor(x) {
        super(x, x, x);
        this.side = x;
    }
    // Technically since a cube IS a cuboid, the given methods from cuboid still apply. But here's this anyways I guess
    volume() {
        return Math.pow(this.side, 3);
    }
    surfaceArea() {
        return 6 * Math.pow(this.side, 2);
    }
}

const cube = new CubeMaker(3);
console.log(cube.volume());
console.log(cube.surfaceArea());