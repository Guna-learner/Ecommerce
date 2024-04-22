let items = document.querySelectorAll(".items")
let totalitems = items.length;

let traceindex = 0;
console.log(items);

let previous = document.querySelector(".before");
let next = document.querySelector(".after");

previous.addEventListener("click",()=>{
    previousBtn()
});

next.addEventListener("click" , nextbtn)

function previousBtn(){
   traceindex--;

   if(traceindex < 0){
    traceindex = totalitems-1;
   }


   items.forEach(val=>{
    val.classList.remove("slideactive")
    val.classList.add("hidden")
});

items[traceindex].classList.add("slideactive")
   
}



function nextbtn(){
    traceindex++;
   
    if(traceindex == totalitems){
        traceindex = 0
    }
   
    items.forEach(val=>{
        val.classList.remove("slideactive")
        val.classList.add("hidden")
    });
    
    items[traceindex].classList.add("slideactive")
}

setInterval(() => {
    nextbtn();
}, 4000);