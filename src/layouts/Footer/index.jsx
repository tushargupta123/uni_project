import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });

  const { selectedType } = useSelector((state) => state.auth);

  const { fName, lName, email, companyName, phoneNumber } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (selectedType === "decline") {
    return (
      <div className="back shadow">
        <ul className="py-3 d-flex list-unstyled border border-dark footer_decline d-flex flex-wrap">
          <li className="mx-2" role="button">
            Terms & Condition
          </li>
          <li className="mx-2" role="button">
            Privacy Policy
          </li>
          <li className="mx-2" role="button">
            Business Continuity
          </li>
          <li className="mx-2" role="button">
            Finra Brook Check
          </li>
          <li className="mx-2" role="button">
            Manage Cookies
          </li>
        </ul>
        <p>&copy; 2022 BlackRock, Inc. All rights reserved.</p>
        <p>
          This material is provided for informational purposes only and is not
          intended to be relied upon as a forecast, research or investment
          advice, and is not a recommendation, offer or solicitation to buy or
          sell any securities or to adopt any investment strategy. The opinions
          expressed are subject to change at any time without notice. References
          to specific securities, asset classes and financial markets are for
          illustrative purposes only and are not intended to be and should not
          be interpreted as recommendations.
        </p>
        <p>
          This material may contain “forward-looking” information that is not
          purely historical in nature. Such information may include, among other
          things, projections, forecasts, estimates of yields or returns, and
          proposed or expected portfolio composition. Moreover, any historical
          performance information of other investment vehicles or composite
          accounts managed by BlackRock, Inc. and/or its subsidiaries (together,
          “BlackRock”) included in this material is presented by way of example
          only. No representation is made that any performance presented will be
          achieved, or that every assumption made in achieving, calculating or
          presenting either the forward-looking information or the historical
          performance information herein has been considered or stated in
          preparing this material. Any changes to assumptions that may have been
          made in preparing this material could have a material impact on the
          investment returns that are presented herein by way of example. Past
          performance is no guarantee of future results.
        </p>
        <p>
          The information and opinions contained in this material are derived
          from proprietary and nonproprietary sources deemed by BlackRock to be
          reliable, are not necessarily all-inclusive and are not guaranteed as
          to accuracy.
        </p>
      </div>
    );
  }
  if (selectedType === "accept") {
    return (
      <div className="back shadow"><hr />
      
        <ul className="d-flex list-unstyled container">
          <li role="button">
            Terms & Condition
          </li>
          <li className="mx-4" role="button">
            Privacy Policy
          </li>
          <li className="mx-4" role="button">
            Business Continuity
          </li>
          <li className="mx-4" role="button">
            Finra Brook Check
          </li>
          <li className="mx-4" role="button">
            Manage Cookies
          </li>
        </ul>
        <hr />
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Products</h5>
            <ul className="py-3 d-flex flex-column accept_ul">
              <Link to="/#!" className="text-dark text-decoration-none d-block">
                Aladin Enterprise
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                Aladin Risk
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                Aladin Accounting
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>Solutions</h5>
            <ul className="py-3 d-flex flex-column accept_ul">
              <Link to="/#!" className="text-dark text-decoration-none d-block">
                Compliance
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                Operations
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                Technology
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5>About Us</h5>
            <ul className="py-3 d-flex flex-column accept_ul">
              <Link to="/#!" className="text-dark text-decoration-none d-block">
                In the News
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                Contact Us
              </Link>
              <Link to="/#!" className="text-dark text-decoration-none">
                FAQ's
              </Link>
            </ul>
          </div>
        </div>
        <p>&copy; 2022 BlackRock, Inc. All rights reserved.</p>
        <p>
          This material is provided for informational purposes only and is not
          intended to be relied upon as a forecast, research or investment
          advice, and is not a recommendation, offer or solicitation to buy or
          sell any securities or to adopt any investment strategy. The opinions
          expressed are subject to change at any time without notice. References
          to specific securities, asset classes and financial markets are for
          illustrative purposes only and are not intended to be and should not
          be interpreted as recommendations.
        </p>
        <p>
          This material may contain “forward-looking” information that is not
          purely historical in nature. Such information may include, among other
          things, projections, forecasts, estimates of yields or returns, and
          proposed or expected portfolio composition. Moreover, any historical
          performance information of other investment vehicles or composite
          accounts managed by BlackRock, Inc. and/or its subsidiaries (together,
          “BlackRock”) included in this material is presented by way of example
          only. No representation is made that any performance presented will be
          achieved, or that every assumption made in achieving, calculating or
          presenting either the forward-looking information or the historical
          performance information herein has been considered or stated in
          preparing this material. Any changes to assumptions that may have been
          made in preparing this material could have a material impact on the
          investment returns that are presented herein by way of example. Past
          performance is no guarantee of future results.
        </p>
        <p>
          The information and opinions contained in this material are derived
          from proprietary and nonproprietary sources deemed by BlackRock to be
          reliable, are not necessarily all-inclusive and are not guaranteed as
          to accuracy.
        </p>
      </div>
      </div>
    );
  }
  if (selectedType === "participant") {
    return (
      <div className="bg-dark d-flex flex-column justify-content-center align-items-center text-white py-3">
        <h5>Explore other Aladin product</h5>
        <div className="d-flex gap-4">
          <Link
            to="/#!"
            className="d-flex flex-row gap-1 text-white align-items-center text-decoration-none"
          >
            <IoIosArrowForward /> <p className="p-0 m-0"> Aladin Risk</p>
          </Link>
          <Link
            to="/#!"
            className="d-flex flex-row gap-1 text-white align-items-center text-decoration-none"
          >
            <IoIosArrowForward /> <p className="p-0 m-0"> Aladin Account</p>
          </Link>
          <Link
            to="/#!"
            className="d-flex flex-row gap-1 text-white align-items-center text-decoration-none"
          >
            <IoIosArrowForward /> <p className="p-0 m-0"> Aladin Wealth</p>
          </Link>
        </div>
        <div
          className="w-100 my-3"
          style={{
            height: "2px",
            backgroundColor: "#ffffff",
          }}
        ></div>
        <Link
          to="/#!"
          className="d-flex flex-row gap-1 text-white align-items-center text-decoration-none"
        >
          <IoIosArrowForward />{" "}
          <p className="p-0 m-0">Contact us to see how we can help</p>
        </Link>
      </div>
    );
  }
  if (selectedType === "pool") {
    return (
      <div className="py-3 bg-dark text-white">
        <h5 className="text-uppercase px-3">Aladin Additional Studio</h5>
        <div className="row px-3">
          <div className="col-12 col-md-6 d-flex flex-column">
            <Link
              to="/#!"
              className="d-flex text-white flex-row gap-1 text-dark align-items-center text-decoration-none"
            >
              <IoIosArrowForward />
              <p className="p-0 m-0">Aladin Studio</p>
            </Link>
            <Link
              to="/#!"
              className="d-flex text-white flex-row gap-1 text-dark align-items-center text-decoration-none"
            >
              <IoIosArrowForward />
              <p className="p-0 m-0">Aladin Data Cloud</p>
            </Link>
            <Link
              to="/#!"
              className="d-flex text-white flex-row gap-1 text-dark mb-3 align-items-center text-decoration-none"
            >
              <IoIosArrowForward />
              <p className="p-0 m-0">Aladin Data xChange</p>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
            <Link
              to="/#!"
              className="d-flex flex-row gap-1 text-white text-dark align-items-center text-decoration-none"
            >
              <IoIosArrowForward />
              <p className="p-0 m-0">Aladin Compute</p>
            </Link>
            <Link
              to="/#!"
              className="d-flex flex-row gap-1 text-dark text-white align-items-center text-decoration-none"
            >
              <IoIosArrowForward />
              <p className="p-0 m-0">Aladin Tools</p>
            </Link>
          </div>
        </div>
        <h4 className="px-3">Get in touch to learn more</h4>
        <form onSubmit={submitHandler} className="px-3">
          <div className="row">
            <div className="col-12 col-md-4 my-2  ">
              <input
                type="text"
                name="fName"
                value={fName}
                onChange={onChange}
                className="w-100"
                placeholder="First Name"
              />
            </div>
            <div className="col-12 col-md-4 my-2  ">
              <input
                type="text"
                name="lName"
                value={lName}
                onChange={onChange}
                className="w-100"
                placeholder="Last Name"
              />
            </div>
            <div className="col-12 col-md-4 my-2  ">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-100"
                placeholder="Business Email"
              />
            </div>
            <div className="col-12 col-md-4 my-2  ">
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={onChange}
                className="w-100"
                placeholder="Company Name"
              />
            </div>
            <div className="col-12 col-md-4 my-2  ">
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                className="w-100"
                placeholder="Phone number"
              />
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-2">
              <input type="submit" value="Submit" className="px-3 py-2" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Footer;
