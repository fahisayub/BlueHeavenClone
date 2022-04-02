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