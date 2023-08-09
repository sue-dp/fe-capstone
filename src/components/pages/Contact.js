import { useState, useEffect } from "react";

export default function ContactUs() {
  return (
    <div className="contact-cont">
      <div className="form">
        <input className="first" type="text" placeholder="First Name" />
        <input className="last" type="text" placeholder="Last Name" />
        <input className="email" type="text" placeholder="Email" />
        <textarea className="message" placeholder="Message:" />
        <input className="submit" type="submit" />
      </div>
    </div>
  );
}
