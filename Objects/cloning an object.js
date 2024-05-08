const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    }
}

/*
const another = {}
for (let key in circle)
    another[key] = circle[key];
*/

const another = Object.assign({}, circle);
const another1 = Object.assign({color: 'yellow'}, circle);

const another2 = {...circle};

console.log(another, another1, another2)

