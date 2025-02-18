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
let title=document.getElementById('title');
title.innerText='Shopping Cart'
title.style.textAlign='center'
title.style.textShadow='3px 3px 3px  orange'


let container = document.querySelector("#container");


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
    //h3 tag
    let popup1=true;
    function showpopup(){
    let popup=document.createElement('h3');
    if(popup1){
    popup.innerText=`${val.productName} added to cart`
    popup.classList.add('added')
    }
    else{
        popup.innerText=`${val.productName} removed from cart`
        popup.classList.remove('added')
    }
    document.body.appendChild(popup)
    popup.style.position="fixed"
    popup.style.top="50%"
    popup.style.left="50%"
    popup.style.transform="translate(-50%,-50%)"
    popup.style.backgroundColor="grey"
    popup.style.zIndex="999"
    popup.style.padding="20px"
    popup.style.boxShadow="0px 0px 10px rgba(0,0,0,0.2)"
  popup.classList.toggle('added')
    setTimeout(()=>{
        popup.remove();
    },2000)
   
}
    //button
    let button = document.createElement('button');
    button.setAttribute('class','btn')
    button.innerText = val.productButton;
    productItem.appendChild(button);
    button.style.fontSize='15px';
    button.style.fontWeight='bold';
button.addEventListener('click',(event)=>{
    showpopup();
    popup1.classList.toggle('active')
})

})

