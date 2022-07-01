import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../Feature/Auth/authSlice";

const Sign_verify = () => {
    const { selectedType } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        otp: "",
        type: null,
    });
    const { name, otp, type } = formData;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
        // navigate("/home");
        navigate("/");
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
        <div className='back'>
            <div className="container">
                <div className="row">
                    <div className="col col-4"></div>
                    <div className="col col-4 pt-5 pb-5">
                        {selectedType === "participant" ? (
                            <form onSubmit={submitHandler}>
                                <div class="card back">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">OTP VERIFICATION</h5>
                                        <h5 class="text-info mt-5 mb-3">Signing up as Participant</h5>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={onChange}
                                            placeholder="Enter your Name "
                                            className="inp p-2 mb-3 mt-3 w-100"
                                        /><br />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={otp}
                                            onChange={onChange}
                                            placeholder="Enter OTP"
                                            className="inp p-2 mb-2 w-100"
                                        /><br />
                                        <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign Up" id="danger-outlined" autoComplete="off"
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
                        ) : null}

                        {selectedType === "pool" ? (
                            <form onSubmit={submitHandler}>
                                <div class="card back">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">OTP VERIFICATION</h5>
                                        <h5 class="text-info mt-5 mb-3">Signing up as Pool</h5>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={onChange}
                                            placeholder="Company Name"
                                            className="inp p-2 mb-3 mt-3 w-100"
                                        /><br />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={otp}
                                            onChange={onChange}
                                            placeholder="Enter OTP"
                                            className="inp p-2 mb-2 w-100"
                                        /><br />
                                        <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign Up" id="danger-outlined" autoComplete="off"
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
                        ) : null}

                    </div>
                    <div className="col col-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Sign_verify