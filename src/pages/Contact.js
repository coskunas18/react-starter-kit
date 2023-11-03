import { Formik,Form,Field } from "formik"
import Input from "../components/form/Input"
import File from "../components/form/File"
import Checkbox from "../components/form/Checkbox"

export default function Contact(params) {

    return(
        <div>
            <h3>İletişim</h3>
            <Formik initialValues={{ 
                name:'Coşkun',
                about:'',
                accept:true,
                gender:1,
                skills:['php','css'],
                avatar:''
             }}
             onSubmit={values=>{
                console.log(values)
             }}
             >
             
             {({ values, handleSubmit }) => (
                <Form className="p-6">
                    <Input label="Ad Soyad" name="name" /><br/>
                    <Field as="textarea" name="about" /><br/>
                    <Checkbox label="Kuralları kabul ediyorum" name="accept" /><br/>
                    <Field component="select" name="gender">
                        <option value={1}>Erkek</option>
                        <option value={2}>Kadın</option>
                    </Field><br/>
                    <File name="avatar" label="avatar" /><br/>
                    <button disabled={!values.accept} type="submit">Gönder</button>
                    <pre>{JSON.stringify(values)}</pre>
                </Form>
            )}
            </Formik>
        </div>
    )
    
}