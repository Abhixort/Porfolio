import React from 'react';
import myimage from '../assets/images/portfolio-image.jpg';

function About() {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
            <img
              src={myimage}
              alt="Your Name"
              className="rounded-full w-48 h-48 shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-2/3 w-full text-center lg:text-left mt-8 lg:mt-0 lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-800">Abhishek Abhigyanam</h2>
            <h3 className="text-xl text-gray-600 mt-2">Software Engineer</h3>
            <p className="mt-4 text-gray-700">
              Welcome to my portfolio! I am a passionate software engineer with expertise in developing robust, scalable, and user-friendly applications. I love solving complex problems and continuously learning about emerging technologies to deliver innovative solutions. Let's create something amazing together!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Skills</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">Python</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">JavaScript</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">React.js</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">Node.js</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">MongoDB</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">PostgreSQL</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">Tailwind CSS</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="text-gray-800 font-medium">REST APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
