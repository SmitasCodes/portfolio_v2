import React from "react";
import styles from "./triangle.module.css";

const Contact = () => {
  return (
    <section id="contact" className="bg-lightBlue">
      <div className={`bg-lightGray ${styles.triangle}`}></div>
      <div className=" w-full p-5 max-w-sm  mx-auto bg-lightBlue">
        {/* Title part of a section */}
        <div className="mx-auto text-center my-20">
          <h2 className="text-4xl font-bold tracking-wider text-white">
            CONTACT
          </h2>
          <span className="h-1 w-16 bg-white inline-block "></span>
          <h3 className="text-lightOrange text-base mt-2">Get in touch!</h3>
        </div>
        <div className="mx-auto sm:px-0 px-1">
          <form>
            <div>
              <input
                type="text"
                required
                className="w-full py-1 px-2 outline-none mb-1 bg-darkBlue text-white"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="w-full py-1 px-2 outline-none mb-1 bg-darkBlue text-white"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                className="w-full py-1 px-2 resize-none bg-darkBlue text-white mb-1 outline-none"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border-2 border-white text-white mb-5 px-2 hover:bg-white hover:text-darkBlue transition-colors duration-500"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
