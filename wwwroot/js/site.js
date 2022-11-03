// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



//swag

class CartItem {
    constructor(Title, amount, Price) {
        this.Title = Title;
        this.amount = amount;
        this.Price = Price;
    }
}

let cart = [];

let total = 0;

function toCart(id) {
    let t = document.getElementById(`Title-${id}`).value;
    let a = document.getElementById(`amount-${id}`).value;
    let p = document.getElementById(`Price-${id}`).value;
    
    cart.push(new CartItem(t, a, p));

    console.log(`added ${a} x ${t}`)
    document.getElementById(`amount-${id}`).value = '';
}

function getTotal() {
    total = 0;
    document.getElementById("Printer").innerHTML = '';
    var head = document.createElement("h4");
    head.innerHTML = `Your Cart`;
    document.getElementById("Printer").appendChild(head);

    cart.forEach((element) => {
        var item = document.createElement("div");
        let tempTotal = element.amount * element.Price;
        item.innerHTML = `${element.amount} x ${element.Title} = ${tempTotal}`;
        total += tempTotal;
        console.log(`temptotal ${tempTotal}`)
        document.getElementById("Printer").appendChild(item);
    });

    var hr = document.createElement("hr");
    document.getElementById("Printer").appendChild(hr);
    var totalString = document.createElement("p");
    total = total.toFixed(2);
    totalString.innerHTML = `Your total is $${total}`;
    document.getElementById("Printer").appendChild(totalString);
    var hr2 = document.createElement("hr");
    document.getElementById("Printer").appendChild(hr2);

    //document.getElementById("Printer").style.display = "show";
    cart.splice(0, cart.length);
}
