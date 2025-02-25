import "./login.css";

export default function Login() {
    return (
        <form className="form-login">
            <legend className="legend-login">Login</legend>
            <input className="input-login" type="email" placeholder="Ingrese correo"/>
            <input className="input-login" type="pasword" placeholder="Ingrese contraseña"/>
            <button className="button-login">Login</button>
        </form>
    )    
}