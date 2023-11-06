import { Formik,Form,Field } from "formik"
import Input from "../components/form/Input"
import File from "../components/form/File"
import Checkbox from "../components/form/Checkbox"
import TextArea from "../components/form/Textarea"
import Selectbox from "../components/form/Selectbox"
import Radio from "../components/form/Radio"
import { SampleSchema } from "../validations"

export default function Contact(params) {

    return(
        <div>
            <h3>İletişim</h3>
            <Formik initialValues={{ 
                name:'Coşkun',
                about:'',
                accept:true,
                gender:2,
                level:'',
                skills:['php','css'],
                avatar:''
             }}
             validationSchema={SampleSchema}
             onSubmit={values=>{
                console.log(values)
             }}
             >
             
             {({ values, handleSubmit }) => (
                <Form className="grid gap-y-4 p-4 m-4 border rounded shadow-lg">
                    <Input label="Ad Soyad" name="name" /><br/>
                    <TextArea label="Hakkında"  name="about" /><br/>
                    <Checkbox label="Kuralları kabul ediyorum" name="accept" /><br/>
                    <Selectbox label="Cinsiyet" name="gender" original={true} options={[
                        {key:1,value:'Kadın'},
                        {key:2,value:'Erkek'},
                    ]} /><br/>
                    <Radio label="Seviyenizi Seçin" name="level" options={[
                        {key:'jr',value:'Jr. Devoloper'},
                        {key:'sr',value:'Sr. Devoloper'},
                        {key:'ninja',value:'Ninja'},
                    ]} />
                    <File name="avatar" label="avatar" /><br/>
                    <button className="" disabled={!values.accept} type="submit">Gönder</button>
                </Form>
            )}
            </Formik>
        </div>
    )
    
}