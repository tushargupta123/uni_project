import React from "react";
import { Button } from "react-bootstrap";

function Escrow_account() {
  return(
    <div className="back shadow">
      <div className="container">
        <div className="row pt-5 pb-5">
            <div className="col col-md-12 col-lg-4">
          <div className="card back">
            <div className="body p-2">
              <div className="card-title pt-3 pb-3">Escrow account balance</div>
              <p className="annexure p-3"></p>
            </div>
          </div>
          </div>
          <div className="col col-md-12 col-lg-4">
          <div className="card back">
            <div className="body p-2">
              <div className="card-title pt-3 pb-3">Escrow account coin balance</div>
              <p className="annexure p-3"></p>
            </div>
          </div>
          </div>
          <div className="col col-md-12 col-lg-4">
          <div className="card back">
            <div className="body p-2">
              <div className="card-title pt-3 pb-3">Last 10 transactions</div>
              <p className="annexure p-3"></p>
            </div>
          </div>
          </div>
        </div>
        <div className='row pb-5'>
        <div className="card back">
            <div className="body p-2">
              <div className="card-title pt-3 pb-3">Account status</div>
              <p className="annexure p-3"></p>
            </div>
          </div>
            </div>
      </div>
    </div>
  );
}

export default Escrow_account;
