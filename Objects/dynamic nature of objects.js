const circle = {
    radius: 1

}
circle.color = "yellow"
circle.draw = function() {}

delete circle.draw


console.log(circle);