import * as React from "react";
import { useState, useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import API from "../../helpers/api";

const Login = () => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");

  const [loginErrorText, setLoginErrorText] = useState("");
  const [buttonState, setButtonState] = useState("ACTIVE");

  const currentUserContext = useContext(CurrentUserContext);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setButtonState("DISABLED");
    API.post(
      "api/user-signin",
      {
        user: {
          email,
          password
        }
      },
      { withCredentials: true }
    )
      .then(response => {
        resetEmail();
        resetPassword();
        setButtonState("ACTIVE");
        currentUserContext.loginUser(response.data);
      })
      .catch(error => {
        setButtonState("ACTIVE");
        setLoginErrorText(
          "There was an error logging you in. Please make sure you're using the correct DevCamp credentials and try again"
        );
        console.log("login error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="sign-in-form">
      <div className="content grid-1">
        <div>
          <div className="headline">
            <h1>MLB Logo goes here...</h1>
          </div>

          <div className="subtitle">Login with your DevCamp Account</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" {...bindEmail} className="text-field" />
            <label>Email</label>
          </div>

          <div className="form-group">
            <input type="password" {...bindPassword} className="text-field" />
            <label>password</label>
          </div>

          <div className="button-wrapper">
            {buttonState === "ACTIVE" ? (
              <button className="btn-primary" type="submit">
                Login
              </button>
            ) : null}

            {buttonState === "DISABLED" ? (
              <button className="btn-loading" type="submit">
                <FontAwesomeIcon icon="spinner" spin />
              </button>
            ) : null}
          </div>

          <div className="form-error-text">{loginErrorText}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
