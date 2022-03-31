var bheavenProducts=[
    
    {
        image_url:'https://3.imimg.com/data3/WJ/EO/MY-3792183/01-500x500.jpg' ,
        productName :'Sindoor' ,
        category:'Traditional Items',
        price:100 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,
    {
        image_url:'https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-500x500.jpg' ,
        productName :'Fairness Scrub' ,
        category:'Makeup',
        price:199 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,
    {
        image_url:'https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg' ,
        productName :'Fruit Bleach' ,
        category:'Bleach Cream',
        price:259 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    },
    {
        image_url:'https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-500x500.jpg' ,
        productName :'Lip Balm' ,
        category:'LipCare',
        price:58 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/EJ/OU/MY-3792183/lip-gaurd-500x500.jpg' ,
        productName :'Lip Gaurd' ,
        category:'LipCare',
        price:88 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://4.imimg.com/data4/QI/AY/GLADMIN-3792183/2-250x250.jpg' ,
        productName :'Coral Red Lipstick' ,
        category:'LipCare',
        price:60 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://4.imimg.com/data4/KD/IX/GLADMIN-3792183/4-250x250.jpg' ,
        productName :'Pretty Purple Lipstick' ,
        category:'LipCare',
        price:40 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-500x500.jpg' ,
        productName :'Mascara' ,
        category:'Eyes Products',
        price:115 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/FX/IN/MY-3792183/eye-shadow-500x500.jpg' ,
        productName :'Eye Shadow' ,
        category:'Eyes Products',
        price:237 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/GE/KN/MY-3792183/gold-bleach-500x500.jpg' ,
        productName :'Gold Bleach' ,
        category:'Bleach Cream',
        price:338 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/UP/UB/MY-3792183/rose-water-mask-250x250.jpg' ,
        productName :'Rose Water -Mask' ,
        category:'Rose Water',
        price:220 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/BK/MD/MY-3792183/01-250x250.jpg' ,
        productName :'Nail Enamel' ,
        category:'Nails Products',
        price:405 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://4.imimg.com/data4/AP/MT/GLADMIN-3792183/1-250x250.jpg' ,
        productName :'Diamond Facial Kit' ,
        category:'Facial Kit',
        price:250 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,{
        image_url:'https://3.imimg.com/data3/BH/LB/MY-3792183/massage-cream-250x250.jpg' ,
        productName :'Massage Cream' ,
        categary:'Creams',
        price:125 ,
        brand:'Blue Heaven Cosmetics' ,
        location:'Kirti Nagar, New Delhi, Delhi' ,
    }
    ,];
    bheavenProducts.map(function(elem){
        
var product=document.createElement('div');
var image=elem.image_url;
product.style.backgroundImage=`url(${elem.image_url})`;
var namebox=document.createElement('div');
namebox.setAttribute('id','name');
var button=document.createElement('button');
button.innerText='Get Best Quote'
var prodname=document.createElement('h4');
prodname.innerText=elem.productName;

namebox.append(prodname,button);
product.append(namebox);
document.querySelector('#showcase').append(product);

    });