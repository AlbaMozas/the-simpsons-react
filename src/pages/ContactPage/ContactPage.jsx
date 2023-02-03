
import { useForm } from "react-hook-form";
import ErrorsMessage from "../../components/ErrorsMessage/ErrorsMessage";
import './ContactPage.css';


export default function ContactPage() {
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className="back">
            <form onSubmit = {handleSubmit(submit)}>
                <label className="imput">
                    <h1 className="tittle">name:</h1>
                    <input type = "text" {...register("name", {required: true})} ></input>
                </label>
                <span>
                    {/* {errors.name && errors.name.type === "required" && "El nombre es requerido"} */}
                    <ErrorsMessage errors={errors} name= "name"></ErrorsMessage>
                </span>
                <label>
                    <h1 className="tittle">correo:</h1>
                    <input type = "email" {...register("email", {required: true})} ></input>
                    {/* {errors.name && errors.name.type === "required" && "El correo es requerido"} */}
                    <ErrorsMessage errors={errors} email= "email"></ErrorsMessage>
                </label>
                <select>
                    <option>Español</option>
                    <option>Inglés</option>
                    <option>Alemán</option>
                </select>
                <button>Enviar</button>
            </form>
        
        </div>
    )
}