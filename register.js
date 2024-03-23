// ===================================================globel//////
const inputs =document.querySelectorAll("input");
const btnRegister = document.getElementById('btnRegister')
const formData =document.querySelector('form')



//=========================================================event //////
document.querySelector('form').addEventListener('submit',function(e){
e.preventDefault(); //not reloude

if (isValid === true) {
    setForm()
}
else{
    
}
})
///============event form  3shan input wana bakteb
let isValid =false
formData.addEventListener("input",function(){
if (validationName(inputs[0]) && validationName(inputs[1]) && validationEmail() && validationPasswerd() && validationAge()) {
    
    isValid = true
}
else{
    isValid = false
}

});
//============================================================
//======================================================================functions
function setForm(){
    const user ={
        "first_name":inputs[0].value,
        "last_name":inputs[1].value,
            "email":inputs[2].value,
            "password":inputs[3].value,
        "age":inputs[4].value,
    }
    console.log(user)
    registerForm(user) //edat pramter ll function
}

async function registerForm(userData){  //=============== baklem api
const api = await fetch (`https://movies-api.routemisr.com/signup`,{
    method:'POST',
    body:JSON.stringify(userData),
    headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
        
    }

})
const response =await api.json()
if (response.message === "success") {
    location.href ='./index.html'
}
else{
    document.getElementById("msg").innerHTML = response.errors?.email.message
}
console.log(response);


} //api baklem



//======================================================validation===/===
function validationName(input){ //=== name , last name
    const regexStyle =
    /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;
    if(regexStyle.test(input.value)){
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
           return true;
    }
    else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')

        return false;
}
}
 



function validationEmail(){ //=== email
    const regexStyle =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regexStyle.test(inputs[2].value)){
        inputs[2] .classList.add('is-valid');
        inputs[2].classList.remove('is-invalid');
           return true;
    }
    else {
        inputs[2].classList.add('is-invalid');
        inputs[2].classList.remove('is-valid');

        return false;
}
}



function validationPasswerd(){ //=== paaswerd
    const regexStyle =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(regexStyle.test(inputs[3].value)){
        inputs[3] .classList.add('is-valid');
        inputs[3].classList.remove('is-invalid');
           return true;
    }
    else {
        inputs[3].classList.add('is-invalid');
        inputs[3].classList.remove('is-valid');

        return false;
}
}


function validationAge(){ //=== age
    const regexStyle =
    /^([1-7][0-9]|80)$/  ;
    
    if(regexStyle.test(inputs[4].value)){
        inputs[4] .classList.add('is-valid');
        inputs[4].classList.remove('is-invalid');
           return true;
    }
    else {
        inputs[4].classList.add('is-invalid');
        inputs[4].classList.remove('is-valid');

        return false;
}
}