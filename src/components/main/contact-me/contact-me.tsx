import React from "react";
import emailjs from "emailjs-com";
import strings from "../../../strings.json";

import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    email: "srjthakur9@gmail.com",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEmailSentSuccess, setIsEmailSentSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_k7l3de6", // EmailJS service ID
        "template_loojxeu", // EmailJS template ID
        formData,
        "hY2fWYFnnyOT9ng3e" // EmailJS user ID
      )
      .then((response: any) => {
        setIsLoading(false);
        if (response?.text === "OK") {
          setIsEmailSentSuccess(true);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const renderForm = () => (
    <form className="contact_me_form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: "#efeff2",
            border: "none",
          }}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact details Email/Phone"
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: "#efeff2",
          }}
          required
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          rows={4}
          onChange={handleChange}
          placeholder="Please type your message..."
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: 5,
            resize: "vertical",
            backgroundColor: "#efeff2",
          }}
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn sendBtn">
          Send
        </button>
      </div>
    </form>
  );

  const emailIsProcessing = () => (
    <div className="formPara sliderAnimation">
      <p>Your Email is sending...</p>
    </div>
  );

  const emailSentSuccess = () => (
    <div className="email-success formPara sliderAnimation">
      <p>Email sent successfully. I will get in touch with you shortly.</p>
    </div>
  );

  const emailError = () => (
    <div className="email-error formPara sliderAnimation">
      <p>Something went wrong...</p>
    </div>
  );

  return (
    <div>
      <div className="contactMe">
        <p>{strings.contact}</p>
      </div>
      {!isEmailSentSuccess && !isLoading && !isError && renderForm()}
      {isEmailSentSuccess && emailSentSuccess()}
      {isLoading && emailIsProcessing()}
      {isError && emailError()}
    </div>
  );
}
