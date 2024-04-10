import { useState } from "react";

export function useInput(defaultValue, validationFn){
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    
      //State to determine if focus is lost
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event){
        setEnteredValue(event.target.value);
        setDidEdit(false);
        
        // //Reset the error so that it disappears when the user starts typing again
        // setDidEdit((prevEdit) => ({
        //   ...prevEdit,
        //   [identifier]: false,
        // }));
    }
    
      //This func fires when blur occurs and sets true
    function handleInputBlur(){
        setDidEdit(true);
    }
    
    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid
    }
}