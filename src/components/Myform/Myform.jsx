
import React, {
    useState
} from 'react';
import './Myform.css';


const Myform = () => {
    const [login, setLogin] = useState("");
    const [loginlValid, setloginlValid] = useState(false);
    const [formError, setformError] = useState("");
    const [colorInput, setcColorInput] = useState("")

    const handleInputChange = (e) => {
        setLogin(e.target.value);
        if (e.target.value.length > 0 && e.target.value.match("^[a-zA-Z\s]+$")) {
            setloginlValid(true);
            setformError("");
            setcColorInput("greenform")
        } else {
            setformError("Please enter the name in Latin characters, without numbers and other symbols");
            setloginlValid(false);
            setcColorInput("errorform")
        }
    }

    return (
        <form className="row" noValidate>
            <h2>Sign up (function component)</h2>
            <input
                required
                name="login"
                type="text"
                placeholder="Your name"
                value={login}
                onChange={handleInputChange}
                className={`standartinput ${colorInput}`}
            />
            <button type="submit" disabled={!loginlValid}>Sign up</button>
            <div>
                <p className="formError">{formError}</p>
            </div>
        </form >
    );
}

export default Myform;