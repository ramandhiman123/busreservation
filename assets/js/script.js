function signup() {

    let username = document.getElementById('username');
    let email = document.getElementById('mail');
    let pw = document.getElementById('pw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (username.value == "") {
        alert('Please fill in username');
        // username.style.border = "2px solid red";
        // return false;
    } else if(email.value == ""){
        
     alert('Please fill in email');
    }
    else if (pw.value.length == 0) {
        color = 'red';
        alert('Please fill in password');
    } else if (username.value.length == 0 && pw.value.length == 0  && email.value.length == 0) {
        alert('Please fill in username password email');
     } else if (pw.value.length <= 8) {
        alert('Max of 8');
    } else if(!email.value.match(exp)){
        alert('please enter @');
    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');
    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');
    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lowercase letter');
    } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        window.location="file:///C:/Users/Raman/OneDrive/Desktop/js%20final/loginform/login.html";
    }
}   

function login() {
    let storedName = localStorage.getItem('username');
    let storedPw = localStorage.getItem('pw');
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw'); 
    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        window.location = "file:///C:/Users/Raman/OneDrive/Desktop/js%20final/home.html?";
    } else {
        alert('Error on login');
    }
}



// function signup(){  
//     let username=document.getElementById('username').value;
//     let Email=document.getElementById('mail').value;  
//     let password=document.getElementById('pw').value;  
      
//     if (username==null || username==""){  
//       alert("Name can't be blank");  
//       return false;  
//     }else if(password.length<6){  
//       alert("Password must be at least 6 characters long.");  
//       return false;  
//       }  
//     } 

