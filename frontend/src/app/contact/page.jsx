import React from 'react'
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'support@e-shopping.com',
      action: 'mailto:support@e-shopping.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Start Chat',
      action: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come say hello at our office',
      contact: '123 Shopping St, City, State 12345',
      action: '#'
    }
  ]

  const faqs = [
    {
      question: 'What are your shipping options?',
      answer: 'We offer free standard shipping on orders over $50, express shipping (2-3 days), and overnight delivery options.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be in original condition with tags attached.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 25 countries worldwide. International shipping rates vary by location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track orders in your account.'
    }
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We're here to help! Reach out to us with any questions, concerns, or feedback. 
              Our friendly support team is ready to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-indigo-600 font-medium">{method.contact}</p>
            </a>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Technical Issue</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info & Map */}
          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Store</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-indigo-600 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Shopping Street<br />City, State 12345<br />United States</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-indigo-600 mt-1">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-indigo-600 mt-1">🚗</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Parking</h3>
                    <p className="text-gray-600">Free parking available in our lot</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Click to open in Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions. Can't find what you're looking for? 
              Contact us directly!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default ContactPage