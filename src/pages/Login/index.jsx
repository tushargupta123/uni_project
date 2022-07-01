import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../Feature/Auth/authSlice";
import { Link } from "react-router-dom";
import { fetchToken, setToken } from "../../Auth";
import axios from "axios";

function Login() {
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

    <div className="back">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6 pt-5 pb-5">
            <form onSubmit={submitHandler}>
              <div class="card back">
                <div class="card-body">
                  <h5 class="card-title text-center">I am a Borrower!</h5>
                  <h5 class="card-title mt-5 mb-3">Login as Participants</h5>
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
              <div class="card back">
                <div class="card-body">
                  <h5 class="card-title text-center">I am a lender!</h5>
                  <h5 class="card-title mt-5 mb-3">Login as Pool</h5>
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

    // <div className="row bg-dark1 text-white p-3">
    //   <p className="h2 text-center">Account Login</p>
    //   <div className="col-sm-12 col-md-5">
    //     <form
    //       onSubmit={submitHandler}
    //       className=" d-flex flex-column my-4 gap-3 m_l"
    //     >
    //       <div className="row">
    //         <div className="col col-4"></div>
    //         <div className="col col-2">
    //           <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" 
    //           onClick={() =>
    //             setFormData({
    //               ...formData,
    //               type: "pool",
    //             })
    //           } 
    //           />
    //           <label className="btn btn-outline-danger" htmlFor="success-outlined">Pool</label>
    //         </div>
    //         <div className="col col-6">
    //           <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" 
    //           onClick={() =>
    //             setFormData({
    //               ...formData,
    //               type: "participant",
    //             })
    //           } 
    //           />
    //           <label className="btn btn-outline-danger" htmlFor="danger-outlined">Participants</label>
    //         </div>
    //       </div>
    //       <div className="w-100">
    //         <p>Email</p>
    //         <input
    //           type="text"
    //           name="email"
    //           value={email}
    //           onChange={onChange}
    //           placeholder="email "
    //           className="py-1 px-2 border w-100 w-100"
    //         />
    //       </div>
    //       <div className="w-100">
    //         <p>Password</p>
    //         <input
    //           type="password"
    //           name="password"
    //           value={password}
    //           onChange={onChange}
    //           className="py-1 px-2 border w-100"
    //         />
    //       </div>

    //       <input
    //         type="submit"
    //         name="login"
    //         value="Sign In"
    //         className="py-2 px-2 border my-2 sign-in "
    //       />
    //     </form>
    //     <span className="text-white text-underline text-center m_l" role="button"><u>Forgot password ?</u></span>

    //   </div>
    //   <div className="col-sm-12 col-md-2 slash">
    //     <img src="https://th.bing.com/th/id/OIP.8ptK_ecES7pd0jkkaH3OXQHaFi?pid=ImgDet&rs=1" className="slash-img" alt="" />
    //   </div>
    //   <div className="col-sm-12 col-md-5 ">
    //     <div>
    //       <img src="https://th.bing.com/th/id/R.3eb98a4e1c5b233ac6b507690aa54ffd?rik=MVE5oQ85O8uD4w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_2240.png&ehk=Ja50mUjVPNly7cOuZilHDcO%2f5rsrGW8Uyhn5PoI%2b4wk%3d&risl=&pid=ImgRaw&r=0" className="google-img" alt="" />
    //       <input
    //         type="button"
    //         name="google"
    //         value="Sign in with Google"
    //         className="py-1 px-2 border w-75 mt-google"
    //       />
    //     </div>
    //     <div>
    //       <img src="https://th.bing.com/th/id/R.660a02940376e49a6b967b2a156baff4?rik=b4EKIMWCUV%2fvvA&riu=http%3a%2f%2fpixsector.com%2fcache%2fc2d6c2a1%2fav580aef89b415365fb9c.png&ehk=0rUWsvNhjZ6qcf4AslQY2M6ltaz%2f8RSK20TbsMm%2b8Q8%3d&risl=&pid=ImgRaw&r=0" className="facebook-img" alt="" />
    //       <input
    //         type="button"
    //         name="facebook"
    //         value="Sign in with Facebook"
    //         className="py-1 px-2 border w-75 mt-facebook"
    //       />
    //     </div>
    //     <div className="col-12 col-md-9 my-3 mt-4">
    //       <p>
    //         Don't have an account?
    //         <span className="text-warning px-2 text" role="button">
    //           <Link to="/sign-up" className="text-warning" >Register here . </Link>
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
