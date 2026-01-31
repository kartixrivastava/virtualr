const ContactForm = () => {
  return (
    <div>
      <h2 className="text-center text-5xl mt-10 lg:mt-20 tracking-wide">
        Contact{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Us
        </span>
      </h2>
      <div>
        <p className="text-center text-neutral-500 md:mt-10 sm:mt-20 mb-5 ">
          We'll get back to you
        </p>
        <div className="mt-5 space-y-2 flex flex-col items-center">
          <div className="">
            Name
            <input
              type="text"
              placeholder="Enter your name"
              className="ml-2 rounded-md border border-neutral-700 p-2"
            />
          </div>
          <div>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              className="ml-2 rounded-md border border-neutral-700 p-2"
            />
          </div>
          <button className="bg-linear-to-r from-orange-500 to-orange-800 text-white font-medium py-2 px-4 rounded-md mt-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
