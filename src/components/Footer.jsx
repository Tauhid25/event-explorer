import React from "react";
import eventLogo from "/event-logo.png";
import { NavLink } from "react-router"; // fixed import
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-pink-500 border-b-2" : "text-black";

  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-16">
      <div className="w-full border-t border-pink-300" />
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
        {/* Logo Section */}
        <div className="lg:col-span-3 text-center lg:text-left">
         <div className="flex items-center gap-3">
         <img className="w-10" src={eventLogo} alt="Event Logo" />
          <h2 className="text-2xl font-bold">
            <span className="text-pink-500">Event</span> Explorer
          </h2>
         </div>
          <p className="pt-2">Providing reliable tech since 1992</p>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="text-lg font-bold pb-3">Company</h3>
          <ul className="space-y-1">
            <li>
              <NavLink className={navLinkClasses} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClasses} to="/events">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClasses} to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="lg:col-span-3 text-center lg:text-left md:-mt-12 lg:mt-0">
          <h3 className="text-lg font-bold pb-3">Legal</h3>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="text-lg font-bold pb-3">Social Media</h3>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-blue-600 hover:scale-110 transition"
                size={28}
              />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                className="text-black hover:scale-110 transition"
                size={28}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-blue-700 hover:scale-110 transition"
                size={28}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-red-600 hover:scale-110 transition"
                size={28}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-pink-300 my-6" />
      <div className="text-center pb-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} - All rights reserved by Event
          Explorer Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
