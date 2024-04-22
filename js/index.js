
function login(){
   log[0].style.display="flex"
}

const section = document.getElementsByClassName("cloths")


async function fetchCloths() {
    let data = await fetch("./json/data.json")
   let result = await data.json();
   let keys = Object.keys(result);


   
   for(let i=0 ; i<3 ; i++){
 for(let j=0; j<3 ;j++){
       cardLoading(i,j,result,keys)
}
  }


  
  
 }
 fetchCloths()


 //creating cards
 function cardLoading(i,j,result,keys){
   let div = document.createElement("div")
   div.setAttribute("class","contain")

   let btn = document.createElement("button")
   btn.setAttribute("class","Addcart")
   btn.innerText="Add to Cart"

   
   let atop = document.createElement("aside") 
   atop.setAttribute("class","top") 
   
   let imge = document.createElement("img") 
   imge.setAttribute("src",result[keys[i]][j].image)
   imge.setAttribute("class","productimage")
   
   let bottom = document.createElement("aside")
   bottom.setAttribute("class","bottom")  
   
   let price = document.createElement("h1")
   price.setAttribute("class","price") 
   price.innerText= "Rs."+result[keys[i]][j].price
   

   let name = document.createElement("h2")
   name.setAttribute("class","name") 
   name.innerText="Name: "+result[keys[i]][j].name

   let id = document.createElement("span");
   id.setAttribute("class","productId")
   id.innerText=result[keys[i]][j].id;


  section[i].appendChild(div)
   div.appendChild(atop)
   atop.appendChild(imge)

   div.appendChild(bottom)

   bottom.appendChild(id)
   bottom.appendChild(name)
   bottom.appendChild(price)

   div.appendChild(btn)
 }





const view = document.querySelector(".cart-view")

const cart = document.getElementsByClassName("cart")

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



























