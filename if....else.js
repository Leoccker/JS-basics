/*
if (condition) {
    // block of code to be executed if the condition is true
} else if (anothercondition) {
    // block of code to be executed if the condition is false
} else if (yetanothercondition) {
    // block of code to be executed if the condition is false
} else {
    // block of code to be executed if the condition is false
}
*/

let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour < 22) {
    console.log("Good evening");
} else {
    console.log("Good night");
}
