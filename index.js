import { foodItem } from './fooditem.js'

function displayItems() {
    let biryani = document.getElementById('biryani')
    let chicken = document.getElementById('chicken')
    let paneer = document.getElementById('paneer')
    let vegetable = document.getElementById('vegetable')
    let chinese = document.getElementById('chinese')
    let southIndian = document.getElementById('south-indian')

    const biryaniData = foodItem.filter(item => item.category == 'biryani')
    console.log(biryaniData)
    const chickenData = foodItem.filter(item => item.category == 'chicken')
    console.log(chickenData)
    const paneerData = foodItem.filter(item => item.category == 'paneer')
    console.log(paneerData)
    const vegetableData = foodItem.filter(item => item.category == 'vegetable')
    console.log(vegetableData)
    const chineseData = foodItem.filter(item => item.category == 'chinese')
    console.log(chineseData)
    const southIndianData = foodItem.filter(item => item.category == 'south-indian')
    console.log(southIndianData)

    biryaniData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        biryani.appendChild(itemCard);
    })

    chickenData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        chicken.appendChild(itemCard);
    })

    paneerData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        paneer.appendChild(itemCard);
    })

    vegetableData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        vegetable.appendChild(itemCard);
    })

    chineseData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        chinese.appendChild(itemCard);
    })

    southIndianData.map(item => {
        let itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        let cardTop = document.createElement('div')
        cardTop.setAttribute('id', 'card-top');

        let star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating')
        star.innerText = ' ' + item.rating

        let heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = ' ' + item.rating;

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement('img');
        img.src = item.img;

        let itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : PKR' + item.price;

        itemCard.appendChild(cardTop)
        itemCard.appendChild(img)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)

        southIndian.appendChild(itemCard);
    })
}

displayItems();

const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values];

function categoryLists() {
    let categoryList = document.getElementById('category-list');
    categoryListData.map(item => {
        let listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card')

        let listImg = document.createElement('img');
        listImg.src = item.img;

        let listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#' + item.category);

        listCard.appendChild(listImg)
        listCard.appendChild(listName)

        let cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard)
    })
}

categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

let cartData = [];

function addToCart() {
    console.log(this.parentNode.nextSibling.nextSibling);
    let itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    let itemObj = foodItem.find(element => element.name == itemToAdd);
    console.log(itemObj);
    let index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
        console.log(cartData);
    } else if (index > -1) {
        alert("Added to Cart")
    }

    document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' items';
    // document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
    totalAmount();
    cartItems();
}

function cartItems() {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    cartData.map(item => {
        let tableRow = document.createElement('tr');

        let rowData1 = document.createElement('td');
        let img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        let rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        let rowData3 = document.createElement('td');
        let btn1 = document.createElement('button')
        btn1.setAttribute('class', 'decrase-item')
        btn1.innerHTML = '-';
        let span = document.createElement('span')
        span.innerText = item.quantity;
        let btn2 = document.createElement('button')
        btn2.setAttribute('class', "increase-item")
        btn2.innerHTML = '+';

        rowData3.appendChild(btn1)
        rowData3.appendChild(span)
        rowData3.appendChild(btn2)

        let rowData4 = document.createElement('td')
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow)
    })

    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })
    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem);
    })
}

let currPrice = 0

function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    let incObj = cartData.find(element => element.name = itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price *
        (incObj.quantity - 1)) / (incObj.quantity - 1);

    incObj.price = currPrice * incObj.quantity;
    totalAmount();
    cartItems();
}

let flag = false

function decrementItem() {
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToDec);
    let ind = cartData.indexOf(decObj)
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj * price(decObj.quantity - 1)) / decObj.quantity
    } else {
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + 'items';
        document.getElementById('m-cart-plus').innerHTML = ' ' + cartData.length;

        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            // document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in the cart")
        }
    }
    totalAmount();
    cartItems()
}

function totalAmount() {
    let sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : PKR ' + sum;
}

document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
    }
}