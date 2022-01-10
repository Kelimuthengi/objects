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

// cloth
var des1 = document.getElementById('des1')
des1.innerHTML = item1.desc;

var price1 = document.getElementById('btn1')
price1.innerHTML = item1.price

var name1 = document.getElementById('name1')
name1.innerHTML = item1.name


// furniture
var des2 = document.getElementById('des2');
des2.innerHTML = item2.desc
var price2 = document.getElementById('btn2')
price2.innerHTML = item2.price

var name2 = document.getElementById('name2')
name2.innerHTML = item2.name




// laptop
var des3 = document.getElementById('des3');
des3.innerHTML = item3.desc
var price3 = document.getElementById('btn3')
price3.innerHTML = item3.price

var name3 = document.getElementById('name3')
name3.innerHTML = item3.name



// tesla
var des4 = document.getElementById('des4');
des4.innerHTML = item4.desc

var price4 = document.getElementById('btn4')
price4.innerHTML = item4.price

var name4 = document.getElementById('name4')
name4.innerHTML = item4.name


let loadStuff = document.querySelector('.item1');
loadStuff.addEventListener('click', ()=> {
    window.location.href = "productdetail.html" + "?" + item1.pId;
});

let loadStuff1 = document.querySelector('.item2');

loadStuff1.addEventListener('click', () => {
    window.location.href = "productdetail.html" + "?" + item2.pId
})

let loadStuff2 = document.querySelector('.item3');

loadStuff2.addEventListener('click', () => {
    window.location.href = "productdetail.html" + "?" + item3.pId
})

let loadStuff3 = document.querySelector('.item4');

loadStuff3.addEventListener('click', () => {
    window.location.href = "productdetail.html" + "?" + item4.pId
})