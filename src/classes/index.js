class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`The paint you selected is : ${this.color}`);
  }
}

const rect = new Rectangle(20, 30, "black");
const area = rect.area();
console.log(area);

//Few examples of existing classes

const now = new Date();
console.log(now.getTime());

const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name"));
