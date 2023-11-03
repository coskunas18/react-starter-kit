import { useField } from "formik";
import {FiCheck} from "react-icons/fi"


export default function File({label,...props}){

    const [field,meta,helpers] = useField(props) 

    async function fileOpen(params) {
        try {
            const [fileHandle]  = await window.showOpenFilePicker()
            const file = await fileHandle.getFile();
            helpers.setValue(file)
        } catch (error) {
            helpers.setValue('')
        }
    }

    return (

        <div className="block w-full">
        <div className="text-sm text-gray-700">{label}</div>
        <button type="button" onClick={fileOpen} className="px-5 rounded inline-flex items-center gap-2 bg-blue-100 text-blue-600 h-10">
            {field.value && <> Dosya seçildi <FiCheck size={15}/> </> }
            {!field.value && <> Dosya seçiniz </> }
        </button>
        {field.value && <button onClick={()=>{helpers.setValue('')}} className="flex w-full text-sm underline text-gray-600 mt-2">
            Dosyayı kaldır
        </button> }
        </div>

    )


}