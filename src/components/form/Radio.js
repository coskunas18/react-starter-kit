import { useField } from "formik";
import {FiCheck} from "react-icons/fi"
import classNames from "classnames";

export default function Radio({label,options,...props}){

    const [field,meta,helpers] = useField(props) 

    return <div className={"grid gap-y-2"}>

        <div className="text-sm text-gray-600 block mb-1">{label}</div>
         {options.map((option,key)=>(
        <label key={key} className="flex gap-x-2 test-sm cursor-pointer items-center"> 
        <button type="button" onClick={() => helpers.setValue(option.key)} className={classNames({
            'w-5 h-5 rounded-full border transition-all flex items-center  justify-center' : true,
            'border-gray-300 text-transparent' : field.value !== option.key,
            'border-blue-600 text-transparent' : field.value === option.key,
        })}>
            <div className={classNames({
                "h-3 w-3 rounded-full":true,
                " bg-blue-600" : field.value === option.key
                })}/>
            <FiCheck size={16} />
        </button>
        {option.value}
    </label>
    )) }
    </div>
  
    


}