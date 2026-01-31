import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 px-6 mb-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-lg border border-neutral-800 p-8 shadow-lg shadow-orange-900/15">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <p className="text-neutral-400 text-center mb-8">
          Join VirtualR and start building today.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-neutral-300">
              Email Address
            </label>
            <input
              type="email"
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
              className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full bg-linear-to-r from-orange-500 to-orange-800 text-white font-medium py-3 rounded-md hover:opacity-90 transition-opacity mt-4"
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
    </div>
  );
};

export default CreateAccount;
