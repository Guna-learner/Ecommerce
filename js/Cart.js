


let CartItems =[];
let total = document.querySelector(".price");
let date = new Date();

var menu = document.querySelector(".menu")
var respnav = document.querySelector(".rightnav")
var menunav = document.querySelectorAll(".menu-line")

document.addEventListener("DOMContentLoaded",loadContents)

setTimeout(loadContents,1000)

var Count=0;

//update the cart element using Dom
   function loadContents(){
   
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

})




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
       CartItems.push(itemid)
       sessionStorage.setItem("cartItem", CartItems)
       loadContents()
      
   }

   else
   {
    
   swal("Already Present inside the Cart");
   }
 
}




function Totalamt(){
   let sum =0;
   let amt = document.querySelectorAll(".amt")
  amt.forEach((val)=>{
     sum += parseFloat(val.innerText.replace("Rs.",""));
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
   CartItems = CartItems.filter(val => val != e.parentElement.querySelector(".cartId").innerText )
   e.parentElement.remove()
    Count--;
 updatingCount(Count)
 }
 
//footer
 document.getElementById("date").innerText = `@${date.getFullYear()}`

