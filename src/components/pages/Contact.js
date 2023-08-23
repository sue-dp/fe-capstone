import { useState } from "react";

import { messageSentToast } from "../../util/toastNotifications";

export default function ContactUs() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    setFirst("");
    setLast("");
    setEmail("");
    setMessage("");
    messageSentToast();
  }

  return (
    <div className="contact-cont">
      <form className="form" onSubmit={handleFormSubmit}>
        <h3>We would love to hear from you!</h3>
        <h5>Please fill out the following information to connect with us:</h5>
        <input
          className="first"
          type="text"
          placeholder="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          className="last"
          type="text"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <input
          className="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="message"
          placeholder="Message:"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}
