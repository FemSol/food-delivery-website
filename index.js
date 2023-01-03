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
    })
}