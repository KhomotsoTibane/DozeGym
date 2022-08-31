import React, { useRef } from "react"
import "./JoinUs.css"
import emailjs from "@emailjs/browser"

const JoinUs = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
 
        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="joinUs" className="joinUs">
        <div className="joinUs-left">
            <hr/>
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US?</span>
            </div>
        </div>
        <div className="joinUs-right">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter your email to get started"/>
                <button className="btn btn-join">Join now</button>
            </form>
        </div>
    </section>
  )
}

export default JoinUs