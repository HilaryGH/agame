// src/Components/Home.tsx
const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Make Your Events Memorable
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          We provide complete solutions for weddings, corporate events, parties, and more.
        </p>

        <button className="bg-white text-purple-700 hover:bg-gray-200 text-lg px-6 py-3 rounded-full shadow-lg transition">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-700">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Event Planning</h3>
            <p>From concept to execution, we handle every detail to make your event stress-free.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Catering Services</h3>
            <p>Delicious menus tailored for weddings, parties, and corporate gatherings.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Decoration & Design</h3>
            <p>Beautiful and creative designs to match your event’s theme and vision.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We are a passionate team dedicated to creating unforgettable experiences. 
          With years of expertise in event management, we transform your vision into reality. 
          Whether it's a wedding, corporate event, or private celebration, we handle it all.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8">We’d love to discuss how we can make your next event a success!</p>
        <button className="bg-white text-purple-700 hover:bg-gray-200 text-lg px-6 py-3 rounded-full shadow-lg transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Eventify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
