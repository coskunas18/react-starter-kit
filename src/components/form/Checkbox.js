import { useField } from "formik";
import {FiCheck} from "react-icons/fi"

export default function Checkbox({label,...props}){

    const [field,meta,helpers] = useField(props) 
    return (
        <label className="flex gap-x-2 test-sm cursor-pointer items-center"> 
            <button onClick={()=>{
                helpers.setValue(!field.value)
            }} className="w-5 h-5 rounded border text-transparent flex items-center border-gray-300 justify-center">
                <FiCheck size={16} />
            </button>
            {label}
        </label>
    )


}