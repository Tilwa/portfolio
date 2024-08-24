import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div id="contact-main">
        <div className="contact-top">
          <h3 id="contact-heading">Contact</h3>
        </div>
        <div className="contact-middle">
          <div className="contact-middle-left">
            <div className="contact-details-top">
              <h5 className="contact-heading">Drop Me a Message</h5>
              <p className="contact-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="contact-details-bottom">
              <div className="contact-details-bottom-1">
                <i className="fi fi-tr-phone-call" id="icon-left"></i>
                <p id="icon-text">+92 333 5712658</p>
              </div>
              <div className="contact-details-bottom-2">
                <i class="fi fi-ts-newsletter-subscribe" id="icon-left"></i>

                <p id="icon-text">shahrukhaltaf123@gmail.com</p>
              </div>
              <div className="contact-details-bottom-3">
                {" "}
                <i class="fi fi-tr-earth-americas" id="icon-left"></i>
                <p id="icon-text">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
          {/* right form div */}
          <div className="contact-middle-right">
            <div class="form-wrapper">
              <form>
                <input type="text" id="name" placeholder="Enter your name" />
                <input type="email" id="email" placeholder="Enter your email" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
                <textarea
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
                <button type="submit" id="contact-form-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-bottom">
          <h1 className="name-logo-bottom">Shahrukh</h1>
          <p id="copyright">2024 - Shahrukh, All Rights Reserved</p>
          <div className="social-apps">
            <i class="devicon-facebook-plain colored app-icons"></i>

            <i class="devicon-github-original colored app-icons"></i>

            <i class="devicon-twitter-original colored app-icons"></i>

            <i class="devicon-google-plain colored app-icons"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
