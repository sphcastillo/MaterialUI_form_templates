import React, { useState } from 'react';
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function UserForm() {


    const [step, setStep] = useState(1);

    const nextStep = () => {
        console.log("Continue has been clicked");
        setStep(step + 1);
        
    }

    const prevStep = () => {
        console.log("Back has been clicked");
        setStep(step - 1);
    }



    switch(step){
        case 1:
        return(
            <FormUserDetails 
                nextStep={nextStep}
                
                
            />
        )
        case 2:
        return(
            <FormPersonalDetails 
                nextStep={nextStep}
                prevStep={prevStep}
            />
        )    
        case 3:
        return(
            <Confirm 
                nextStep={nextStep}
                prevStep={prevStep}
            />
        )
        case 4:
        return(
            <Success />
        )    
        default:
        return(<></>)
    }
    
    
}

export default UserForm;
