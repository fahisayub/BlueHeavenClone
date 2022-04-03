// ----------------------related products----------------------------//
var rpcontainer = document.querySelector("#rpcontainer")
var readytoShip = [
    {
        image_url: "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg",
        productName: 'Foundation',
        price: "Rs 699" ,           
        brand: '✅ Mansi Beauty Zone',
        location: 'Madurai, Tamil Nadu',
        call: '☏ CALL 09932654987'
    },
    {
        image_url: 'https://5.imimg.com/data5/ANDROID/Default/2021/2/AE/QR/RK/123514038/img-20210220-wa0143-jpg-250x250.jpg',
        productName: 'Mac Studio Foundation',
        price: "Rs 548" ,          
        brand: '✅ Dream Shades',
        location: 'Pattanakad, Alappuzha, Kerala',
        call: '☏ CALL 08204779941'
    }
    ,
    {
        image_url: 'https://5.imimg.com/data5/ECOM/Default/2022/3/GC/CG/RT/59895549/1-2-500x500.jpg',
        productName: 'Beaded Beauty -multicolor',
        price: "Rs 1199", 
        brand: '✅Indus Trade Links Private Limited',
        location: 'Kirti Nagar, New Delhi, Delhi',
        call: '☏ CALL 08204787665'
    },
    {
        image_url: 'https://5.imimg.com/data5/ECOM/Default/2022/2/VI/VR/DK/147540438/product-image-1733246360-500x500.jpg',
        productName: 'Hot Matte Lipstick P-Shape',
        price: "Rs 398",
        brand: '✅ Garima Collection',
        location: 'Kirti Nagar, New Delhi, Delhi',
        call: '☏ CALL 08204722351'
    }];

readytoShip.map(function (elem) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.setAttribute('class','rpimg')
    img.src = elem.image_url

    var name = document.createElement("h3")
    name.setAttribute("id", "rpblue")
    name.setAttribute('class','rpname')
    name.innerText = elem.productName

    var div = document.createElement("div")
    div.setAttribute("id", "pri")

    var price = document.createElement("h4")
    price.innerText = elem.price
    var p = document.createElement("p")
    p.innerText = "/piece"
    p.style.fontSize = "20px"
    p.style.color = "gray"
    div.append(price, p)

    var brand = document.createElement("h3")
    brand.setAttribute('class','rpname')
    brand.innerText = elem.brand
    // brand.style.

    var loco = document.createElement("p")
    loco.innerText= elem.location

    var call = document.createElement("h3")
    call.setAttribute('class','rpname')
    call.innerText= elem.call

    var btn = document.createElement("button")
    btn.setAttribute('class','csbtn')
    btn.innerText= 'Contact Supplier'
    btn.style.backgroundColor = "teal"

    box.append(img, name, div, brand,loco,call, btn)
    rpcontainer.append(box)
}); 

// -------------------Tellusform-------------------------//

document.querySelector("form").addEventListener("submit", requirement)
var data = JSON.parse(localStorage.getItem("tellData"))||[]
function requirement(){
    event.preventDefault()
    alert("Thank You! For showing Interest in our Product **We will get to you soon 😀**")
    var tellObj = {
        want: document.querySelector("#want").value,
        name: document.querySelector("#name").value,
        quantity: document.querySelector("#qty").value,
        brief: document.querySelector("#brief").value
    }
    data.push(tellObj)
    localStorage.setItem("tellData", JSON.stringify(data))
}

