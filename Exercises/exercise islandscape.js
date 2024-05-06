function isLandScape(width, height) {
    return (width > height) ? "yes" : "no";
}
ILS = isLandScape(550, 500);
console.log(ILS);
