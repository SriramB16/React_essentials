import {useState} from "react";
import Input from "./Input.jsx";
import {isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";

export default function Login() {
    const [enteredValue, setEnteredValue] = useState({
        email: "", password: "",
    });

    const [isEdited, setIsEdited] = useState({
        email: false, password: false,
    });

    // const emailIsInvalid =
    //   enteredValue.email !== "" && !enteredValue.email.includes("@");

    const emailIsInvalid = isEdited.email && !isEmail(enteredValue.email) && !isNotEmpty(enteredValue.email);
    const passwordIsInvalid = isEdited.password && !hasMinLength(enteredValue.password, 8);

    function handleInputChange(identifier, value) {
        setEnteredValue((prevState) => ({
            ...prevState, [identifier]: value,
        }));

        setIsEdited(prevState => ({
            ...prevState, [identifier]: false,
        }))
    }

    function handleInputBlur(identifier) {
        setIsEdited((prevState) => ({
            ...prevState, [identifier]: true,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(enteredValue);
    }

    function handleReset() {
        setEnteredValue({
            email: "", password: "",
        });
    }

    return (<form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label='Email' id='email' type="email"
                       value={enteredValue.email}
                       name="email"  onBlur={() => handleInputBlur("email")}
                       onChange={(e) => handleInputChange("email", e.target.value)}
                       error={emailIsInvalid && 'Please enter a valid email'}/>

                <Input label='Password' id='password' type="password"
                       value={enteredValue.password}
                       name="email"  onBlur={() => handleInputBlur("password")}
                       onChange={(e) => handleInputChange("password", e.target.value)}
                       error={passwordIsInvalid && 'Please enter a valid password'}/>
            </div>

            <p className="form-actions">
                <button className="button button-flat" onClick={handleReset}>Reset</button>
                <button className="button">Login</button>
            </p>
        </form>);
}
