// src/Components/Home.tsx
import { useEffect, useState } from "react";

const Home = () => {
  const eventCards = [
    {
      image: "/photo1.jpg",
      title: "Weddings",
      description: "Create magical moments with our comprehensive wedding planning services",
      features: ["Venue Selection", "Floral Design", "Photography"]
    },
    {
      image: "/photo2.jpg", 
      title: "Corporate Events",
      description: "Professional events that leave lasting impressions on your clients",
      features: ["Conference Setup", "Team Building", "Product Launches"]
    },
    {
      image: "/photo4.jpg",
      title: "Private Parties",
      description: "Celebrate life's special moments with personalized party planning",
      features: ["Birthday Parties", "Anniversaries", "Celebrations"]
    }
  ];
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % eventCards.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section - Fully Responsive */}
      <section id="home" className="min-h-screen animated-gradient text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00A99D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00A99D] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Upper Section - Text Content */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-4">
            <div className="text-center max-w-5xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 fade-in-up leading-tight">
                Make Your Events 
                <span className="block bg-gradient-to-r from-[#00A99D] to-white bg-clip-text text-transparent">
                  Memorable
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 fade-in-up delay-2 max-w-4xl mx-auto leading-relaxed opacity-95">
                We provide complete solutions for weddings, corporate events, parties, and more. 
                Let us transform your vision into an unforgettable experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-3">
                <button className="bg-white text-[#1C2B4D] hover:bg-gray-100 text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1C2B4D] text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  View Our Work
                </button>
              </div>
            </div>
          </div>

          {/* Lower Section - Event Cards Grid */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-7xl mx-auto h-full">
              {/* Mobile: Single card carousel */}
              <div className="md:hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={eventCards[currentCardIndex].image}
                    alt={eventCards[currentCardIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{eventCards[currentCardIndex].title}</h3>
                    <p className="text-sm opacity-90 mb-3">{eventCards[currentCardIndex].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {eventCards[currentCardIndex].features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-[#00A99D]/80 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: 3-column grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 h-full max-h-96">
                {eventCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform hover:scale-105 ${
                      idx === currentCardIndex ? 'ring-4 ring-white/50 scale-105' : ''
                    }`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full p-4 lg:p-6 flex flex-col justify-end text-white">
                      <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3">{card.title}</h3>
                        <p className="text-xs lg:text-sm mb-3 lg:mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                          {card.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          {card.features.map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-[#00A99D] rounded-full mr-2"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Number Indicator */}
                      <div className="absolute top-3 lg:top-4 right-3 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                        {idx + 1}
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
                {eventCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCardIndex(idx)}
                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                      idx === currentCardIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Brand Aligned */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#00A99D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1C2B4D] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00A99D] to-[#1C2B4D] rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1C2B4D]">
              Our Premium <span className="bg-gradient-to-r from-[#00A99D] to-[#1C2B4D] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive event management services designed to bring your vision to life with precision and elegance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Event Planning */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#00A99D]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/5 to-[#1C2B4D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-[#00A99D] to-[#00A99D]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8v8m0-8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-6 0h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C2B4D] group-hover:text-[#00A99D] transition-colors">Event Planning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">From concept to execution, we handle every detail to make your event stress-free and memorable.</p>
                <div className="flex items-center text-[#00A99D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Catering Services */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#00A99D]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/5 to-[#1C2B4D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-[#1C2B4D] to-[#1C2B4D]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C2B4D] group-hover:text-[#00A99D] transition-colors">Catering Services</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Delicious menus tailored for weddings, parties, and corporate gatherings with premium ingredients.</p>
                <div className="flex items-center text-[#00A99D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decoration & Design */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#00A99D]/20 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/5 to-[#1C2B4D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1C2B4D] group-hover:text-[#00A99D] transition-colors">Decoration & Design</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Beautiful and creative designs to match your event's theme and vision with attention to every detail.</p>
                <div className="flex items-center text-[#00A99D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16">
            <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-[#00A99D] to-[#1C2B4D] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Get Custom Quote</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Brand Aligned */}
      <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#00A99D] to-[#1C2B4D] rounded-xl mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1C2B4D]">
                  Our <span className="bg-gradient-to-r from-[#00A99D] to-[#1C2B4D] bg-clip-text text-transparent">Approach</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We are a passionate team dedicated to creating unforgettable experiences. 
                  With years of expertise in event management, we transform your vision into reality 
                  through meticulous planning and flawless execution.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#00A99D]/10 to-[#1C2B4D]/10 rounded-2xl">
                  <div className="text-3xl font-bold text-[#00A99D] mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Events Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#1C2B4D]/10 to-[#00A99D]/10 rounded-2xl">
                  <div className="text-3xl font-bold text-[#1C2B4D] mb-2">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#00A99D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Comprehensive Event Planning</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#1C2B4D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Event Support</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Custom Design Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-[#00A99D] to-[#1C2B4D] rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Creative Vision</h3>
                      <p className="text-white/80 text-sm">Innovative ideas for every occasion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Timely Execution</h3>
                      <p className="text-white/80 text-sm">On-time delivery, every time</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Passionate Team</h3>
                      <p className="text-white/80 text-sm">Dedicated professionals who care</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00A99D]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1C2B4D]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#1C2B4D]">Our Work Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/photo1.jpg", "/photo2.jpg", "/photo4.jpg", "/photo5.jpg", "/photo6.jpg", "/photo7.jpg"].map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={image}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Event Highlight</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#1C2B4D]">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"Absolutely amazing service! They made our wedding day perfect. Every detail was handled with care and professionalism."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#00A99D] rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah & Michael</p>
                  <p className="text-sm text-gray-600">Wedding Couple</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"Our corporate event was a huge success thanks to their exceptional planning and execution. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1C2B4D] rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Ahmed Hassan</p>
                  <p className="text-sm text-gray-600">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"They turned our daughter's birthday party into a magical experience. The attention to detail was incredible!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Meron Tadesse</p>
                  <p className="text-sm text-gray-600">Happy Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* Unique Footer */}
      <footer className="relative bg-gradient-to-br from-[#1C2B4D] via-[#1C2B4D] to-[#00A99D] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#00A99D] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/agame.jpg" alt="Eventify Logo" className="h-12 w-12 rounded-xl shadow-lg" />
                <span className="text-2xl font-black bg-gradient-to-r from-white to-[#00A99D] bg-clip-text text-transparent">
                  Eventify
                </span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Creating unforgettable experiences through exceptional event planning and flawless execution.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A99D] rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00A99D] rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/80 hover:text-[#00A99D] transition-colors">Home</a></li>
                <li><a href="#services" className="text-white/80 hover:text-[#00A99D] transition-colors">Solutions</a></li>
                <li><a href="#about" className="text-white/80 hover:text-[#00A99D] transition-colors">Our Approach</a></li>
                <li><a href="#gallery" className="text-white/80 hover:text-[#00A99D] transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-[#00A99D] transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#00A99D] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-white/80">+251 91 150 8734</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#1C2B4D] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <a href="mailto:g.fikre2@gmail.com" className="text-white/80 hover:text-[#00A99D] transition-colors">g.fikre2@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {new Date().getFullYear()} Eventify. All rights reserved. Crafted with ❤️ in Ethiopia.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-[#00A99D] transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-[#00A99D] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
