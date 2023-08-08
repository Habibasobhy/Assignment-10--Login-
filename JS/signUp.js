
"use strict"

// * declare Global Variable for sign up

let signupName = document.querySelector("#signupName");
let signupEmail = document.querySelector("#signupEmail");
let signupPassword = document.querySelector("#signupPassword");
let validateSignupName = document.querySelector("#validateSignupName");
let validateSignupEmail = document.querySelector("#validateSignupEmail");
let validateSignupPassword = document.querySelector("#validateSignupPassword");
let signUpBtn = document.querySelector("#signUpBtn");
let confirm = document.querySelector("#confirm");
let signUpList = [];



// &           LocalStorage 

if(localStorage.getItem("signUpList") != null){
    signUpList = JSON.parse(localStorage.getItem("signUpList"));
}



// ? ***************************  Sign Up ************************************


// ~ Onclick Event of signUp => Button
signUpBtn.addEventListener("click",function(){

    if(signUpIsEmpty() == true){
        // if signUpIsEmpty not empty hyro7 ll validate 
        if(ValidateSignupName() && validateSignUpEmail() && validateSignUpPassword()){

            // ^ to check email duplicated or not
            let item = true;

            for (let i = 0; i < signUpList.length; i++) {
                if (signupEmail.value == signUpList[i].email) {
                    item = false;
                    break;
                }
            }
        
            console.log("item",item);
        
            if(item == true){
                addUser();

                // lw al validate s7 hytl3 success

                document.getElementById("confirm").innerHTML=`
                <span class="text-success">Success</span>`

                //  ^Automatically go to sign in after click on sign up button
                location.href = "./index.html"; 

            }
            else{
                document.getElementById("confirm").innerHTML=`
                <span class="text-danger">Email already exists</span>`
                console.log("error");
            }
        }
    }

    else{
        document.getElementById("confirm").innerHTML=`
        <span class="text-danger">All inputs is required</span>`
    }
    
});

// ^ =========================================================================== 

// & for addUser

function addUser(){

    let user = {
        name : signupName.value,
        email : signupEmail.value,
        pass : signupPassword.value
    };

    signUpList.push(user);
    localStorage.setItem("signUpList", JSON.stringify(signUpList));
    clearSignupInputs();
    console.log(signUpList);
   
}

// ^ =========================================================================== 

// ~ Oninput Event of signUp  => Name
signupName.addEventListener("input",ValidateSignupName);

// & for check SignUPName 
function ValidateSignupName() {
    let regex = /^[a-zA-Z]{3,10}$/;

   if (regex.test(signupName.value) == true){
    signupName.classList.add('is-valid');
    signupName.style.borderColor = "#198754";
    validateSignupName.classList.replace('d-block','d-none');
    return true;
   }
   else{
    signupName.style.borderColor = "#dc3545";
    validateSignupName.classList.replace('d-none','d-block');
    return false;
    }
}

// ^ =========================================================================== 

// ~ Oninput Event of signUp => Email
signupEmail.addEventListener("input",validateSignUpEmail);

// & for check SignUPEmail 
function validateSignUpEmail() {
    let regex = /^\w{3,15}@gmail\.com$/;

    if (regex.test(signupEmail.value) == true) {
        signupEmail.classList.add('is-valid');
        signupEmail.style.borderColor = "#198754";
        validateSignupEmail.classList.replace('d-block','d-none');
        return true;
    } else {
        signupEmail.style.borderColor = "#dc3545";
        validateSignupEmail.classList.replace('d-none','d-block');
        return false;
    }
}

// ^ =========================================================================== 

// ~ Oninput Event of signUp => Password
signupPassword.addEventListener("input",validateSignUpPassword);

// & for check SignUpPassword 
function validateSignUpPassword() {
    let regex = /^([a-z0-9]){8,}$/;

    if (regex.test(signupPassword.value) == true) {
        signupPassword.classList.add('is-valid');
        signupPassword.style.borderColor = "#198754";
        validateSignupPassword.classList.replace('d-block','d-none');
        return true;
    } else {
        signupPassword.style.borderColor = "#dc3545";
        validateSignupPassword.classList.replace('d-none','d-block');
        return false;
    }
}

// ^ =========================================================================== 

// & for check inputs of signUp Is Empty or not 
function signUpIsEmpty() {

    // when inputs are empty
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false;
    }
    // when inputs not empty
    else{        
        return true;
    }
}

// ^ =========================================================================== 

// & Clear Sign Up Inputs

function clearSignupInputs() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = ""
}



