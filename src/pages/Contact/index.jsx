import React from "react";
import { Button } from "react-bootstrap";

function Contact() {
  return(
    <div className="back shadow">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="card back">
            <div className="body">
              <div className="card-title pt-3 pb-3">ANNEXURE - 1</div>
              <p className="annexure p-3">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
              <input type="checkbox" name="accept" /> Accept all terms and conditions<br/>
              <div className="d-flex mb-3 justify-content-end">
              <Button
                    variant="light"
                    className="shadow me-4"
                  >
                    Decline
                  </Button>
                  <Button
                    variant="dark"
                    className="shadow"
                  >
                    Accept
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
