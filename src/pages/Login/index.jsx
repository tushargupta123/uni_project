import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Feature/Auth/authSlice";
import { Link } from "react-router-dom";
import { fetchToken, setToken } from "../../Auth";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [formData, setFormData] = useState({
    usernamePool: "",
    usernameParticipant: "",
    passwordPool: "",
    passwordParticipant: "",
    type: null,
  });

  var { usernamePool, usernameParticipant, passwordPool, passwordParticipant, type } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    if (type === 'participant') {
      if (usernameParticipant == "" || passwordParticipant == "") {
        alert("Please fill in the above information in PARTICIPANT");
      } else {
        var logInData = new FormData();
        logInData.append('username', usernameParticipant);
        logInData.append('password', passwordParticipant);
        fetch("http://127.0.0.1:8000/token", {
          method: 'POST',
          body: logInData
        }).then(res => res.json())
          .then((data) => {
            if (data.access_token) {
              setToken(data.access_token);
              dispatch(loginUser(formData));
              navigate("/home");
            }
          })
          .catch((err) => {
            console.log("error", err);
          })
      }
    } else if (type === 'pool') {
      if (usernamePool == "" || passwordPool == "") {
        alert("Please fill in the above information in POOL");
      } else {
        var logInData = new FormData();
        logInData.append('username', usernamePool);
        logInData.append('password', passwordPool);
        fetch("http://127.0.0.1:8000/token", {
          method: 'POST',
          body: logInData
        }).then(res => res.json())
          .then((data) => {
            console.log("data is ", data);
            console.log(data.access_token);
            if (data.access_token) {
              setToken(data.access_token);
              dispatch(loginUser(formData));
              navigate("/home");
            }
          })
          .catch((err) => {
            console.log("error", err);
          })
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {fetchToken() ? (
        navigate("/home")
      ) : (
        <div className="back shadow">
          <div className="container">
            <div className="row">
              <div className="col col-sm-12 col-md-6 pt-5 pb-5">
                <form onSubmit={submitHandler}>
                  <div className="card back">
                    <div className="card-body">
                      <h5 className="card-title text-center">I am a Borrower!</h5>
                      <h5 className="card-title mt-5 mb-3">Login as Participants</h5>
                      <input
                        type="email"
                        name="usernameParticipant"
                        value={usernameParticipant}
                        onChange={onChange}
                        placeholder="Enter your username "
                        className="inp p-2 mb-3 mt-3 w-100"
                      /><br />
                      <input
                        type="password"
                        name="passwordParticipant"
                        value={passwordParticipant}
                        onChange={onChange}
                        placeholder="Enter your Password"
                        className="inp p-2 mb-2 w-100"
                      /><br />
                      <span className="text-dark text-underline" role="button"><u>Forgot password ?</u></span>
                      <input type="submit" className="btn btn-dark w-100 mt-4" value="Log In" name="Sign In" id="danger-outlined" autoComplete="off"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            type: "participant",
                          })
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col col-sm-12 col-md-6 pt-5 pb-5">
                <form onSubmit={submitHandler}>
                  <div className="card back">
                    <div className="card-body">
                      <h5 className="card-title text-center">I am a lender!</h5>
                      <h5 className="card-title mt-5 mb-3">Login as Pool</h5>
                      <input
                        type="email"
                        name="usernamePool"
                        value={usernamePool}
                        onChange={onChange}
                        placeholder="Enter your username "
                        className="inp p-2 mb-3 mt-3 w-100"
                      /><br />
                      <input
                        type="password"
                        name="passwordPool"
                        value={passwordPool}
                        onChange={onChange}
                        placeholder="Enter your Password"
                        className="inp p-2 mb-2 w-100"
                      /><br />
                      <span className="text-dark text-underline" role="button"><u>Forgot password ?</u></span>
                      <input type="submit" className="btn btn-dark w-100 mt-4" value="Log In" name="Sign In" id="danger-outlined" autoComplete="off"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            type: "pool",
                          })
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row text-center">
              <p>
                Don't have an account?
                <span className="text-warning px-2 text" role="button">
                  <Link to="/sign-up" className="text-warning" >Register here . </Link>
                </span>
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Login;
