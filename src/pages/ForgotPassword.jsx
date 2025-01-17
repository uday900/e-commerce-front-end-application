import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const ForgotPassword = () => {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [otp, setOTP] = useState('');
  const [email, setEmail] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    console.log(`Sending OTP to ${email}`);
    setIsOTPSent(true); // Enable OTP field
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    // Validate OTP
    console.log(`Submitted OTP: ${otp}`);
    // Add validation logic and navigate to the password reset page
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen mt-5 justify-center text-gray-800">
        <div className="w-3/4 max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your email address below, and we’ll send you an OTP to reset your password.
          </p>

          {!isOTPSent ? (
            <form onSubmit={handleSendOTP}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmitOTP}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Submit OTP
              </button>
            </form>
          )}
          <div className="mt-4 text-center">
            <p className="text-sm">
              Remembered your password?{' '}
              <a href="#" className="text-indigo-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
