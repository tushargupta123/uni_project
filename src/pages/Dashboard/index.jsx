import React from "react";

function Dashboard() {
  return(
    <div className="back shadow">
      <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col col-sm-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Pending ...</div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-dark">Pay Now</button>
              </div>
            </div>
          </div>
          </div>
          <div className="col col-lg-4 col-sm-12">
            <div className="row">
            <p className="annexure p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe est assumenda dolores vero officiis voluptas eveniet accusamus, architecto nam cupiditate, quos ratione ea incidunt? 
            <div className="d-flex justify-content-end">
                <button className="btn btn-light">Pay Now</button>
              </div>
              </p>
          </div>
          <div className="row">
            <p className="annexure p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe est assumenda dolores vero officiis voluptas eveniet accusamus, architecto nam cupiditate, quos ratione ea incidunt? 
            <div className="d-flex justify-content-end">
                <button className="btn btn-light">Pay Now</button>
              </div>
              </p>
          </div>
          <div className="row">
            <p className="annexure p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe est assumenda dolores vero officiis voluptas eveniet accusamus, architecto nam cupiditate, quos ratione ea incidunt? 
            <div className="d-flex justify-content-end">
                <button className="btn btn-light me-4">Pay Now</button>
                <button className="btn btn-light">Pay Now</button>
              </div>
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
