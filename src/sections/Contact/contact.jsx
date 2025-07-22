import "./contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  // Reference to the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="contact-container">
      <section className="contact-section py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 justify-center mb-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
              <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
                Get in Touch
              </h2>
              <p className="text-lg leading-6 opacity-70">
                Feel free to reach out for any inquiries or collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-1">Name</div>
            <div className="mb-4">
              <label className="name input validator">
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
            </div>
            <div className="mb-4">
              {/* Email Input with Validator */}
              <div className="mb-1">Email</div>
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
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <div className="mb-4">
              {/* Message Input */}
              <div className="mb-1">Message</div>
              <textarea
                className="textarea validator message"
                placeholder="Hello! How are you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="validator-hint hidden">Enter a message</div>
            </div>
            <button type="submit" className="btn btn-message mt-4">
              Send
              <img
                src="Public/Icons/send.png"
                width={20}
                height={16}
                className="opacity-50 send"
              />
            </button>
          </form>
        </div>
      </section>
    </div>
  );

};

export default Contact;
