let i = 0;
while (i < 10) {
    //if (i === 5) break; // This will break the loop when i is 5
    if (i % 2 === 0) {
        i++;
        continue; // This will skip the rest of the code and go to the next iteration
    }

    console.log("Hello, World!");
    i++;
}   

