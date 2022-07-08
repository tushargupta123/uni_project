import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../../Feature/Auth/authSlice";

function SignUp() {
  const { selectedType } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usernameParticipant: "",
    passwordParticipant: "",
    type: null,
    full_nameParticipant: "",
    usernamePool: "",
    passwordPool: "",
    full_namePool: ""
  });
  const { usernameParticipant, passwordParticipant, type, full_nameParticipant, usernamePool, passwordPool, full_namePool } = formData;

  var data = JSON.stringify({
    "username": usernameParticipant,
    "password": passwordParticipant,
    "full_name": full_nameParticipant
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (type === 'participant') {
      if ((usernameParticipant == "") || (passwordParticipant == "") || (full_nameParticipant == "")) {
        alert("Please fill in the above information in PARTICIPANT");
      } else {
        var data = JSON.stringify({
          "username": usernameParticipant,
          "password": passwordParticipant,
          "full_name": full_nameParticipant
        })
        fetch("http://127.0.0.1:8000/Signup", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: data
        }).then(res => res.json())
          .then((data) => {
            if (data) {
              dispatch(signinUser(formData));
              navigate("/sign_verify");
            }
          }).catch((err) => {
            console.log(err);
          })
      }
    } else if (type === 'pool') {
      if ((usernamePool == "") || (passwordPool == "") || (full_namePool == "")) {
        alert("Please fill in the above information in Pool");
      } else {
        var data = JSON.stringify({
          "username": usernamePool,
          "password": passwordPool,
          "full_name": full_namePool
        })
        fetch("http://127.0.0.1:8000/Signup", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: data
        }).then(res => res.json())
          .then((data) => {
            if (data) {
              dispatch(signinUser(formData));
              navigate("/sign_verify");
            }
          }).catch((err) => {
            console.log(err);
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

    <div className="back shadow">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6 pt-5 pb-5">
            <form onSubmit={submitHandler}>
              <div className="card back">
                <div className="card-body">
                  <h5 className="card-title text-center text-bold">Participants</h5>
                  <input
                    type="email"
                    name="usernameParticipant"
                    value={usernameParticipant}
                    onChange={onChange}
                    placeholder="Enter your Email "
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
                  <input
                    type="text"
                    name="full_nameParticipant"
                    value={full_nameParticipant}
                    onChange={onChange}
                    placeholder="Enter your Full_name"
                    className="inp p-2 mb-2 w-100"
                  /><br />
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
              <div className="card back">
                <div className="card-body">
                  <h5 className="card-title text-center text-bold">Pool</h5>
                  <input
                    type="email"
                    name="usernamePool"
                    value={usernamePool}
                    onChange={onChange}
                    placeholder="Enter your Email "
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
                  <input
                    type="text"
                    name="full_namePool"
                    value={full_namePool}
                    onChange={onChange}
                    placeholder="Enter your Full_name"
                    className="inp p-2 mb-2 w-100"
                  /><br />
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
