// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(cuboidAtt){
        this.length = cuboidAtt.length,
        this.width = cuboidAtt.width,
        this.height = cuboidAtt.height
    }
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height+ this.width * this.height);
    }
}
    
const cuboid1 = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor(cubeAtt) {
        super(cubeAtt)
    }
    volumeCube() {
        return this.length * this.width * this.height;
    }

    surfaceAreaCube() {
        return 2 * (this.length * this.width + this.length * this.height+ this.width * this.height);

    }
};

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

console.log(cube.volume());
console.log(cube.surfaceArea());

class ConeMaker extends CuboidMaker1 {
    constructor(coneAtt) {
        super(coneAtt);
        this.radius = coneAtt.radius
    }
    volume() {
        return Math.PI * (Math.pow(this.radius, 2) * (this.height / 3));
    };
    surfaceArea() {
        return Math.PI * this.radius * (this.radius + Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.radius, 2)))
    }
};

const cone = new ConeMaker ({
    height: 2,
    radius: 3
});

console.log(cone.volume());
console.log(cone.surfaceArea());
