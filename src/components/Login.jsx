import { useState, useRef } from "react";
export default function Login() {
  //state to validate form on submit
  const [emailIsInvalid, setEmailIsInvalid] = useState();

  //useRef is a little simpler than using state for forms and input--sometimes
  //Helps to validate on submit instead of on each keystroke with this method
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // console.log("email :" + enteredEmail + " | password:  " + enteredPassword); 
    const emailIsValid = enteredEmail.includes("@");

    if(!emailIsValid){
      setEmailIsInvalid(true);
      //Prevent other code (below clg for ex) from executing
      return;
    }
    setEmailIsInvalid(false);
    console.log("Sending request...");
    
  }

  return (
    // using onSubmit prevents the default "submit" behavior of the buttons, which reloads the page
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email"    
            ref={email}        
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"  
            ref={password}           
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
