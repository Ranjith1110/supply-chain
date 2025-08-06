import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 sm:p-14">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold uppercase text-[#000]"
            style={{ fontFamily: 'Fortuner' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 mx-auto mt-4 border-t-4 border-[#bf272f]"></div>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            We'd love to hear from you! Fill out the form and we'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          {/* Phone */}
          <div className="col-span-1">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          {/* Company */}
          <div className="col-span-1">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Company</label>
            <input
              type="text"
              placeholder="Your Company"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 text-sm font-semibold text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f] resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#bf272f] hover:bg-[#9e1e26] text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
