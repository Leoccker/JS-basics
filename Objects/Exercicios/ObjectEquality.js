function Address(street, city, zipcode) {
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

let Address1 = new Address('Rua pika', "Rolandia", 6969); 
let Address2 = new Address('Rua pika', "Rolandia", 6969); 

function areEqual(Address1, Address2) {
    if (Address1.street === Address2.street && Address1.city === Address2.city && Address1.zipcode === Address2.zipcode)
        return console.log("objetos iguals");
    else
        return console.log("objetos diferentes");
}

areEqual(Address1, Address2); 

function areSame(Address1, Address2) {
    return Address1 === Address2;
}

console.log(areSame(Address1, Address2)); 