//-------------------------ready to ship--------------------------//
var rtp= [
    {
        image_url:"https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg" ,
        productName :'Foundation' ,
        price:'Rs150/unit' ,
        brand:'Mansi Beauty Zone' ,
        location:'Madurai, Tamil Nadu' ,
    },
    {
        image_url:'https://5.imimg.com/data5/ANDROID/Default/2021/2/AE/QR/RK/123514038/img-20210220-wa0143-jpg-250x250.jpg' ,
        productName :'Mac Studio Foundation' ,
        price:'Rs390/unit',
        brand:'Dream Shades' ,
        location:'Pattanakad, Alappuzha, Kerala' ,
    }
    ,
    {
    image_url:'https://5.imimg.com/data5/ECOM/Default/2022/3/GC/CG/RT/59895549/1-2-500x500.jpg' ,
    productName :'Beaded Beauty -multicolor' ,
    price:'Rs1139/unit',
    brand:'Indus Trade Links Private Limited' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
}
,{
    image_url:'https://5.imimg.com/data5/ECOM/Default/2022/2/ZP/EF/XV/50366780/img-20210910-wa0213-500x500.jpg' ,
    productName :'Aglonima Lipstick' ,
    price:'Rs100/unit',
    brand:'EWSELLS CHARITY STORE' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
}
,{
    image_url:'https://5.imimg.com/data5/ECOM/Default/2021/11/QO/YM/CD/81412824/c1157078-1-500x500.jpg' ,
    productName :'Color Glam London Lipsticks' ,
    price: 'Rs299/unit',
    brand:'Worldshopon' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
}
,{
    image_url:'https://5.imimg.com/data5/ECOM/Default/2022/3/OR/CK/RV/139286493/ezgif-5-2bc60a5c81-500x500.jpg' ,
    productName :'QIBEST Matte Lipstick-Velvet' ,
    price: 'Rs500/unit',
    brand:'Aadhyacollections' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
}
,{
    image_url:'https://5.imimg.com/data5/ECOM/Default/2022/3/AY/DC/WE/129740345/product-image-1879821350-500x500.jpg' ,
    productName :'QIBEST Liquid Lipstick' ,
    price:'Rs599/unit',
    brand:'Beautify Collections India' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
}
,{
    image_url:'https://5.imimg.com/data5/ECOM/Default/2022/2/VI/VR/DK/147540438/product-image-1733246360-500x500.jpg' ,
    productName :'Hot Matte Lipstick P-Shape' ,
    price:'Rs288/unit',
    brand:'Garima Collection' ,
    location:'Kirti Nagar, New Delhi, Delhi' ,
},
];

rtp.map(function(elem){

var box=document.createElement("div");


var image=document.createElement("img");
image.src=elem.image_url;
image.setAttribute("class","can1rtp");
var name=document.createElement("h4");
name.textContent=elem.productName;
name.setAttribute("class","can2rtp");
var price=document.createElement("h2");
price.textContent=elem.price;
price.setAttribute("class","can3rtp");
var btn = document.createElement("button")
    btn.innerText= 'Buy Now'
    btn.setAttribute("class","canbtnrtp");
    btn.addEventListener("click", function(){
        addToCart(elem)
    })
var brand=document.createElement("h5");
brand.textContent=elem.brand;
brand.setAttribute("class","can4rtp");

box.append(image,name,price,btn,brand);


document.querySelector("#tankrtp").append(box)
});
shipdata = []
function addToCart(elem){
    window.location.href="/pages/CheckoutPage.html"
    shipdata.push(elem)
    console.log(elem)
    localStorage.setItem("shipping",JSON.stringify(shipdata))
}

//------------------------Related categories--------------------------//

