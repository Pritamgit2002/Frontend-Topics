import { useMultiStepForm } from "@/hooks/useMultiStepForm"
import { useState } from "react";
import { ArtitraOne } from "./Artitra-one";
import { AritraTwo } from "./Aritra-two";
import { AritraThree } from "./Aritra-three";
import { Button } from "./ui/button";

export const Aritra = () => {

    const {formData, addData, deleteData} = useMultiStepForm({
        initialData:{ name:"", email:"", password:""}
    })

    const [step, setStep] = useState(1);

    const handleNext = () =>{
        setStep((prev)=> prev+1);
    }

    const handlePrev = () =>{
        setStep((prev)=> Math.max(prev-1,1));
    }

    const handleSubmit = () =>{
        console.log(" Submitted Data, ",formData)
        setStep(1);
    }
    return (
        <div>
            <h1>Aritra</h1>
            {
                step === 1 && <ArtitraOne formData={formData} addData={addData} handleNext={handleNext}/>
            }

            {
                step === 2 && <AritraTwo formData={formData} addData={addData} handleNext={handleNext} handlePrev={handlePrev}/>
            }

            {
                step === 3 && <AritraThree formData={formData} addData={addData} handlePrev={handlePrev} handleSubmit={handleSubmit}/>
            }       
            
        </div>
    )
}