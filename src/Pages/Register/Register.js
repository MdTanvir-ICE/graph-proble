import React, { useState } from 'react';
import  './Register.css'

const Register = () => {
const [email,setEmail]=useState("");
const [userName,setUserName]=useState("");
const [password,setPassword]=useState("");
const [password2,setPassword2]=useState("");
const [emailClass,setEmailCalss]=useState("registerform-control");
const [userNameClass,setUserNameClass]=useState("registerform-control");
const [passwordClass,setPasswordClass]=useState("registerform-control");
const [confirmClass,setConfirmClass]=useState("registerform-control");
const [message,setMessage]=useState({username:"error message",
                                      email:"error message",
                                      password:"error message",
                                      confirmPassword:"error message"
                                    })

const formElememt =['user name','email','password','confirm password'];




function showError(input, message) {
  
  if(input==='user name'){
    setUserNameClass("registerform-control error");
    setMessage({...message,userName:message});
  }
  else if(input==='email'){
    setEmailCalss("registerform-control error");
    setMessage({...message,email:message});
  }
  else if(input==='password'){
    setPasswordClass("registerform-control error");
    setMessage({...message,password:message});
  }
  else{
    console.log('okkkkk');
    setConfirmClass("registerform-control error");
    setMessage({...message,confirmPassword:message});
  }
  // const formControl = input.parentElement;
  // formControl.className = 'form-control error';
  // const small = formControl.querySelector('small');
  // small.innerText = message;
}
console.log(message);

// Show success outline
function showSuccess(input) {
  console.log(input,'success');
  if(input==='user name'){
    setUserNameClass("registerform-control success");
  }
  else if(input==='email'){
    setEmailCalss("registerform-control success");
  }
  else if(input==='password'){
    setPasswordClass("registerform-control success");
  }
  else{
    setConfirmClass("registerform-control success");
  }
  
}

// Check email is valid
function checkEmail(input) {
  console.log('email',formElememt[1]);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    showSuccess( formElememt[1]);
  } else {
    showError( formElememt[1], 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  console.log(inputArr);
  inputArr.forEach(function(input,key) {
    console.log(key,input);
    if (input === '') {
      showError(formElememt[key], `${formElememt[key]} is required`);
    } else {
      console.log("inputArray",formElememt[key]);
      showSuccess(formElememt[key]);
    }
  });
}

// Check input length
function checkLength(key, input, min, max) {
 
  if (input.length < min) {
    showError(
      formElememt[key],
      `${formElememt[key]} must be at least ${min} characters`
    );
  } else if (input.length > max) {
    showError(
      formElememt[key],
      `${formElememt[key]} must be less than ${max} characters`
    );
  } else {
    console.log(checkLength,formElememt[key])
    showSuccess(formElememt[key]);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  console.log(input1,input2);
  if (input1 !== input2) {
    showError(formElememt[3], 'Passwords do not match');
  }
}



// Event listeners
function submitForm(e) {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLength(0,userName, 3, 15);
  checkLength(2,password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
};
 
    return (
     
   <div className="registerBody">
       
        <div class="registercontainer">
      <form id="registerform" class="registerform" onSubmit={(e)=>submitForm(e)} >
        <h2>ITLOGO</h2>
        <div className={userNameClass}>
          <label for="registerusername">Username</label>
          <input onChange={(e)=>setUserName(e.target.value)} type="text" id="registerusername" placeholder="Enter username" />
          <small>{message.username}</small>
        </div>
        <div className={emailClass}>
          <label for="email">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="text" id="registeremail" placeholder="Enter email" />
          <small>{message.email}</small>
        </div>
        <div className={passwordClass}>
          <label for="password">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter password" />
          <small>{message.password}</small>
        </div>
        <div className={confirmClass}>
          <label for="password2">Confirm Password</label>
          <input
            onChange={(e)=>setPassword2(e.target.value)}
            type="password"
            id="password2"
            placeholder="Enter password again"
          />
          <small>{message.confirmPassword}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
   </div>

    );
};

export default Register;