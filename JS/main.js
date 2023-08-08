"use strict"

// * declare Global Variable for sign in

let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");
let signInBtn = document.querySelector("#signInBtn");
let logoutBtn = document.querySelector("#logoutBtn");
let DisplayUserName = document.querySelector("#DisplayUserName");
let userName = '';

// * declare array to get element from local storage 
let signInList = [];


// & LocalStorage

if (localStorage.getItem("signUpList") != null) {
    signInList = JSON.parse(localStorage.getItem("signUpList"));
    console.log("signInList",signInList);
}

// ? ***************************  Sign in ************************************


// ~ Onclick Event of LogOut => Button

logoutBtn.addEventListener("click",function(){
    document.getElementById("home").classList.replace('d-block','d-none');
    document.getElementById("sign-in").classList.replace('d-none','d-block');
    clearSignInInputs();
})


// ~ Onclick Event of signIn => Button

signInBtn.addEventListener("click",function(){

    if(signInIsEmpty() == true){
        existingUser();
    }
    else{
        document.getElementById("confirm").innerHTML=`
        <span class="text-danger">All inputs is required</span>`
    }
})

// ^ =========================================================================== 

// & for check inputs of signIN Is Empty or not 
function signInIsEmpty() {

    // when inputs are empty
    if (signInEmail.value == "" || signInPassword.value == "") {
        return false;
    }
    // when inputs not empty
    else{        
        return true;
    }
}

// & for check to see if he is really a user

function existingUser() {
    let item = false;

    for (let i = 0; i < signInList.length; i++) {
        if(signInEmail.value == signInList[i].email && signInPassword.value == signInList[i].pass){
            userName = signInList[i].name;
            item = true;
            break;
        }
    }

    console.log(item);
    if(item == true){

        document.getElementById("sign-in").classList.add('d-none');

        document.getElementById("home").classList.replace('d-none','d-block');
    
        document.getElementById("DisplayUserName").innerHTML = 
        `<span>Welcome ${userName}</span>`

        clearSignInInputs();

        // ^ to hide incorrect email or password when user enter error inputs then enter true inputs the text (incorrect email or password) will disappear
        document.getElementById("confirm").innerHTML = "";
    }
    else{
        document.getElementById("confirm").innerHTML = 
        `<span class = "text-danger">incorrect email or password</span>`
    }
}

function clearSignInInputs() {
    signInEmail.value = "";
    signInPassword.value = "";
}