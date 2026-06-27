import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required";
    
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formState.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formState.mobile.replace(/\s+/g, ""))) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formState.email.trim() && !emailRegex.test(formState.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formState.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", mobile: "", email: "", message: "" });

    // Auto reset success message after 5s
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-industrial-dark relative">
      {/* Decorative accent background shapes */}
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-industrial-dark dark:text-white mb-4">
            Connect With Our Sales Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Ready to build? Get pricing estimates, bulk volume configurations, or structural consultations today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50 dark:bg-industrial-gray/20 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold font-sans text-industrial-dark dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Office & Works</h4>
                    <p className="text-gray-800 dark:text-gray-300 font-semibold leading-relaxed">
                      Mahadev Power Block
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                      Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Call Representative</h4>
                    <a
                      href="tel:+919870076533"
                      className="text-gray-800 dark:text-gray-300 font-semibold hover:text-primary transition-colors text-lg"
                    >
                      +91 98700 76533
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Email Inquiry</h4>
                    <a
                      href="mailto:mahadevpowerblock@gmail.com"
                      className="text-gray-800 dark:text-gray-300 font-semibold hover:text-primary transition-colors"
                    >
                      mahadevpowerblock@gmail.com
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">We respond within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="rounded-3xl overflow-hidden h-72 border border-gray-200 dark:border-gray-800 shadow-md">
              <iframe
                title="Mahadev Power Block Location Map"
                src="https://maps.google.com/maps?q=Mahadev%20Power%20Block&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-industrial-gray/20 rounded-3xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold font-sans text-industrial-dark dark:text-white mb-6">Request A Custom Quotation</h3>
            
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6 text-center flex flex-col items-center justify-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mb-3" />
                <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-1">Message Sent Successfully!</h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-500">
                  Thank you for reaching out. A sales representative will call you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full bg-white dark:bg-industrial-dark border ${
                        errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                      } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formState.mobile}
                      onChange={handleChange}
                      placeholder="e.g. 98700 76533"
                      className={`w-full bg-white dark:bg-industrial-dark border ${
                        errors.mobile ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                      } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.mobile}</p>}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mb-2">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@company.com"
                    className={`w-full bg-white dark:bg-industrial-dark border ${
                      errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mb-2">
                    Requirements Message *
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe block sizes, quantities needed, and project delivery site location..."
                    className={`w-full bg-white dark:bg-industrial-dark border ${
                      errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-md shadow-primary/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-5.5 h-5.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      Submit quotation request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
