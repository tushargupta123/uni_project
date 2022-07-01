import { useDispatch, useSelector } from "react-redux";
import Layout from "./layouts";

import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { defaultType } from "./Feature/Auth/authSlice";
import "./app.css";
import wave from './66615-wave-blue-lines.gif';

function App() {
  const dispatch = useDispatch();
  const { selectedType } = useSelector((state) => state.auth);
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const typeSelector = (e) => {
    dispatch(defaultType(e));
    setShow(false);
  };
  return (
    <div>
      <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          className="w-100 h-100 d-flex justify-content-center align-items-center modal_main shadow"
        >
          <div className="row shadow back">
            <div className="col-4 p_50 fs-2 fw-bold back">
              <p className="text-dark">Blook</p>
              <img src={wave} height="350px" width="300px" />
            </div>
            <div className="col-8">
              <div className="h-75 content_oveflow">
                <h1 className="fw-bold">Welcome to the Aladdin® site</h1>

                <p className="h6">
                  Please read this page before proceeding, as it explains
                  certain restrictions imposed by law on the distribution of
                  this information and the jurisdictions in which our products
                  and services are authorised to be offered or sold. It is your
                  responsibility to be aware of and to observe all applicable
                  laws and regulations of any relevant jurisdiction.
                </p>
                <p>
                  By entering this site you are agreeing that you have reviewed
                  and agreed to the terms contained herein, including any legal
                  or regulatory restrictions, the Client and Vendor Privacy
                  Notice, which explains how we collect, use, and disclose your
                  personal information and how it is protected, and the Cookie
                  Notice, which explains how we use cookies on our sites.
                </p>
                <p className="h5">Additional Information</p>
                <p>
                  Investment involves risks. Past performance is not a guide to
                  future performance.
                </p>
              </div>
              <div className="h-25">
                <Modal.Footer>
                  <Button
                    variant="light"
                    onClick={() => typeSelector("decline")}
                    className="shadow"
                  >
                    Decline
                  </Button>
                  <Button
                    variant="dark"
                    onClick={() => typeSelector("accept")}
                    className="shadow"
                  >
                    Accept
                  </Button>
                </Modal.Footer>
              </div>
            </div>
           </div>
          
         </Modal>
       </>
       {selectedType ? <Layout /> : null}
     </div>
  );
}

export default App;
