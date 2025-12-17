import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'அனைத்தும்' },
    { id: 'announcement', name: 'அறிவிப்புகள்' },
    { id: 'development', name: 'வளர்ச்சி' },
    { id: 'events', name: 'நிகழ்வுகள்' },
    { id: 'health', name: 'சுகாதாரம்' }
  ];

  const news = [
    {
      id: 1,
      title: 'புதிய சுகாதார மையம் திறப்பு',
      excerpt: 'எங்கள் கிராமத்தில் நவீன வசதிகளுடன் கூடிய புதிய முதன்மை சுகாதார மையம் திறக்கப்பட்டுள்ளது. இந்த மையத்தில் 24 மணி நேர அவசர சிகிச்சை, மகப்பேறு சேவைகள், மற்றும் சிறப்பு மருத்துவ ஆலோசனைகள் கிடைக்கும்.',
      date: '2024-01-15',
      author: 'கிராம செயலாளர்',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'health',
      readTime: '3 நிமிடம்'
    },
    {
      id: 2,
      title: 'சுற்றுச்சூழல் பாதுகாப்பு திட்டம்',
      excerpt: 'மரங்கள் நடுதல் மற்றும் கழிவு மேலாண்மை திட்டம் தொடங்கப்பட்டது. அனைத்து குடும்பங்களும் இந்த திட்டத்தில் பங்கேற்க வேண்டுகோள் விடுக்கப்படுகிறது. ஒவ்வொரு வீட்டிலும் குறைந்தது ஒரு மரம் நடவேண்டும்.',
      date: '2024-01-10',
      author: 'சுற்றுச்சூழல் குழு',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      readTime: '2 நிமிடம்'
    },
    {
      id: 3,
      title: 'கிராம சபை கூட்டம்',
      excerpt: 'அடுத்த மாதம் 25ஆம் தேதி நடைபெறும் கிராம சபை கூட்டத்தில் அனைவரும் கலந்து கொள்ள வேண்டுகோள் விடுக்கப்படுகிறது. கிராமத்தின் வளர்ச்சி திட்டங்கள் குறித்து விவாதிக்கப்படும்.',
      date: '2024-01-05',
      author: 'கிராம தலைவர்',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'announcement',
      readTime: '1 நிமிடம்'
    },
    {
      id: 4,
      title: 'பொங்கல் விழா கொண்டாட்டம்',
      excerpt: 'இந்த ஆண்டு பொங்கல் விழா கிராம மையத்தில் சிறப்பாக கொண்டாடப்படும். பாரம்பரிய விளையாட்டுகள், கலை நிகழ்ச்சிகள் மற்றும் உணவு விருந்து ஏற்பாடு செய்யப்பட்டுள்ளது.',
      date: '2024-01-03',
      author: 'கலாச்சார குழு',
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      readTime: '4 நிமிடம்'
    },
    {
      id: 5,
      title: 'புதிய சாலை அமைப்பு பணி',
      excerpt: 'கிராமத்தின் முக்கிய சாலைகளில் புதிய டார் சாலை அமைக்கும் பணி தொடங்கப்பட்டுள்ளது. இந்த பணி 3 மாதங்களில் முடிவடையும் என எதிர்பார்க்கப்படுகிறது.',
      date: '2024-01-01',
      author: 'பொறியியல் துறை',
      image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'development',
      readTime: '2 நிமிடம்'
    },
    {
      id: 6,
      title: 'இலவச மருத்துவ முகாம்',
      excerpt: 'அடுத்த வாரம் சனிக்கிழமை இலவச மருத்துவ முகாம் நடத்தப்படும். சிறப்பு மருத்துவர்கள் கலந்து கொண்டு இலவச பரிசோதனை மற்றும் மருந்துகள் வழங்கப்படும்.',
      date: '2023-12-28',
      author: 'சுகாதார அலுவலர்',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'health',
      readTime: '3 நிமிடம்'
    }
  ];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      announcement: 'bg-blue-100 text-blue-800',
      development: 'bg-green-100 text-green-800',
      events: 'bg-purple-100 text-purple-800',
      health: 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category) => {
    const names = {
      announcement: 'அறிவிப்பு',
      development: 'வளர்ச்சி',
      events: 'நிகழ்வு',
      health: 'சுகாதாரம்'
    };
    return names[category] || category;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">செய்திகள் & அறிவிப்புகள்</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            எங்கள் கிராமத்தின் சமீபத்திய செய்திகள் மற்றும் முக்கிய அறிவிப்புகள்
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                      {getCategoryName(item.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString('ta-IN')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>

                    <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group">
                      மேலும் படிக்க
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">செய்திகள் இல்லை</h3>
              <p className="text-gray-500">இந்த வகையில் செய்திகள் எதுவும் கிடைக்கவில்லை</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">செய்திமடல் பெறுங்கள்</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            எங்கள் கிராமத்தின் சமீபத்திய செய்திகளை உங்கள் மின்னஞ்சலில் பெறுங்கள்
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="உங்கள் மின்னஞ்சல் முகவரி"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              பதிவு செய்யுங்கள்
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;