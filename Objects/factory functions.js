// factory function
function createCircle(radius,) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

circle2 = createCircle(2);
console.log(circle2);