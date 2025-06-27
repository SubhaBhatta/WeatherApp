import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: "🌍",
      title: "Global Coverage",
      description:
        "Get weather data for any city worldwide with accurate, real-time updates",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Optimized performance with instant search results and smooth animations",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description:
        "Responsive design that works perfectly on all devices and screen sizes",
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description:
        "Dynamic backgrounds and glassmorphism effects that adapt to weather conditions",
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description:
        "Recent searches and intelligent suggestions for quick access to favorite locations",
    },
    {
      icon: "📊",
      title: "Detailed Data",
      description:
        "Comprehensive weather metrics including humidity, wind speed, visibility, and more",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-500" },
    { name: "OpenWeather API", icon: "🌤️", color: "text-orange-500" },
    { name: "JavaScript ES6+", icon: "🚀", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center">
            <div className="text-6xl mb-4">🌤️</div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              About WeatherApp
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Your trusted companion for accurate, real-time weather information
              worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Description Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">📖</span>
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              WeatherApp is a modern, user-friendly application designed to
              provide accurate and up-to-date weather information for locations
              worldwide. Built with React and powered by reliable weather APIs,
              it offers detailed forecasts, current conditions, and more to help
              you plan your day with confidence.
            </p>
            <p>
              Our goal is to deliver weather data in a simple, intuitive
              interface while keeping performance and accessibility a priority.
              Whether you're checking the weather for your hometown or traveling
              somewhere new, WeatherApp aims to keep you informed with just a
              few clicks.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-800 font-medium">
                <span className="text-2xl mr-2">👨‍💻</span>
                Developed by{" "}
                <span className="font-bold text-blue-600">
                  Subhadaya Bhatta
                </span>{" "}
                as a part of learning and project building, this app is
                continuously improving. Your feedback and contributions are
                always welcome!
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <span className="mr-3">✨</span>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <span className="mr-3">🛠️</span>
            Built With
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className={`text-lg font-bold ${tech.color}`}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Check the Weather?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Experience accurate weather forecasts with our beautiful, intuitive
            interface
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
                🌤️ Try WeatherApp Now
              </button>
            </Link>

            <a
              href="https://github.com/SubhaBhatta/WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300 transform hover:scale-105"
            >
              ⭐ View on GitHub
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="mr-2">💬</span>
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Have suggestions, found a bug, or want to contribute? We'd love to
              hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium">
                📧 Feedback Welcome
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full text-purple-600 font-medium">
                🚀 Continuously Improving
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
