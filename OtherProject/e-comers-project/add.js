const product = [
    {
        id: 1,
        image:"image1.webp",
        title:"Oinion",
        price: 120,

    },
    {
        id: 1,
        image:"image2.webp",
        title:"Potato",
        price: 120,

    },
    {
        id: 3,
        image:"image3.webp",
        title:"Biens",
        price: 120,

    },
    {
        id: 4,
        image:"image4.webp",
        title:"Bringal",
        price: 120,

    }
]

const categories = [...new Set(product.map((item) =>
    {return item}
    ))]
    let i=0;
    document.getElementById("root").innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;

        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='image' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'> Add to cart</button>"+
           ` </div>
            </div>`
        )

    }).join('')

    let cart = [];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }


    
    function displaycart(a){
    let j = 0;
    let total = 0;

    document.getElementById('counter').innerHTML = cart.length;


    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML= "$"+ 0 +".00"

    }else{
        document.getElementById("cartItem").innerHTML = cart.map((item) =>
        {
            var {image,title,price} = item;
            total = total+price
            document.getElementById("total").innerHTML = "$"+total+".00"
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowimg' src=${image}>
                </div>
                <p style = 'font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+
                (j++) +")'></i></div>"
            )

        }).join('');

    
    } 
}

function delElement(a){
    cart.splice(a,1);
    displaycart()
}