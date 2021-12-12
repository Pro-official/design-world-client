import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkyenry");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <div className="form">
        <h2>Contact Me</h2>
        <h6>Contact me to know more..</h6>
        <form
          className="contact-form"
          action="https://formspree.io/f/xwkyenry"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
            />
            <label
              className="label-control"
              htmlFor="email"
              for="floatingInput"
            >
              Your Name
            </label>
          </div>
          {/* <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" /> */}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="message"
              name="message"
            ></textarea>
            <label className="label-control" htmlFor="floatingTextarea">
              Your Messages
            </label>
          </div>
          {/* <textarea id="message" name="message" /> */}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="form-button"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
