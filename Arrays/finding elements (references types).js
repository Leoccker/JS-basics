const courses = [
    {id: 1, n: 'a'},
    {id: 2, n: 'b'},
]

const course = courses.find(function(course){
    return course.name = 'a';
})
console.log(course);

const course2 = courses.findIndex(function(course){
    return course.name = 'a';
})
console.log(course2);
