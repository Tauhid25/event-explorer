import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromURL = params.get("email");
    if (emailFromURL) {
      setEmail(emailFromURL);
    }
  }, [location.search]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center py-8">
      <Helmet>
        <title>Event Explorer | Reset Password</title>
      </Helmet>
      <form
        onSubmit={handleResetPassword}
        className="card bg-base-100 w-full mx-4 max-w-sm py-5"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn bg-pink-500 text-white hover:bg-pink-600 mt-4">
              Reset Password
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

