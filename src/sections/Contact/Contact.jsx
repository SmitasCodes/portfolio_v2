import React, { useRef, useState } from "react";
import styles from "./triangle.module.css";
import contactService from "../../services/contact";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Submittion handling function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = {
      name: formName,
      email: formEmail,
      message: formMessage,
    };

    // Passing data to a service
    // Setting submitted to true, and also setting  timeout, because we want submitted state to be true for 5 seconds
    // Also setting all form states back to a 0
    try {
      await contactService(userInput);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      setFormName("");
      setFormEmail("");
      setFormMessage("");
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <section id="contact" className="bg-lightBlue relative">
      <div className={`bg-lightGray sm:top-0 -top-px ${styles.triangle}`}></div>
      <div className=" w-full px-5 py-12 max-w-sm  mx-auto bg-lightBlue ">
        {/* Contact section header */}
        <div className="mx-auto text-center my-20">
          <h2
            className="text-4xl font-bold tracking-wider text-white"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            CONTACT
          </h2>
          <span
            className="h-1 w-16 bg-white inline-block "
            data-aos="zoom-in"
            data-aos-duration="700"
          ></span>
          <h3
            className="text-lightOrange text-base mt-2"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            Get in touch!
          </h3>
        </div>
        <div className="mx-auto sm:px-0 px-1">
          {/* Form element */}
          <form
            data-aos="fade-up"
            data-aos-duration="900"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                required
                className="w-full py-1 px-2 outline-none mb-1 bg-darkBlue text-white"
                placeholder="Name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="w-full py-1 px-2 outline-none mb-1 bg-darkBlue text-white"
                placeholder="Email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                name="message"
                className="w-full py-1 px-2 resize-none bg-darkBlue text-white mb-1 outline-none"
                placeholder="Your message"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              {/* Changing button content and overall style depending if user submitted a message recently */}
              <button
                type="submit"
                className={`text-white mb-5 px-2 transition-all duration-500 w-20 h-7 hover:text-darkBlue ${
                  isSubmitted
                    ? "border-none bg-emerald-600 text-center w-18"
                    : "border-white group hover:bg-white border-2 "
                }`}
              >
                {isSubmitted ? <span>&#x2713;</span> : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
