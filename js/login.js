

var log_in = document.querySelector(".login")

var btn = document.querySelectorAll(".login-close");


function show(){
   log_in.style.display="flex";
    
    if( document.querySelector(".logincontainhidden") != null ){
        document.querySelector(".logcontain").classList.remove("logincontainhidden");
        document.querySelector(".signupcontain").classList.add("signupcontainhidden");
       }
       else{
        document.querySelector(".signupcontain").classList.remove("signupcontainhidden");
        document.querySelector(".logcontain").classList.add("logincontainhidden");
       }
}


btn.forEach(val => {
    val.addEventListener("click",()=>{
            document.querySelector(".login").style.display="none";
            console.log("hello");
        })
})

function signup(){
    document.querySelector(".logcontain").classList.add("logincontainhidden");
    document.querySelector(".signupcontain").classList.remove("signupcontainhidden");
}
function login(){
    document.querySelector(".logcontain").classList.remove("logincontainhidden");
    document.querySelector(".signupcontain").classList.add("signupcontainhidden");
}

