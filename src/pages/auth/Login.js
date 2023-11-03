import { useFormik,Formik, Form, Field } from "formik";
import { useAuth } from "../../context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"

export default function Login()
 {
    const {setUser} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    return (
<div>
    <h1>Login Page</h1>
    <Formik
        initialValues={{ 
            username: '',
            password: ''
        }}
        onSubmit={values => {
            setUser(values);
            navigate(location?.state?.return_url || '/', {
                replace: true
            });
        }}
    >
        <Form>
            <div>
                <label htmlFor="username">Username:</label>
                <Field type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" />
            </div>
            <button type="submit">Giriş yap</button>
        </Form>
    </Formik>
</div>
    )
}