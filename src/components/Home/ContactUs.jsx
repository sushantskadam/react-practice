import React from "react";
import "./ContactUs.css";
import contactus from "../../assets/images/contactus.png";
function ContactUs() {
  return (
    <div className="contact_us py-5 " id="ContactUs">
      <div className=" container">
        <div className="row">
          <div className="col-md-6">
            {" "}
            <h3 className="fw-bold">Contact Us</h3>{" "}
            <p>
              Our technical support is available by phone or email from 10am{" "}
              <br />
              to 7pm IST, Monday through Saturday.
            </p>{" "}
            <div className="contactus_inpbox">
              {" "}
              <label className="mt-3">Name:</label>
              <input
                type="text"
                className="contactus_inp"
                placeholder="Enter Name"
              />{" "}
              <label className="mt-3">Email</label>
              <input
                type="text"
                className="contactus_inp"
                placeholder="Enter Email"
              />{" "}
              <label className="mt-3">Phone Number</label>
              <input
                type="text"
                className="contactus_inp"
                placeholder="Enter Number"
              />{" "}
              <label className="mt-3">How can we help?</label>
              <textarea
                type="textarea"
                rows={4}
                cols="50"
                className="contactus_textarea"
                placeholder="Please let us know about the issue you are facing..."
              />
              <div class="d-grid gap-2">
                <button className="contactus_btn  btn-lg btn-block">
                  SUBMIT
                </button>
              </div>
            </div>{" "}
          </div>

          <div className="col-md-6 contact_us_right">
            <img src={contactus} alt="demo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