var relCatrc=[
    {
        image_url:'https://3.imimg.com/data3/EP/VJ/GLADMIN-105850/cosmetics-250x250.jpg' ,
        category :'Cosmetics' ,
        
    },
    {
        image_url:'https://5.imimg.com/data5/JM/OT/KQ/GLADMIN-68087/cosmetic-third-party-manufacturing-250x250.jpg' ,
        category :'Cosmetic Third Party Manufacturing' ,
        
    },
    {
        image_url:'https://3.imimg.com/data3/TT/GW/GLADMIN-21908/beauty-cosmetics-250x250.jpg' ,
        category :'Beauty Cosmetics' ,
        
    },
    {
        image_url:'https://5.imimg.com/data5/ZB/JY/DJ/GLADMIN-68087/matte-lipstick-250x250.png' ,
        category :'Matte Lipstick' ,
        
    },
    {
        image_url:'https://3.imimg.com/data3/KG/HH/GLADMIN-11601/lip-balm-250x250.jpg' ,
        category :'Lip Balm' ,
        
    },
    {
        image_url:'https://3.imimg.com/data3/IF/CY/GLADMIN-108453/liquid-lipstick-250x250.jpg' ,
        category :'Liquid Lipstick' ,
        
    },
]
relCatrc.map(function(elem){
    var box=document.createElement("div");
    var image=document.createElement("img");
  image.src=elem.image_url;
  image.setAttribute("class","can1rc");
    
    var name=document.createElement("h2");
    name.textContent=elem.category;
    name.setAttribute("class","can2rc");
    box.append(image,name);
    document.querySelector("#mainrc").append(box);
    
});

//-------------------------featured reccomendation-------------------------------//

var Fcontainer = document.querySelector("#Fcontainer")
    var readytoShip = [
        {
            image_url: "https://5.imimg.com/data5/SELLER/Default/2021/12/KG/WS/SD/742923/unique-bottle-mop-250x250.png",
            productName: 'Bottle Mop',
            price: "Rs 140" ,           
            brand: '✅ Mansi Beauty Zone',
            location: 'Madurai, Tamil Nadu',
            call: '☏ CALL 09932654987'
        },
        {
            image_url: 'https://5.imimg.com/data5/SELLER/Default/2022/1/CA/EX/VM/52181736/miss-rose-hot-and-soft-matte-lipstick-250x250.jpeg',
            productName: 'Rose and Soft Matte Lipstick',
            price: "Rs 54" ,          
            brand: '✅ Dream Shades',
            location: 'Pattanakad, Alappuzha, Kerala',
            call: '☏ CALL 08204779941'
        }
        ,
        {
            image_url: 'https://5.imimg.com/data5/JZ/WC/SL/SELLER-2197889/coat-me-bonjour-paris-metallic-shine-black-lipstick-s31-250x250.JPG',
            productName: 'Paris Metallic Black Lipstick-S31',
            price: "Rs 395", 
            brand: '✅Indus Trade Links Private Limited',
            location: 'Kirti Nagar, New Delhi, Delhi',
            call: '☏ CALL 08204787665'
        },
        {
            image_url: 'https://5.imimg.com/data5/RG/MF/LE/SELLER-980126/5-250x250.jpg',
            productName: 'Sparkel Red Clip And Fit Mop',
            price: "Rs 98.33",
            brand: '✅ Garima Collection',
            location: 'Kirti Nagar, New Delhi, Delhi',
            call: '☏ CALL 08204722351'
        }];

    readytoShip.map(function (elem) {
        var box = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute('class','fdimg')
        img.src = elem.image_url

        var name = document.createElement("h3")
        name.setAttribute("id", "fdblue")
        name.setAttribute('class','fdh')
        name.innerText = elem.productName

        var div = document.createElement("div")
        div.setAttribute("id", "fdpri")

        var price = document.createElement("h4")
        price.innerText = elem.price
        var p = document.createElement("p")
        p.innerText = "/piece"
        p.style.fontSize = "20px"
        p.style.color = "gray"
        div.append(price, p)

        var brand = document.createElement("h3")
        brand.setAttribute('class','fdh')
        brand.innerText = elem.brand
        // brand.style.

        var loco = document.createElement("p")
        loco.innerText= elem.location

        // var call = document.createElement("h3")
        // call.innerText= elem.call

        var btn = document.createElement("button")
        btn.setAttribute('class','fdbtn')
        btn.innerText= 'Contact Supplier'
        btn.style.backgroundColor = "teal"

        box.append(img, name, div, brand,loco, btn)
        Fcontainer.append(box)
    }) 
