import React from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-6">
  <Helmet>
    <title>Event Explorer | Contact Us</title>
  </Helmet>
      <p className="px-4 text-center text-gray-600 mb-10">
        We'd love to hear from you! Reach out with any questions, suggestions,
        or event inquiries.
      </p>

      <div className="px-4 md:px-8 lg:px-16">
        <div className="bg-white rounded-2xl px-4 py-4 md:px-8  md:py-6 lg:px-16 lg:py-8 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-pink-500">
                Office Address
              </h2>
              <p>123 Event Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+880 1234 567 890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>support@eventexplorer.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
