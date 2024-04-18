
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



// login validate
document.querySelector("#loginform").addEventListener("submit",(e)=>{
e.preventDefault()

let login = "#loginform";
let message;
let email = document.querySelector("#loginemail").value;


if(email == "" || email == " "){
  message = "*This field is required"
  Emailerror(message,login);
}
else{

    if (!validateEmail(email)) {
       message = "*Not Vaild Email"
       Emailerror(message,login)
    }
    else{
      message =" "
      Emailerror(message,login)
    } 

}

let pass = document.querySelector("#loginpass").value;

    if( pass == "" || pass ==" "){
        message = "*This field is required"
        passworderror(message,login);
      }
    else{
        if (!validatePassword(pass)){
            message = "Must contain atleast 8 characters"
            passworderror(message,login)
                }
         else{
           message =" "
           passworderror(message,login)
         } 

    }

    document.querySelector("#loginemail").value="";
    document.querySelector("#loginpass").value="";
})



document.querySelector("#signupform").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let signupform = "#signupform";
    let message;
    let email = document.querySelector("#signupemail").value;
    
    
    if(email == "" || email == " "){
      message = "*This field is required"
      Emailerror(message,signupform);
    }
    else{
    
        if (!validateEmail(email)) {
           message = "*Not Vaild Email"
           Emailerror(message,signupform)
        }
        else{
          message =" "
          Emailerror(message,signupform)
        } 
    
    }
    
    let pass = document.querySelector("#signuppass").value;
    
        if( pass == "" || pass ==" "){
            message = "*This field is required"
            passworderror(message,signupform);
          }
        else{
            if (!validatePassword(pass)){
                message = "Must contain atleast 8 characters"
                passworderror(message,signupform)
                    }
             else{
               message =" "
               passworderror(message,signupform)
             } 
    
        }
    
        document.querySelector("#signupemail").value="";
        document.querySelector("#signuppass").value="";
    })










function Emailerror(message,type){

    if(message != " "){
    document.querySelector(`${type} .email-error`).classList.add("email-error-active")
    document.querySelector(`${type} .email-error`).innerText = message;
    }
    else{
    document.querySelector(`${type} .email-error`).classList.remove("email-error-active")
    document.querySelector(`${type} .email-error`).innerText = message;
    }

}

function passworderror(message,type){

    if(message != " "){
    document.querySelector(`${type} .pass-error`).classList.add("email-error-active")
    document.querySelector(`${type} .pass-error`).innerText = message;
    }
    else{
    document.querySelector(`${type} .pass-error`).classList.remove("email-error-active")
    document.querySelector(`${type} .pass-error`).innerText = message;
    }

}


function validateEmail(email) {
    // Regular expression for email validation
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function validatePassword(password){

    if(password.length < 8){
        return false;
    }
    else
    return true
}






