import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false,
  });

  // const emailIsInvalid =
  //   enteredValue.email !== "" && !enteredValue.email.includes("@");

  const emailIsInvalid = isEdited.email && !enteredValue.email.includes("@");

  function handleInputChange(identifier, value) {
    setEnteredValue((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    setIsEdited(prevState => ({
        ...prevState,
        [identifier]: false,
    }))
  }

  function handleInputBlur(identifier) {
    setIsEdited((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid Email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
