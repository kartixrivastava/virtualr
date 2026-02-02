import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

const CreateAccount = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, validation and API call would go here
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 px-6 mb-4 relative">
      <div className="w-full max-w-md bg-neutral-900 rounded-lg border border-neutral-800 p-8 shadow-lg shadow-orange-900/15">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <p className="text-neutral-400 text-center mb-8">
          Join VirtualR and start building today.
        </p>

        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium mb-2 text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="Kartik Srivastava"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-neutral-300">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-neutral-300">
              Create Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 to-orange-800 text-white font-medium py-3 rounded-md hover:opacity-90 transition-opacity mt-4 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:text-orange-400">
            Login
          </Link>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Welcome!</h3>
            <p className="text-neutral-400 mb-6">
              Your account has been successfully created. You can now log in to
              explore.
            </p>
            <Link
              to="/login"
              className="block w-full bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Go to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;
