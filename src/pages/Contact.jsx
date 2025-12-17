import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('உங்கள் செய்தி அனுப்பப்பட்டது! நாங்கள் விரைவில் தொடர்பு கொள்வோம்.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'முகவரி',
      details: [
        'சிலம்பவேளாங்காடு',
        'மூத்தாக்குறிச்சி அஞ்சல்',
        'பட்டுக்கோட்டை வட்டம்',
        'தஞ்சாவூர் மாவட்டம்',
        'தமிழ்நாடு - 614 906'
      ],
      color: 'emerald'
    },
    {
      icon: Phone,
      title: 'தொலைபேசி',
      details: [
        'முக்கிய: +91 98765 43210',
        'கிராம அலுவலகம்: +91 98765 43211',
        'அவசரம்: 108'
      ],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'மின்னஞ்சல்',
      details: [
        'info@ourvillage.com',
        'support@ourvillage.com',
        'admin@ourvillage.com'
      ],
      color: 'red'
    },
    {
      icon: Clock,
      title: 'அலுவலக நேரம்',
      details: [
        'திங்கள் - வெள்ளி: 9:00 AM - 5:00 PM',
        'சனி: 9:00 AM - 1:00 PM',
        'ஞாயிறு: மூடப்பட்டுள்ளது'
      ],
      color: 'green'
    }
  ];

  const departments = [
    {
      name: 'கிராம அலுவலகம்',
      head: 'திரு. ராமன்',
      phone: '+91 98765 43210',
      email: 'admin@ourvillage.com',
      icon: Building
    },
    {
      name: 'சுகாதார மையம்',
      head: 'டாக்டர் பிரியா',
      phone: '+91 98765 43211',
      email: 'health@ourvillage.com',
      icon: MessageCircle
    },
    {
      name: 'கல்வி துறை',
      head: 'திருமதி. சுதா',
      phone: '+91 98765 43212',
      email: 'education@ourvillage.com',
      icon: Users
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600'
    };
    return colors[color];
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">தொடர்பு கொள்ளுங்கள்</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            உங்கள் கேள்விகள், பரிந்துரைகள் அல்லது உதவிக்காக எங்களுடன் தொடர்பு கொள்ளுங்கள்
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">எங்களை அணுகுங்கள்</h2>
            <p className="text-lg text-gray-600">பல்வேறு வழிகளில் எங்களுடன் தொடர்பு கொள்ளலாம்</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${getColorClasses(info.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">செய்தி அனுப்பவும்</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        உங்கள் பெயர் *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="உங்கள் முழு பெயரை உள்ளிடுங்கள்"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        மின்னஞ்சல் *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        தொலைபேசி எண்
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+91 ***** *****"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        விஷயம் *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">விஷயத்தை தேர்ந்தெடுக்கவும்</option>
                        <option value="general">பொதுவான கேள்வி</option>
                        <option value="complaint">புகார்</option>
                        <option value="suggestion">பரிந்துரை</option>
                        <option value="service">சேவை கோரிக்கை</option>
                        <option value="other">மற்றவை</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      உங்கள் செய்தி *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                      placeholder="உங்கள் செய்தி அல்லது கேள்வியை இங்கே எழுதுங்கள்..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>செய்தி அனுப்பு</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">எங்கள் இடம்</h3>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.620912394243!2d79.37425475859324!3d10.44890928121122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaaaac5eb5bec1%3A0x1586925eea53e406!2sSilambavelankadu%2C%20Tamil%20Nadu%20614906!5e0!3m2!1sen!2sin!4v1758599372571!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>



              {/* Department Contacts */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">துறை தொடர்புகள்</h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <dept.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{dept.head}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">📞 {dept.phone}</p>
                          <p className="text-sm text-gray-600">✉️ {dept.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">அடிக்கடி கேட்கப்படும் கேள்விகள்</h2>
            <p className="text-lg text-gray-600">பொதுவான கேள்விகளுக்கான பதில்கள்</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">கிராம அலுவலகம் எங்கே உள்ளது?</h3>
              <p className="text-gray-600">கிராம அலுவலகம் கிராமத்தின் மையத்தில், பிரதான சாலையில் உள்ளது. பேருந்து நிறுத்தத்திலிருந்து 100 மீட்டர் தூரத்தில் உள்ளது.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">சான்றிதழ்களுக்கு எவ்வளவு நேரம் ஆகும்?</h3>
              <p className="text-gray-600">பிறப்பு, இறப்பு சான்றிதழ்கள் 3-5 வேலை நாட்களில் கிடைக்கும். வருமான சான்றிதழ் 7-10 வேலை நாட்களில் கிடைக்கும்.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">அவசர சேவைகள் எப்போது கிடைக்கும்?</h3>
              <p className="text-gray-600">மருத்துவ அவசரம் (108), காவல் துறை (100), தீயணைப்பு (101) ஆகியவை 24 மணி நேரமும் கிடைக்கும்.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;