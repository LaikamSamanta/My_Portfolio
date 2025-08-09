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
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="relative w-full max-w-2xl">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              
              <form
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
                onSubmit={handleSubmit}
              >
                <div className="space-y-8">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-white font-medium text-sm mb-3 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-white font-medium text-sm mb-3 ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        value={email || ''}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label className="block text-white font-medium text-sm mb-3 ml-1">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <svg className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <textarea
                        className="w-full pl-12 pr-4 py-4 pt-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 min-h-[120px] resize-none"
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        value={message || ''}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out border border-transparent hover:border-white/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Send Message</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
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

