// src/Components/Home.tsx
import { useEffect, useState } from "react";

const Home = () => {
  const heroImages = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen animated-gradient text-white px-6"
      >
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up">
              Make Your Events Memorable
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-6 fade-in-up delay-2 mx-auto md:mx-0">
              We provide complete solutions for weddings, corporate events, parties, and more.
            </p>
            <button className="bg-white text-[#1C2B4D] hover:bg-gray-200 text-lg px-6 py-3 rounded-full shadow-lg transition fade-in-up delay-3">
              Get Started
            </button>
          </div>

          {/* Right: rotating images */}
          <div className="relative w-full h-72 sm:h-80 md:h-[420px] lg:h-[480px]">
            <div className="absolute inset-0 p-1 rounded-3xl bg-gradient-to-br from-[#00A99D] to-[#1C2B4D] shadow-2xl">
              <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-white/10 backdrop-blur-sm">
                {heroImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt="Event highlight"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      idx === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {/* Decorative corner dots */}
                <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-[#00A99D] opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-[#1C2B4D] opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#1C2B4D]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Event Planning</h3>
            <p>From concept to execution, we handle every detail to make your event stress-free.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Catering Services</h3>
            <p>Delicious menus tailored for weddings, parties, and corporate gatherings.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02]">
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
        className="py-16 text-white text-center animated-gradient"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8">We’d love to discuss how we can make your next event a success!</p>
        <button className="bg-white text-[#1C2B4D] hover:bg-gray-200 text-lg px-6 py-3 rounded-full shadow-lg transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2B4D] text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Eventify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
