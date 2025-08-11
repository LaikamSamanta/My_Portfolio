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
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 justify-center mb-8 sm:mb-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center px-4 py-8">
              <h2 className="section-titles text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4 text-white">
                Contact Me
              </h2>
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl leading-none mb-4 sm:mb-6 px-4 text-white">
                Get in Touch
              </h3>
              <p className="text-base sm:text-lg leading-6 opacity-70 px-4 py-2 text-white">
                Feel free to reach out for any inquiries or collaborations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-2xl">
              <form
                className="modern-contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-content">
                  {/* Name Input */}
                  <div className="input-group">
                    <label className="input-label">
                      Full Name
                    </label>
                    <div className="input-wrapper">
                      <div className="input-icon">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="form-input"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="input-group">
                    <label className="input-label">
                      Email Address
                    </label>
                    <div className="input-wrapper">
                      <div className="input-icon">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="form-input"
                        value={email || ''}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="input-group">
                    <label className="input-label">
                      Your Message
                    </label>
                    <div className="input-wrapper">
                      <div className="input-icon message-icon">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <textarea
                        className="form-textarea"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        value={message || ''}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="submit-button"
                    >
                      <span className="button-content">
                        <span>Send Message</span>
                        <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
</div>
  );

};

export default Contact;

