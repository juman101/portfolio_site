import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ux3ysx8",
        "template_86lnvx6",
        form.current,
        "1NOMpeaIe0Ypmmc2f"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "100px", // Add margin top for spacing below navigation bar
  };

  const labelStyles = {
    margin: "8px 0",
    color: "white", // Label text color
    fontWeight: "bold", // Label text bold
  };

  const inputStyles = {
    padding: "8px",
    margin: "4px 0",
    borderRadius: "5px",
    border: "1px solid #ddd", // Input border color
  };

  const textareaStyles = {
    padding: "40px",
    margin: "2px 0",
    borderRadius: "5px",
    border: "1px solid #ddd", // Textarea border color
  };

  const submitButtonStyles = {
    padding: "10px",
    backgroundColor: "#c770f0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyles}>
      <label style={labelStyles}>Name</label>
      <input type="text" name="user_name" style={inputStyles} placeholder="Enter your name"/>
      <label style={labelStyles}>Email</label>
      <input type="email" name="user_email" style={inputStyles} placeholder="Enter your Email-id" />
      <label style={labelStyles} placeholder="Drop Your Message">Message </label>
      <textarea name="message" style={textareaStyles}></textarea>
      <input type="submit" value="Send" style={submitButtonStyles} />
    </form>
  );
};

export default Contact;
