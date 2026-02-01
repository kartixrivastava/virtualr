import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="mt-20 tracking-wide" id="contact">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Get in{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Touch
        </span>
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-0 max-w-6xl mx-auto px-4">
        {/* Left Column: Contact Info */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="text-lg text-neutral-300">
            <p className="mb-8">
              Have questions or need assistance? We're here to help! Reach out
              to us through any of the channels below or fill out the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-orange-500">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                  <p className="text-neutral-400">contact@virtualr.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-orange-500">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                  <p className="text-neutral-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-orange-500">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Visit Us</h3>
                  <p className="text-neutral-400">177A Bleecker St.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Kartik Srivastava"
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border ${
                    errors.name ? "border-red-500" : "border-neutral-700"
                  } focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-neutral-200 placeholder-neutral-500 transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kartik@gmail.com"
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border ${
                    errors.email ? "border-red-500" : "border-neutral-700"
                  } focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-neutral-200 placeholder-neutral-500 transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message here..."
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border ${
                    errors.message ? "border-red-500" : "border-neutral-700"
                  } focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-neutral-200 placeholder-neutral-500 transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-800 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>

              {isSubmitted && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-center animate-pulse">
                  Message sent successfully!
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
