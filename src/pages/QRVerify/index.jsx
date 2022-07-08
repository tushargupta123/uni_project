import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { signinUser } from "../../Feature/Auth/authSlice";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const QRVerify = () => {

    const { selectedType } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        otp: "",
        type: null,
    });
    const { otp, type } = formData;

    const [qr, setQr] = useState("");
    useEffect(() => {
        getOtp();
    }, []);
    const getOtp = () => {
        fetch("http://127.0.0.1:8000/fa2url").then((result) => {
            result.json().then((res) => {
                console.log("result from qr", res);
                setQr(res);
            })
        })
    };

    const data = JSON.stringify({
        "otp":otp
    });

    function rel_signup(){
        fetch("http://127.0.0.1:8000/rel_signup").then((result) => {
          result.json().then((res) => {
            console.log("result", res);
          })
        })
      };

    const submitHandler = (e) => {
        e.preventDefault();
        if (otp == "") {
            alert("Enter OTP");
        } else {
            fetch("http://127.0.0.1:8000/verify2fa", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(res => res.json())
                .then((data) => {
                    if (data.true){
                    dispatch(signinUser(formData));
                    navigate("/");
                    } else if(data.false){
                        alert("WRONG OTP");
                    } else {
                        alert("Max tries Reached. Try again !!");
                        navigate("/sign-up");
                        rel_signup();
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
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
                    <div className="col col-4 pt-5 pb-5"></div>
                    <div className="col col-4 pt-5 pb-5">
                        {selectedType === "participant" ? (
                            <form onSubmit={submitHandler}>
                                <div className="card back">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">QR OTP VERIFICATION</h5>
                                        <h5 className="text-info mt-5 mb-3">Signing up as Participant</h5>
                                        <QRCodeSVG
                                            value={qr}
                                            style={{ marginLeft: 130 }}
                                        />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={otp}
                                            onChange={onChange}
                                            placeholder="Enter OTP"
                                            className="inp p-2 mb-2 mt-4 w-100"
                                        /><br />
                                        <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign Up" id="danger-outlined" autoComplete="off"
                                            onClick={() => {
                                                setFormData({
                                                    ...formData,
                                                    type: "participant",
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        ) : null}

                        {selectedType === "pool" ? (
                            <form onSubmit={submitHandler}>
                                <div className="card back">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">EMAIL OTP VERIFICATION</h5>
                                        <h5 className="text-info mt-5 mb-3">Signing up as Pool</h5>
                                        <QRCodeSVG
                                            value={qr}
                                            style={{ marginLeft: 130 }}
                                        />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={otp}
                                            onChange={onChange}
                                            placeholder="Enter OTP"
                                            className="inp p-2 mb-2 mt-4 w-100"
                                        /><br />
                                        <input type="submit" className="btn btn-dark w-100 mt-4" value="Sign Up" name="Sign Up" id="danger-outlined" autoComplete="off"
                                            onClick={() => {
                                                setFormData({
                                                    ...formData,
                                                    type: "pool",
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        ) : null}
                    </div>
                    <div className="col col-4 pt-5 pb-5 mt-5 ps-5"></div>
                </div>
            </div>
        </div>
    )
}

export default QRVerify