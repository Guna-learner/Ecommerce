var menu = document.querySelector(".menu")

var respnav = document.querySelector(".rightnav")

var menunav = document.querySelectorAll(".menu-line")
              


const imglist= [{
       id:1,
       name:"Normal Shirt",
       price:430,
       image:"https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_640.jpg"
   },
   {
       id:2,
       name:"Full Hand Shirt",
       price:330,
       image:"https://5.imimg.com/data5/JZ/ZC/OS/SELLER-15348799/mens-full-sleeve-shirt-250x250.jpg"
   },
   {
       id:3,
       name:"Half Hand Shirt",
       price:300,
       image:"https://5.imimg.com/data5/CH/VU/JF/SELLER-26947573/120-men-linen-shirt-sky-blue-linen-1079225-jolbmug-3349-500x500.jpg"
   },
   {
       id:4,
       name:"Checked Shirt",
       price:450,
       image:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww"
   },
   {
       id:5,
       name:"Half T-Shirt",
       price:780,
       image:"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww"
   },
   {
       id:6,
       name:"Full Hand White  ",
       price:660,
       image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww"
   }
   ,
   {
       id:7,
       name:"Full Hand White  ",
       price:1200,
       image:"https://plus.unsplash.com/premium_photo-1674777843130-40233fe45804?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0fGVufDB8fDB8fHww"
   }
   ]

   

let user = document.querySelector(".usercontain")
let drop = document.querySelector(".dropdown")
user.addEventListener("click",()=>{
drop.classList.toggle("dropdownactive")
})



document.addEventListener("DOMContentLoaded",loadContents)

var Count=0;

//update the cart element using Dom
function loadContents(){

  
   console.log(imglist);
   
 const cartContent = document.querySelectorAll(".Addcart")

cartContent.forEach((btn)=>{
   btn.addEventListener("click",addCart)
})

}


// menu button
menu.addEventListener("click",()=>{
        respnav.classList.toggle("active")
 menunav.forEach((n)=>{
   n.classList.toggle("active")
 })

console.log(menunav);
})

let images = document.getElementsByClassName("images")


console.log(images[0]);

for(i=0;i<images.length;i++){
   images[i].src=imglist[i]
}

function login(){
   log[0].style.display="flex"
}

const section = document.getElementsByClassName("cloths")

  // loading  images cards 
//   for(j=0;j<3;j++){
//    cloths(j)
//  }
//  function cloths(j){
//     for(i=0; i<3 ;i++){
//       cardLoading(i,j)
    
//     }
//  }

for(j=0;j<imglist.length;j++){
      cardLoading(j)
    }


 //creating cards
 function cardLoading(i){
   let div = document.createElement("div")
   div.setAttribute("class","contain")

   let btn = document.createElement("button")
   btn.setAttribute("class","Addcart")
   btn.innerText="Add to Cart"

   
   let atop = document.createElement("aside") 
   atop.setAttribute("class","top") 
   
   let imge = document.createElement("img") 
   imge.setAttribute("src",imglist[i].image)
   imge.setAttribute("class","productimage")
   
   let bottom = document.createElement("aside")
   bottom.setAttribute("class","bottom")  
   
   let price = document.createElement("h1")
   price.setAttribute("class","price") 
   price.innerText= "Rs."+imglist[i].price
   

   let name = document.createElement("h2")
   name.setAttribute("class","name") 
   name.innerText="Name: "+imglist[i].name

   let id = document.createElement("span");
   id.setAttribute("class","productId")
   id.innerText=imglist[i].id;


  section[0].appendChild(div)
   div.appendChild(atop)
   atop.appendChild(imge)

   div.appendChild(bottom)

   bottom.appendChild(id)
   bottom.appendChild(name)
   bottom.appendChild(price)

     div.appendChild(btn)
 }


 let CartItems =[];
