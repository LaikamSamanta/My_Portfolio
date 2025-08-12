import "./contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  // Reference to the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(null); // null = not checked, true = valid, false = invalid
  const [nameValid, setNameValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Name validation function
  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Message validation function
  const validateMessage = (message) => {
    return message.trim().length >= 10;
  };

  // Handle name input change with validation
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    
    if (nameValue === "") {
      setNameValid(null);
    } else {
      setNameValid(validateName(nameValue));
    }
  };

  // Handle email input change with validation
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    
    if (emailValue === "") {
      setEmailValid(null);
    } else {
      setEmailValid(validateEmail(emailValue));
    }
  };

  // Handle message input change with validation
  const handleMessageChange = (e) => {
    const messageValue = e.target.value;
    setMessage(messageValue);
    
    if (messageValue === "") {
      setMessageValid(null);
    } else {
      setMessageValid(validateMessage(messageValue));
    }
  };

  // Handle input blur (when user leaves the field)
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  // Check if form is valid
  const isFormValid = () => {
    return nameValid === true && emailValid === true && messageValid === true;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Check if all fields are valid before submitting
    if (!isFormValid()) {
      return;
    }

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
      setEmailValid(null);
      setNameValid(null);
      setMessageValid(null);
      setTouched({ name: false, email: false, message: false });
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
                        className={`form-input ${
                          nameValid === true 
                            ? 'border-green-500 bg-green-50' 
                            : nameValid === false && touched.name
                            ? 'border-red-500 bg-red-50' 
                            : ''
                        }`}
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => handleBlur('name')}
                        required
                      />
                      {/* Name validation icon */}
                      {nameValid === true && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {nameValid === false && touched.name && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {nameValid === false && touched.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Name must be at least 2 characters long.
                      </p>
                    )}
                    {nameValid === true && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Name looks good!
                      </p>
                    )}
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
                        className={`form-input ${
                          emailValid === true 
                            ? 'border-green-500 bg-green-50' 
                            : emailValid === false && touched.email
                            ? 'border-red-500 bg-red-50' 
                            : ''
                        }`}
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => handleBlur('email')}
                        required
                      />
                      {/* Email validation icon */}
                      {emailValid === true && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {emailValid === false && touched.email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {emailValid === false && touched.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Please enter a valid email address.
                      </p>
                    )}
                    {emailValid === true && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Email looks good!
                      </p>
                    )}
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
                        className={`form-textarea ${
                          messageValid === true 
                            ? 'border-green-500 bg-green-50' 
                            : messageValid === false && touched.message
                            ? 'border-red-500 bg-red-50' 
                            : ''
                        }`}
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={() => handleBlur('message')}
                        required
                      />
                      {/* Message validation icon */}
                      {messageValid === true && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {messageValid === false && touched.message && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {messageValid === false && touched.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Message must be at least 10 characters long.
                      </p>
                    )}
                    {messageValid === true && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Message looks good!
                      </p>
                    )}
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

