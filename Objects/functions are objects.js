function circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3])