// cart adding 
function addCart(){

   let item = this.parentElement
   // let product_id = item.
   let product_image = item.querySelector(".productimage").src 
   let product_name =  item.querySelector(".name").innerText
   let product_price = item.querySelector(".price").innerText
  

   const itemid = item.querySelector(".productId").innerText 

   


   let a = CartItems.find(val=> val===itemid)

   if(a == undefined){
// calling the createCart and storing 
      let newProduct = createCart(product_image,product_name,product_price,itemid);
      const  cartContainer = document.querySelector(".content")
      
      let element = document.createElement("div")
      element.innerHTML = newProduct
    
      // adding the product inside cart
      cartContainer.append(element);
    
    
    
    
    
      Count++;
    
     //Updating the cart count
       updatingCount(Count)
       Totalamt()
      
      loadContents()
      CartItems.push(itemid)
   }

   else
   alert("already present")
 
  

  


}

let total = document.querySelector(".price");
function Totalamt(){
   let sum =0;
   let amt = document.querySelectorAll(".amt")
  amt.forEach((val)=>{
     sum += parseFloat(val.innerText.replace("Rs.",""));
 console.log(sum);
  })

  total.innerText="Rs."+sum
}
//decreasing
function dec(e){
   

   let orgiamt = e.parentElement.querySelector(".orig-amt").innerText
   let orgi_amt = parseFloat(orgiamt.replace("Rs.",""))

  let amt = e.parentElement.querySelector(".amt").innerText
           let cart_amt = amt.replace("Rs.","");
   

   let num =parseFloat(e.parentElement.querySelector(".count").innerText)
   if(num < 2){
      num=2
      e.parentElement.querySelector(".count").innerText=num;
   }
   num = num-1
   e.parentElement.querySelector(".count").innerText=num;

if(num != 1){
  cart_amt = cart_amt-orgi_amt;
}
else{
   cart_amt = orgi_amt
}
  e.parentElement.querySelector(".amt").innerText="Rs."+cart_amt
  Totalamt()


}

//increasing
function inc(e){
   let num = Number(e.parentElement.querySelector(".count").innerText)
   num = num+1;
   e.parentElement.querySelector(".count").innerText=num
   let orgiamt = e.parentElement.querySelector(".orig-amt").innerText
   let orgi_amt = parseFloat(orgiamt.replace("Rs.",""))
   

  let amt = e.parentElement.querySelector(".amt").innerText
  let cart_amt = parseFloat(amt.replace('Rs.'," "));

 
if(num >1){
   cart_amt = cart_amt+orgi_amt;
}
  e.parentElement.querySelector(".amt").innerText="Rs."+cart_amt 

  Totalamt()

}




//creating cart elements 
function createCart(img,name,price,id){

  

   return `<div class="cart-box">
   <img src=${img} class="cartimg" alt="">
<div class="details">
<span class=cartId style=display:none>${id}</span>
   <div class="name">${name}</div>
   <div class="price">
       <div class="orig-amt">${price}</div>
        <div class="amt">${price}</div>
   </div>
   <span class="decrease" onclick=dec(this)> - </span>
   <span class="count"> 1 </span>
   <span class="increase" onclick=inc(this)> + </span>
</div>
<i class="fa-solid fa-trash remove" onclick=removeItem(this)></i>
</div>`


}
// count updating
function updatingCount(Count){
   const totalCount = document.querySelector(".CartTotalCount")
  totalCount.innerText = Count;
}


//deleteing cart items
let removeItem =(e)=>{
  let amt =  parseFloat(e.parentElement.querySelector(".amt").innerText.replace("Rs.",""))
  total.innerText = "Rs."+(parseFloat(total.innerText.replace("Rs.",""))-amt ) 

  
  console.log( );

  CartItems = CartItems.filter(val => val != e.parentElement.querySelector(".cartId").innerText )

  e.parentElement.remove()
Count--;

  
updatingCount(Count)
}


const view = document.querySelector(".cart-view")

const cart = document.getElementsByClassName("cart")



// const cart_box = document.getElementsByClassName("cart-box")

const qty = document.querySelectorAll(".qty")

const cart_remove = document.getElementById("close")



// closing the cart
cart_remove.addEventListener("click",()=>{
   view.classList.remove("cart-active")
})

// opening the cart
cart[0].addEventListener("click",()=>{
   view.classList.toggle("cart-active")

})

let date = new Date();

document.getElementById("date").innerText = `@${date.getFullYear()}`














