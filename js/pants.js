


const section = document.getElementsByClassName("cloths");


async function fetchCloths() {
   let data = await fetch("./json/data.json")
  let result = await data.json();
  let keys = Object.keys(result);

console.log(result);
  (function (result,keys){
   for(j=0;j<result.pants.length;j++){
      cardLoading(j,result,keys)
    }
   
})(result,keys);

}

//creating cards
function cardLoading(i,result,keys){
   let div = document.createElement("div")
   div.setAttribute("class","contain")
  
   let btn = document.createElement("button")
   btn.setAttribute("class","Addcart")
   btn.innerText="Add to Cart"
  
   
   let atop = document.createElement("aside") 
   atop.setAttribute("class","top") 
   
   let imge = document.createElement("img") 
   imge.setAttribute("src",result[keys[1]][i].image)
   imge.setAttribute("class","productimage")
   
   let bottom = document.createElement("aside")
   bottom.setAttribute("class","bottom")  
   
   let price = document.createElement("h1")
   price.setAttribute("class","price") 
   price.innerText= "Rs."+result[keys[1]][i].price
   
  
   let name = document.createElement("h2")
   name.setAttribute("class","name") 
   name.innerText="Name: "+result[keys[1]][i].name
  
   let id = document.createElement("span");
   id.setAttribute("class","productId")
   id.innerText=result[keys[1]][i].id;
  
  
  section[0].appendChild(div)
   div.appendChild(atop)
   atop.appendChild(imge)
  
   div.appendChild(bottom)
  
   bottom.appendChild(id)
   bottom.appendChild(name)
   bottom.appendChild(price)
  
     div.appendChild(btn)
  }

  fetchCloths();


const view = document.querySelector(".cart-view")
const cart = document.getElementsByClassName("cart")
const cart_remove = document.getElementById("close")

// closing the cart
cart_remove.addEventListener("click",()=>{
   view.classList.remove("cart-active")
})

// opening the cart
cart[0].addEventListener("click",()=>{
   view.classList.toggle("cart-active")

})

