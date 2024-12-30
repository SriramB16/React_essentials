import {useInput} from "../hooks/useInput.js";
import Input from "./Input.jsx";
import {isEmail, hasMinLength, isNotEmpty} from "../util/validation.js";

export default function Login() {
    // const [enteredValue, setEnteredValue] = useState({
    //     email: "", password: "",
    // });
    //
    // const [isEdited, setIsEdited] = useState({
    //     email: false, password: false,
    // });

    // const emailIsInvalid =
    //   enteredValue.email !== "" && !enteredValue.email.includes("@");

    // const emailIsInvalid = isEdited.email && !isEmail(enteredValue.email) && !isNotEmpty(enteredValue.email);
    // const passwordIsInvalid = isEdited.password && !hasMinLength(enteredValue.password, 8);

    // function handleInputChange(identifier, value) {
    //     setEnteredValue((prevState) => ({
    //         ...prevState, [identifier]: value,
    //     }));
    //
    //     setIsEdited(prevState => ({
    //         ...prevState, [identifier]: false,
    //     }))
    // }
    //
    // function handleInputBlur(identifier) {
    //     setIsEdited((prevState) => ({
    //         ...prevState, [identifier]: true,
    //     }));
    // }

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
    }

    return (<form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={emailValue}
                error={emailHasError && 'Please enter a valid email!'}
            />

            <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                value={passwordValue}
                error={passwordHasError && 'Please enter a valid password!'}
            />
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
        </p>
    </form>);
}
