import { useField } from "formik";

export default function TextArea({label,...props}){

    const [field,meta,helpers] = useField(props) 

    return (
        <label className="block w-full">
            <div className="text-sm text-gray-700 block mb-1.5">{label}</div>
            <textarea className="w-full h-10 border-b resize-none outline-none focus:border-black" {...field} {...props} />
        </label>
    )


}