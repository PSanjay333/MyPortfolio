import React, { useState, useRef } from "react";
import "./Contact.css";
import { Alert } from "react-bootstrap";


const Contact = () => {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "923cf536-2ffe-4bb6-a0ac-9a48d1b2bacd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setMsgType("success");
        setMsg(res.message);
        formRef.current.reset(); 
      } else {
        setMsgType("danger");
        setMsg(res.message);
      }
    } catch (error) {
      setMsgType("danger");
      setMsg("An error occurred. Please try again.");
    }finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-wraper text-light">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="row call-details mb-4">
            <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
              <p>
                <span>Contact me</span>
              </p>
              <h1>
                <span>Contact</span>
              </h1>
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <label className="col-lg-3">Phone no :</label>
                  <div className="col-lg-9 text-md-start">
                    <a href="javascript:void(0)">+91 7337061668</a>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <label className="col-lg-3">Email :</label>
                  <div className="col-lg-9 text-md-start">
                    <a href="mailto:sanjay.pothuraju.work@gmail.com">
                      sanjay.pothuraju.work@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <form ref={formRef} onSubmit={onSubmit}>
                <div className="mb-4 mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    cols="40"
                    rows="4"
                    name="message"
                    className="form-control"
                    id="message"
                    placeholder="Write a message here..."
                    autoComplete="off"
                  ></textarea>
                </div>
                {loading && (
                  <div className="text-center mb-4">
                  <i className="fas fa-spinner fa-spin fa-2x"></i>
                  <p>Please wait...</p>
                </div>
                )}
                {msg && (
                  <Alert key={msgType} variant={msgType} onClose={() => setMsg("")} dismissible>
                    {msg}
                  </Alert>
                )}
                <button type="submit" className="btn btn-dark main-btn">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/966/574/desktop-wallpaper-hoodie-anime-guy-drawings-anime-guy-hoodie.jpg"
                alt="contact"
                className="img-fluid ms-lg-5 rounded-3 image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
