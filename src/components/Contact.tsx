export const Contact = () => {
  // connect form to backend later and add necessary functionaliity web 3 forms applicable
  // add toast notification to show user message is sent(npm toastify)
  return (
    <section
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="ml-4 underline underline-offset-4 decoration-1 under font-light">
          Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="name">Your Name</label>
            <br />
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              id="name"
              type="text"
              placeholder="Your Name"
              name="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="email">Your Email</label>
            <br />
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              id="email"
              type="email"
              placeholder="Your Name"
              name="Email"
              required
            />
          </div>
        </div>
        {/* text message area  */}

        <div className="text-left my-6">
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
