import React, { useState } from "react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState("");

  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+977 9849924465",
      href: "tel:+9779849924465",
      copyable: true,
      description: "Available during business hours (9 AM - 6 PM NPT)",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "subhabhatta3@gmail.com",
      href: "mailto:subhabhatta3@gmail.com",
      copyable: true,
      description: "Best way to reach me for detailed discussions",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/subhadaya-bhatta-2775aa301",
      href: "https://www.linkedin.com/in/subhadaya-bhatta-2775aa301/",
      copyable: false,
      description: "Connect with me professionally",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "https://maps.google.com/?q=Kathmandu,Nepal",
      copyable: false,
      description: "Nepal Standard Time (NPT, UTC+5:45)",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/SubhaBhatta",
      href: "https://github.com/SubhaBhatta",
      copyable: false,
      description: "Check out my projects and contributions",
    },
  ];

  const quickActions = [
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Interested in working together on exciting projects?",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🐛",
      title: "Bug Reports",
      description: "Found an issue with WeatherApp? Let me know!",
      color: "from-red-500 to-red-600",
    },
    {
      icon: "💡",
      title: "Feature Ideas",
      description: "Have suggestions to improve WeatherApp?",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "❓",
      title: "General Questions",
      description: "Any questions about my work or projects?",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center">
            <div className="text-6xl mb-4">👋</div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Let's Connect!
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss WeatherApp, collaborate on projects, or just say
              hello?
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Feel free to reach out for any questions, feedback, or collaboration
            opportunities related to WeatherApp or other projects. I'm always
            excited to connect with fellow developers and weather enthusiasts!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="mr-3">🚀</span>
            What Can I Help You With?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${action.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-white/90">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="mr-3">📬</span>
            Get In Touch
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-3xl">{contact.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-gray-800">
                          {contact.label}
                        </h3>
                        {contact.copyable && (
                          <button
                            onClick={() =>
                              copyToClipboard(contact.value, contact.label)
                            }
                            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                            title="Copy to clipboard"
                          >
                            {copiedField === contact.label ? (
                              <span className="text-green-500 text-sm font-medium">
                                ✓ Copied!
                              </span>
                            ) : (
                              <span className="text-sm">📋</span>
                            )}
                          </button>
                        )}
                      </div>
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-200 hover:underline"
                      >
                        {contact.value}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-200">
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Response Time
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-bold text-gray-800">Email</div>
                <div className="text-sm text-gray-600">Within 24 hours</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl mb-2">🔗</div>
                <div className="font-bold text-gray-800">LinkedIn</div>
                <div className="text-sm text-gray-600">Within 2-3 days</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold text-gray-800">Phone</div>
                <div className="text-sm text-gray-600">Business hours only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start a Conversation?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether it's about WeatherApp, web development, or potential
            collaborations, I'm always excited to connect with new people!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:subhabhatta3@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              ✉️ Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/subhadaya-bhatta-2775aa301/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300 transform hover:scale-105"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-3xl mb-4">🌤️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Fun Fact</h4>
            <p className="text-gray-600">
              I check the weather at least 3 times a day, which is exactly why I
              built WeatherApp! Perfect for fellow weather enthusiasts like me
              😄
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
