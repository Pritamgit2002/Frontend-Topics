import { useState } from "react";

export interface useMultiStepFormProps{
    initialData: Record<string, any>;
}

export const useMultiStepForm = ({initialData}:useMultiStepFormProps) => {
    const [formData, setFormData] = useState(initialData);
  
    const addData = (newData:Record<string, any>)=>{
        setFormData((prev)=>({...prev, ...newData}))
    }

    const deleteData = (key:string) =>{
        setFormData((prev) => {
            const updatedData = {...prev}
            delete updatedData[key];
            return updatedData;
        })
    }

    return {
        formData,
        addData,
        deleteData
    }
}