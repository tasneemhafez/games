// ===================================================globel//////
const inputs =document.querySelectorAll("input");
const btnLogin = document.getElementById('btnLogin')
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
if ( validationEmail() && validationPasswerd()) {
    
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
            "email":inputs[0].value,
            "password":inputs[1].value,
       
    }
    console.log(user)
    loginForm(user) //edat pramter ll function
}

async function loginForm(userData){  //=============== baklem api
const api = await fetch (`https://movies-api.routemisr.com/signin`,{
    method:'POST',
    body:JSON.stringify(userData),
    headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
        
    }

})
const response =await api.json()
if (response.message === "success") {
    localStorage.setItem('token',response.token);
    location.href ='./home.html'
}
else{
    document.getElementById("msg").innerHTML = response.message
}
console.log(response);


} //api baklem



//======================================================validation===/===

 



function validationEmail(){ //=== email
    const regexStyle =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regexStyle.test(inputs[0].value)){
        inputs[0] .classList.add('is-valid');
        inputs[0].classList.remove('is-invalid');
           return true;
    }
    else {
        inputs[0].classList.add('is-invalid');
        inputs[0].classList.remove('is-valid');

        return false;
}
}



function validationPasswerd(){ //=== paaswerd
    const regexStyle =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(regexStyle.test(inputs[1].value)){
        inputs[1] .classList.add('is-valid');
        inputs[1].classList.remove('is-invalid');
           return true;
    }
    else {
        inputs[1].classList.add('is-invalid');
        inputs[1].classList.remove('is-valid');

        return false;
}
}


