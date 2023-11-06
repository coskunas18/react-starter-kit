import { useField } from "formik";

export default function Selectbox({label, options,original = false,...props}){

    const [field,meta,helpers] = useField(props) 


    const changeHandle = e => {
        let selected = options.find(option => option.key === +e.target.value) // buradaki +  sayıya çevirdi
        helpers.setValue(original ? selected : +e.target.value )
    }

    return (
        <label className="block w-full">
            <div className="text-sm text-gray-700">{label}</div>
            <select className="w-full h-10 border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props} >
                {options.map((option,key)=>(
                    <option value={option.key} key={key} >{option.value}</option>
                ))}
            </select>
        </label>
    )


}