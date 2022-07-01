import React from 'react';

const Verifictaion = () => {
    return (
        <div className="back">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-6 pt-5 pb-5">
              <form>
                <div class="card back">
                  <div class="card-body">
                    <h5 class="card-title"> <img src="https://www.atulhost.com/wp-content/uploads/2017/08/aadhaar.jpg" height="70px" width="100px" /> AADHAR VERIFICATION</h5>
                    <input
                      type="text"
                      name="aadhar"
                      placeholder="Enter your Aadhar No. "
                      className="inp p-2 mb-3 mt-3 w-100"
                    /><br />
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      className="inp p-2 mb-4 w-100"
                    /><br />
                  </div>
                </div>
              </form>
            </div>
            <div className="col col-sm-12 col-md-6 pt-5 pb-5">
              <form>
                <div class="card back">
                  <div class="card-body">
                    <h5 class="card-title"> <img src="https://bfsi.eletsonline.com/wp-content/uploads/2017/03/NSDL.jpg" height="70px" width="100px" /> PAN CARD VERIFICATION</h5>
                    <input
                      type="text"
                      name="pan"
                      placeholder="Enter your Pan No. "
                      className="inp p-2 mb-3 mt-3 w-100"
                    /><br />
                    <input
                      type="date"
                      name="date"
                      placeholder="DD/MM/YYYY"
                      className="inp p-2 mb-4 w-100"
                    /><br />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col col-11"></div>
            <div className="col col-1">
          <button type="submit" className="btn btn-dark mb-3" value="Verify" name="Verify">Verify</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Verifictaion