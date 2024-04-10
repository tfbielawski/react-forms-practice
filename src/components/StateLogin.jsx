import { isValidElement } from "react";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import Input from "./Input";


export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 7));

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  //Using custom hook instead of this state
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // //State to determine if focus is lost
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  //check on keystroke state change for validation
  //Message does not appear while field is empty
  // const emailIsInvalid = 
  //   didEdit.email && 
  //   !isEmail(enteredValues.email) && 
  //   !isNotEmpty(enteredValues.email)

  // const passwordIsInvalid =
  //  didEdit.password && 
  //  !hasMinLength(enteredValues.password, 7)

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  // Transferred to custom hook
  // ud.s17 vid.262
  // function handleInputChange(identifier, value){
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value //tells js to target the value passed into input type in the state object
  //   }));
    
  //   //Reset the error so that it disappears when the user starts typing again
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  // //This func fires when blur occurs and sets true
  // function handleInputBlur(identifier, value){
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true
  //   }))
  // }


  return (
    // using onSubmit prevents the default "submit" behavior of the buttons, which reloads the page
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* This syntax is without the custom hook, keeping for reference purposes 
          <Input 
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}            
          value={enteredValues.email} 
          error={emailIsInvalid && "Please enter a valid email."}
        /> */}
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />

        {/* <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={()=> handleInputBlur("password")}
          placeholder="password"
          onChange={(event) => handleInputChange("password", event.target.value)}            
          value={enteredValues.password} 
          error={passwordIsInvalid && "Please enter a valid password."}
        /> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
