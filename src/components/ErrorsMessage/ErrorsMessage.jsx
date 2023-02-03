export default function ErrorsMessage({errors, name, email}){
    return(
        <div>
            {errors[name] && errors[name].type === "required" && "El nombre es requerido"}
            {errors[email] && errors[email].type === "required" && "El correo es requerido"}
            
        </div>
    )
}