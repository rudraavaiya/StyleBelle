function Contact() {
  return (
    <div className="px-6 py-14 bg-pink-50 min-h-[70vh]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about StyleBelle products? Send us a message.
          </p>

          <div className="mt-8 text-gray-700 space-y-3">
            <p>
              <b>Email:</b> support@stylebelle.com
            </p>
            <p>
              <b>Location:</b> Surat, Gujarat, India
            </p>
            <p>
              <b>Support:</b> Monday to Saturday
            </p>
          </div>
        </div>

        <form className="bg-white shadow-xl rounded-xl p-6">
          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Your Name"
          />

          <input
            className="border px-4 py-3 rounded-lg w-full mb-4"
            placeholder="Email Address"
          />

          <textarea
            className="border px-4 py-3 rounded-lg w-full mb-4"
            rows="5"
            placeholder="Message"
          ></textarea>

          <button
            type="button"
            className="bg-pink-700 text-white px-6 py-3 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;