function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.slice(1);
    const myObj = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }

    return myObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());