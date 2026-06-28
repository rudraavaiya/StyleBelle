function About() {
  return (
    <div className="px-6 py-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About StyleBelle</h1>

        <p className="text-gray-600 leading-7">
          StyleBelle is a premium skincare brand focused on creating elegant,
          modern, and easy-to-use skincare products. Our online store is designed to provide a smooth shopping experience with clean product presentation, simple navigation, and responsive design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-pink-50 p-6 rounded-xl">
            <h2 className="font-bold text-xl">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To make skincare feel simple, elegant, and trustworthy.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl">
            <h2 className="font-bold text-xl">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To deliver a premium online shopping experience for skincare users.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl">
            <h2 className="font-bold text-xl">Our Promise</h2>
            <p className="text-gray-600 mt-2">
              Clean design, easy browsing, and customer-focused experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;