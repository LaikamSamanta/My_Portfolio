import "./contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  // Reference to the form
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_lozxiag";
    const templateID = "template_b5tv958";
    const publicKey = "C02XStaeYHlRYt0z5";

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
      form_name: name,
      form_email: email,
      message: message,
      }
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      alert("Email sent successfully:", response.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Error sending email:", error);
    }
  }

  return (
    <div className="contact-container w-full">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 justify-center mb-8 sm:mb-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center px-4 py-8">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-none mb-4 sm:mb-6 px-4">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg leading-6 opacity-70 px-4 py-2">
                Feel free to reach out for any inquiries or collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
          <form className="contact-form max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="mb-2 text-sm sm:text-base font-medium">Name</div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="User"
                  className="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              {/* Email Input with Validator */}
              <div className="mb-2 text-sm sm:text-base font-medium">Email</div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  className="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              {/* Message Input */}
              <div className="mb-2 text-sm sm:text-base font-medium">Message</div>
              <textarea
                className="textarea validator message"
                placeholder="Hello! How are you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="validator-hint hidden">Enter a message</div>
            <button type="submit" className="btn btn-message mt-4 sm:mt-6 btn-outline w-full sm:w-auto">
              Send
              <img
                src="/Icons/send.png"
                width={20}
                height={16}
                className="opacity-70 send"
              />
            </button>
          </form>
        </div>
    </div>
    </div>
  );

};

export default Contact;

