import React from 'react';
import '../index.css';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center text-black">
      {/* Header Section */}
      <header className="w-full bg-yellow-600 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">AutoWebify</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-gray-200">Features</a></li>
              <li><a href="#about" className="hover:text-gray-200">About</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-cover bg-center py-20 bg-yellow-300 leading-4 ">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-6xl font-[900] mb-6 text-black tracking-tighter">Leave the chores to us focus on what truly matters.</h2>
          <p className="mt-4 text-xl">Save time and increase efficiency with our web automation solutions</p>
          <button className="mt-6 px-8 py-4 bg-green-500 text-white font-semibold rounded">
            <a href="http://localhost:5173/repulicofmoldova">Get Started</a></button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-yellow-200 p-6 rounded">
                <img src="https://source.unsplash.com/100x100/?automation" alt="Feature 1" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Automated Testing</h3>
                <p className="mt-2">Run tests automatically to ensure your web apps work as expected.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-yellow-200 p-6 rounded">
                <img src="https://source.unsplash.com/100x100/?workflow" alt="Feature 2" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Workflow Automation</h3>
                <p className="mt-2">Automate repetitive tasks and streamline your workflows.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-yellow-200 p-6 rounded">
                <img src="https://source.unsplash.com/100x100/?integration" alt="Feature 3" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
                <p className="mt-2">Easily integrate our automation solutions with your existing systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">About Us</h2>
          <p className="text-xl">We specialize in providing top-notch web automation solutions to help businesses save time and improve efficiency. Our team of experts is dedicated to delivering high-quality services that meet your unique needs.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
          <p className="text-xl mb-6">Have any questions? We'd love to hear from you!</p>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-4 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" className="p-4 border border-gray-300 rounded" />
            <textarea placeholder="Your Message" className="p-4 border border-gray-300 rounded h-32"></textarea>
            <button type="submit" className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-yellow-600 text-black py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 AutoWebify. All rights reserved.</p>
          <p>built by <a href="https://portfolio-react-theta-rouge.vercel.app/" className='text-blue-800 underline hover:bg-black'>Varun</a></p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
