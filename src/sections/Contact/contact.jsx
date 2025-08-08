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
     <div className="contact-form-container min-h-screen flex items-center justify-center bg-black p-6">
  <form
    className="contact-form w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-6 sm:p-10 rounded-xl shadow-2xl bg-white"
    onSubmit={handleSubmit}
  >
    {/* Name Input */}
    <div className="mb-2 text-sm sm:text-base font-medium text-white">Name</div>
    <label className="input validator flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-black/20 focus-within:ring-2 focus-within:ring-black">
      <svg className="h-[1em] text-black opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </g>
      </svg>
      <input
        type="text"
        placeholder="User"
        className="name bg-transparent outline-none text-black placeholder-black/50 flex-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>

    {/* Email Input */}
    <div className="mt-4 mb-2 text-sm sm:text-base font-medium text-white">Email</div>
    <label className="input validator flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-black/20 focus-within:ring-2 focus-within:ring-black">
      <svg className="h-[1em] text-black opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </g>
      </svg>
      <input
        type="email"
        placeholder="mail@site.com"
        className="email bg-transparent outline-none text-white placeholder-white/50 flex-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
    <div className="validator-hint hidden text-sm text-red-600 mt-1">Enter valid email address</div>

    {/* Message Input */}
    <div className="mt-4 mb-2 text-sm sm:text-base font-medium text-white">Message</div>
    <textarea
      className="textarea validator message w-full min-h-[100px] p-3 bg-black tex—white placeholder-black/50 rounded-md border border-white/20 focus:ring-2 focus:ring-white"
      placeholder="Hello! How are you?"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    <div className="validator-hint hidden text-sm text-red-600 mt-1">Enter a message</div>

    {/* Submit Button */}
    <button
      type="submit"
      className="btn btn-message mt-6 w-full sm:w-auto px-6 py-2 rounded-md border border-white bg-white text-black hover:bg-black hover:text-white transition font-semibold"
    >
      Send
      <img src="/Icons/send.png" width={20} height={16} className="opacity-70 send ml-2" />
    </button>
  </form>
</div>
</div>
  );

};

export default Contact;

