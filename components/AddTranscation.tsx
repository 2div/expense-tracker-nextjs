'use client'

import { useRef } from "react";
import addTranscation from "@/app/actions/addTranscation";
import { toast } from "react-toastify";

const AddTranscation = () => {

    const formRef = useRef<HTMLFormElement>(null)

    const clientAction = async (formData:FormData) => {
        const {data, error} = await addTranscation(formData)

        if (error) {
            toast.error(error)
        } else {
            toast.success('Transacation Added')
            formRef.current?.reset()
        }
    }

    return (
     <>
        <h3>Add Transcation</h3>
        <form ref={formRef} action={clientAction}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" name="text" placeholder="Enter text ..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br /> (negative - expense , positive - income) 
                </label>
                <input type="number" name="amount" id="amount" placeholder="Enter amount..." step={0.01} />
            </div>
            <button className="btn">Add Transcation</button>
        </form>
     </> );
}
 
export default AddTranscation;