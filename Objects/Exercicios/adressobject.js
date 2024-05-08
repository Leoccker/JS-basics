adress = {
    street: "mia pika",
    city: "rolandia",
    zipcode: 69696969
}

function ShowAdress(adress) {
    for (let key in adress) {
        console.log(key, adress[key]);
    }
}
ShowAdress(adress);
