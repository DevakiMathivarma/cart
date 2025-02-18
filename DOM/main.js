const products = [{ id: 1, productName: "Wall Clock", productDes: "Wear it comfort", productPrice: 'Price: 2500rs', productButton: "Shop Now", productImage: 'clock.jpg' },
{ id: 1, productName: "Iron", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'iron.jpg' },
{ id: 1, productName: "Jeans", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'jean.jpg' },
{ id: 1, productName: "Mobile Phone", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'mobile.jpg' },
{ id: 1, productName: "T-shirt", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'shirt.jpg' },
{ id: 1, productName: "Shoes", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'shoe.jpg' },
{ id: 1, productName: "Sunglass", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'sunglas.jpg' },
{ id: 1, productName: "Kurti", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'kurti.PNG' },
{ id: 1, productName: "Alia-Cut Kurtis", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'aliacut.PNG' },
{ id: 1, productName: "Short Kurti", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'shortkurti.PNG' },
{ id: 1, productName: "Saree", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'saree.PNG' },
{ id: 1, productName: "Kids Shirt", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'kids.PNG' },
{ id: 1, productName: "Blue Jeans", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'bluejeans.PNG' },
{ id: 1, productName: "Charger", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'charger.PNG' },
{ id: 1, productName: "Head Set", productDes: "Wear it comfort", productPrice: 'Price  :   2500rs', productButton: "Shop Now", productImage: 'headset.PNG' }

]
let title = document.getElementById('title');
title.innerText = 'Shopping Cart'
title.style.textAlign = 'center'
title.style.textShadow = '3px 3px 3px  orange'


let container = document.querySelector("#container");

let cart_arr=[];
let cart = document.getElementById('cart');
let totalcount = 0;
products.map((val) => {
    let productItem = document.createElement("div");
    productItem.setAttribute('id', 'products')
    container.appendChild(productItem);

    //image tag
    let image = document.createElement('img');
    image.src = val.productImage;
    productItem.appendChild(image);
    //h2 tag
    let heading = document.createElement('h2');
    heading.innerText = val.productName;
    productItem.appendChild(heading);
    //p tag
    let Description = document.createElement('p');
    Description.innerText = val.productDes;
    productItem.appendChild(Description);
    //h5 tag for price
    let price = document.createElement('h5');
    price.innerText = val.productPrice;
    productItem.appendChild(price);
    price.style.fontSize = '15px'

    //popup
   
    function showpopup() {
        let popup = document.createElement('h3');
        popup.innerText = `${val.productName} added to cart`
        productItem.appendChild(popup)
        popup.style.position = "fixed"
        popup.style.top = "50%"
        popup.style.left = "50%"
        popup.style.transform = "translate(-50%,-50%)"
        popup.style.backgroundColor = "grey"
        popup.style.zIndex = "999"
        popup.style.padding = "20px"
        popup.style.width="200px"
        setTimeout(() => {
            popup.remove();
        }, 2000)
    }
    //quantity

    let quantity = document.createElement('div');
    productItem.appendChild(quantity)
    quantity.setAttribute('class', 'quantity')
    let quantity1 = document.createElement('div');
    quantity.appendChild(quantity1)
    quantity1.setAttribute('class', 'add1')
    let qcontent = document.createElement('h5');
    qcontent.innerText = "Quantity:"
    quantity1.appendChild(qcontent)
    let quantity2 = document.createElement('div');
    quantity.appendChild(quantity2)
    quantity2.setAttribute('class', 'add')
    let count = 0;
    let qbutton = document.createElement('button');
    qbutton.innerText = "+"
    qbutton.addEventListener('click', (event) => {
        count++;
        span.innerText = count;
        totalcount++;
        cart.innerText=totalcount;

    })
    quantity2.appendChild(qbutton)
    let span = document.createElement('span');
    span.innerText = "0";
    quantity2.appendChild(span)
    let qbutton1 = document.createElement('button');
    qbutton1.innerText = "-"
    qbutton1.addEventListener('click', (event) => {
        count>0?count--:count;
        span.innerText = count;
        totalcount>0?totalcount--:totalcount;
        cart.innerText=totalcount;

    })
    quantity2.appendChild(qbutton1)
    //button
    let button = document.createElement('button');
    button.setAttribute('class', 'btn')
    button.innerText = val.productButton;
    productItem.appendChild(button);
    button.style.fontSize = '15px';
    button.style.fontWeight = 'bold';
    button.addEventListener('click', (event) => {
        showpopup();
        cart_arr.push(val);
        console.log(cart_arr)
        totalcount++;
        cart.innerText = totalcount;
       

    })
    


})



