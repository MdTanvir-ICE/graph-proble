import React, { useState } from 'react';
import '../Register/Register.css'

const Login = () => {
  
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [emailClass,setEmailCalss]=useState("registerform-control");
const [passwordClass,setPasswordClass]=useState("registerform-control");
const [message,setMessage]=useState({ email:"error message",
                                      password:"error message",
                                   })

const formElememt =['email','password'];




function showError(input, message) {
   
   if(input==='email'){
    setEmailCalss("registerform-control error");
    setMessage({...message,email:message});
  }
  else {
    setPasswordClass("registerform-control error");
    setMessage({...message,password:message});
  }  
 
}


// Show success outline
function showSuccess(input) {
  
   if(input==='email'){
    setEmailCalss("registerform-control success");
  }
  else {
    setPasswordClass("registerform-control success");
  }
  
}

// Check email is valid
function checkEmail(input) {
  console.log('email',formElememt[0]);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    showSuccess( formElememt[0]);
  } else {
    showError( formElememt[0], 'Email is not valid');
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



// Event listeners
function submitForm(e) {
  e.preventDefault();
  checkRequired([ email, password]);
  checkEmail(email);
  
};
 
    return (
        <div className="registerBody">
        <div class="registercontainer">
      <form id="registerform" class="registerform" onSubmit={(e)=>submitForm(e)}>
        <h2>ITLOGO</h2>
       
        <div class={emailClass}>
          <label for="email">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="text" id="registeremail" placeholder="Enter email" />
          <small>{message.email}</small>
        </div>
        <div class={passwordClass}>
          <label for="password">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter password" />
          <small>{message.password}</small>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
   </div>
    );
};

export default Login;