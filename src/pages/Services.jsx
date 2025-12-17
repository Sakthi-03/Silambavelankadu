import React from 'react';
import { GraduationCap, Heart, Bus, Zap, Droplets, Wifi, Phone, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'கல்வி வசதிகள்',
      description: 'தரமான பள்ளிகள், நூலகம், மற்றும் கணினி வசதிகள்',
      details: [
        'முதன்மை பள்ளி - வகுப்பு 1 முதல் 5 வரை',
        'உயர்நிலை பள்ளி - வகுப்பு 6 முதல் 12 வரை',
        'கணினி மையம் - இலவச பயிற்சி',
        'நூலகம் - 5000+ புத்தகங்கள்'
      ],
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'சுகாதார சேவைகள்',
      description: 'முதன்மை சுகாதார மையம், மருத்துவர் மற்றும் மருந்தகம்',
      details: [
        '24/7 அவசர சிகிச்சை',
        'தடுப்பூசி திட்டம்',
        'மகப்பேறு சேவைகள்',
        'இலவச மருந்துகள்'
      ],
      color: 'red'
    },
    {
      icon: Bus,
      title: 'போக்குவரத்து',
      description: 'தொடர்ந்த பேருந்து சேவை, சாலை வசதி மற்றும் வாகன நிறுத்துமிடம்',
      details: [
        'மாவட்ட தலைநகருக்கு ஒவ்வொரு 30 நிமிடத்திற்கும் பேருந்து',
        'நல்ல சாலை வசதி',
        'வாகன நிறுத்துமிடம்',
        'ஆட்டோ ரிக்ஷா சேவை'
      ],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'மின்சார வசதி',
      description: '24/7 மின்சார வசதி, தெரு விளக்குகள் மற்றும் சோலார் ஒளி',
      details: [
        '24 மணி நேர மின்சாரம்',
        'LED தெரு விளக்குகள்',
        'சோலார் பேனல் திட்டம்',
        'மின் துணை நிலையம்'
      ],
      color: 'yellow'
    },
    {
      icon: Droplets,
      title: 'குடிநீர் வசதி',
      description: 'சுத்தமான குடிநீர், உயர்தர நீர் பிஸ்தல் மற்றும் கழிவு நீர் சுத்திகரிப்பு',
      details: [
        'வீடு வீடாக குடிநீர் வசதி',
        'நீர் சுத்திகரிப்பு ஆலை',
        'கழிவு நீர் சுத்திகரிப்பு',
        'மழை நீர் சேகரிப்பு'
      ],
      color: 'cyan'
    },
    {
      icon: Wifi,
      title: 'டிஜிட்டல் சேவைகள்',
      description: 'இண்டர்நெட் வசதி, ஆன்லைன் சேவைகள் மற்றும் டிஜிட்டல் கல்வி',
      details: [
        'இலவச Wi-Fi ஹாட்ஸ்பாட்',
        'டிஜிட்டல் கல்வி மையம்',
        'ஆன்லைன் அரசு சேவைகள்',
        'இ-கவர்னன்ஸ் சேவைகள்'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      green: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    };
    return colors[color];
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">எங்கள் சேவைகள்</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            உங்கள் வசதிக்காக வழங்கப்படும் அனைத்து அடிப்படை மற்றும் நவீன சேவைகள்
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${getColorClasses(service.color)} rounded-full flex items-center justify-center mx-auto mb-6 border-2`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <Phone className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                24/7 அவசர சேவைகள்
              </h2>
              <p className="text-lg text-red-100">
                அவசர காலங்களில் உங்களுக்கு உதவ எங்கள் குழு தயாராக உள்ளது
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">மருத்துவ அவசரம்</h3>
                <p className="text-3xl font-bold mb-2">108</p>
                <p className="text-red-100">24 மணி நேர சேவை</p>
              </div>

              <div className="text-center bg-white/10 rounded-xl p-6">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">காவல் துறை</h3>
                <p className="text-3xl font-bold mb-2">100</p>
                <p className="text-red-100">உடனடி உதவி</p>
              </div>

              <div className="text-center bg-white/10 rounded-xl p-6">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">தீயணைப்பு</h3>
                <p className="text-3xl font-bold mb-2">101</p>
                <p className="text-red-100">தீ விபத்து உதவி</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">அலுவலக நேரங்கள்</h2>
            <p className="text-lg text-gray-600">எங்கள் சேவை மையங்களின் செயல்பாட்டு நேரங்கள்</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">கிராம அலுவலகம்</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">திங்கள் - வெள்ளி</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">சனிக்கிழமை</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ஞாயிற்றுக்கிழமை</span>
                  <span className="font-semibold text-red-600">மூடப்பட்டுள்ளது</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">சுகாதார மையம்</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">திங்கள் - சனி</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ஞாயிற்றுக்கிழமை</span>
                  <span className="font-semibold">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">அவசர சேவை</span>
                  <span className="font-semibold text-green-600">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;