import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../Feature/Auth/authSlice";
import { Link } from "react-router-dom";
import { fetchToken, setToken } from "../../Auth";
import axios from "axios";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: null,
  });
  const { email, password, type } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate("/sign_verify");
    // if ((email == "") & (password == "")) {
    //   return;
    // } else {
    //   // make api call to our backend. we'll leave thisfor later
    //   axios
    //     .post("http://localhost:8000/login", {
    //       email: email,
    //       password: password,
    //     })
    //     .then(function (response) {
    //       console.log(response.data.token, "response.data.token");
    //       if (response.data.token) {
    //         setToken(response.data.token);
    //         dispatch(loginUser(formData));
    //         navigate("/home");
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error, "error");
    //     });
    // }
  };

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  return (

    <div className="back">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6 pt-5 pb-5">
            <form onSubmit={submitHandler}>
              <div class="card back">
                <div class="card-body">
                  <h5 class="card-title text-center text-bold">Participants</h5>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your Email "
                    className="inp p-2 mb-3 mt-3 w-100"
                  /><br />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Enter your Password"
                    className="inp p-2 mb-2 w-100"
                  /><br />
                  <span className="text-dark text-underline" role="button"><u>Forgot password ?</u></span>
                  <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign In" id="danger-outlined" autoComplete="off"
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
              <div class="card back">
                <div class="card-body">
                  <h5 class="card-title text-center text-bold">Pool</h5>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your Email "
                    className="inp p-2 mb-3 mt-3 w-100"
                  /><br />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Enter your Password"
                    className="inp p-2 mb-2 w-100"
                  /><br />
                  <span className="text-dark text-underline" role="button"><u>Forgot password ?</u></span>
                  <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign In" id="danger-outlined" autoComplete="off"
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
      </div>
    </div>
  );
}

export default SignUp;
