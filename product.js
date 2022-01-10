var product = decodeURIComponent(window.location.search);

var newProduct = product.substring(1);
// var newProduct1 = product.substring(2);
// var newProduct2 = product.substring(3);
// var newProduct3 = product.substring(4)
console.log(newProduct);
// console.log(newProduct1);
// console.log(newProduct2);
// console.log(newProduct3)


var item1 = {
    name: "cloth",
    price: 1000,
    desc: "nice cloth",
    available: "In stock",
    pId: "ddfjfj"
};

var item2 = {
    name: "furniture",
    price: 2000,
    desc: "nice piece of wood",
    available: "Out of stock",
    pId: "jdvchdve"
};

var item3 = {
    name: "laptop",
    price: 3000,
    desc: " 8gb ram",
    available: "In stock",
    pId: "edjhcjhdcvqe"
};

var item4 = {
    name: "car",
    price: 30000,
    desc: "red in color 260kph maximum speed",
    available: "In stock",
    pId: "qhvdqhwgcjegh"
};

if(newProduct == item1.pId ) {
    document.getElementById('btn1').innerHTML = item1.price
    document.getElementById('new-name').innerHTML = item1.name
    document.getElementById('new-desc').innerHTML = item1.desc
    let newImage = document.getElementById("cloth");
    newImage.setAttribute('src',"/images/clothes.jpg");
}else if (newProduct == item2.pId) {
    document.getElementById('btn1').innerHTML = item2.price
    document.getElementById('new-name').innerHTML = item2.name
    document.getElementById('new-desc').innerHTML = item2.desc
    let newImage = document.getElementById("cloth");
    newImage.setAttribute('src',"/images/Furniture.jpg");
}else if (newProduct == item3.pId) {
    document.getElementById('btn1').innerHTML = item3.price
    document.getElementById('new-name').innerHTML = item3.name
    document.getElementById('new-desc').innerHTML = item3.desc
    let newImage = document.getElementById("cloth");
    newImage.setAttribute('src',"/images/lapy.jpg");
    
}else{
    document.getElementById('btn1').innerHTML = item4.price
    document.getElementById('new-name').innerHTML = item4.name
    document.getElementById('new-desc').innerHTML = item4.desc
    let newImage = document.getElementById("cloth");
    newImage.setAttribute('src',"/images/tesla.jpg");
}