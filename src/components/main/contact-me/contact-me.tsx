import React from "react";
import emailjs from "emailjs-com";
import strings from "../../../strings.json";

import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "srjthakur9@gmail.com",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

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
        "service_k7l3de6", // Replace with your EmailJS service ID
        "template_akh5f7q", // Replace with your EmailJS template ID
        formData,
        "hY2fWYFnnyOT9ng3e" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div>
      <div className="contactMe">
        <p>{strings.contact}</p>
      </div>
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
              backgroundColor: "#e0e0e0",
            }}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Contact details"
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: 5,
              marginBottom: 10,
              backgroundColor: "#e0e0e0",
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
              backgroundColor: "#e0e0e0",
            }}
            required
          ></textarea>
        </div>
        <div>
          <button>{isLoading ? "Loading" : "Send"}</button>
        </div>
      </form>
    </div>
  );
}
