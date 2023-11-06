import Yup from "./validation"

export const SampleSchema =  Yup.object().shape({
 name:Yup.string()
 .required()
 .min(6)
})