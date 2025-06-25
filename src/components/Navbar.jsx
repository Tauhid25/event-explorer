import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import eventLogo from "/event-logo.png";
import { AuthContext } from "../provider/AuthProvider";
import profileIcon from "../assets/profile.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully!");
        setTimeout(() => {
          navigate("/");
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed. Please try again.");
      });
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-pink-500 border-b-2" : "text-black";

  return (
    <div className="px-4 md:px-12 lg:px-16 bg-gray-100 py-4 md:py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={eventLogo} alt="logo" className="h-10" />
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-pink-500">Event</span> Explorer
          </h1>
        </div>

        {/* Hamburger menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu items (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8 text-lg">
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

        {/* Emergency Button (hidden on small) */}
        <div className="hidden lg:block">
          <div className="hidden lg:flex items-center gap-8 text-lg">
            {user && (
              <div className="relative group w-fit">
                <img
                  className="w-12 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <div className="absolute bottom-1 right-4 -translate-x-1/2 bg-pink-500 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </div>
              </div>
            )}
            <div>
              <button>
                <NavLink className={navLinkClasses} to="/auth/my-profile">My Profile</NavLink>
              </button>
            </div>
            {!user && ""}

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-pink-500 text-white px-4 py-1 rounded-lg text-lg hover:bg-pink-600"
              >
                Logout
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-lg text-lg hover:bg-pink-600">
                  LogIn
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-lg px-2">
          <li>
            <NavLink className={navLinkClasses} to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClasses}
              to="/events"
              onClick={toggleMenu}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClasses}
              to="/contact-us"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>

          
          <div className="lg:hidden">
            <div>
              {user && (
                <div className="relative group w-fit py-2">
                  <img
                    className="w-12 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <div className="absolute bottom-1 right-4 -translate-x-1/2 bg-pink-500 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {user.displayName}
                  </div>
                </div>
              )}
              <div className="py-2 md:py-4">
              <button>
              <NavLink className={navLinkClasses} to="/auth/my-profile">My Profile</NavLink>
            </button>
              </div>
              {!user && (
                <img
                  className="w-12 rounded-full py-2"
                  src={profileIcon}
                  alt="Profile"
                />
              )}

              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-pink-500 text-white px-4 py-1 rounded-lg text-lg hover:bg-pink-600"
                >
                  Logout
                </button>
              ) : (
                <Link to="/auth/login">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-lg text-lg hover:bg-pink-600">
                    LogIn
                  </button>
                </Link>
              )}
            </div>
          </div>
        </ul>
      )}
      <div className="w-full border-b border-pink-300 my-3" />
    </div>
  );
};

export default Navbar;



