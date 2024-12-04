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
