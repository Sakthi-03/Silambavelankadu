import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Heart, ArrowRight, Video, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Heavy Impact Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
          <div
            className="w-full h-full bg-[url('/images/cover1.png?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center animate-scale-in"
            style={{ animationDuration: '20s' }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-blob animation-delay-400" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center mt-16 sm:mt-0">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up">
            <span className="text-emerald-300 font-medium text-sm tracking-wide">
              நம்ம ஊர் பெருமை
            </span>
          </div>

          <h1 className="text-3xl min-[375px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-tamil font-bold text-white mb-6 leading-relaxed py-4 animate-fade-in-up animation-delay-200 drop-shadow-xl text-center mx-auto w-full">
            <span className="block text-emerald-100 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-emerald-200 sm:via-white sm:to-emerald-200 py-6 px-4 sm:px-8">
              சிலம்பவேளாங்காடு
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 font-medium text-emerald-50/90">
              இயற்கையின் இசை ஒலிக்கும் நிலம் 🌿
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 font-medium leading-relaxed mb-10 animate-fade-in-up animation-delay-400 px-4">
            வயல்வெளிக் காற்றும், வண்டிகளின் ஓசையும், மனதை மயக்கும் மணம் வீசும் மண்ணும்...
            எங்கள் கிராமம் உங்களை அன்புடன் வரவேற்கிறது.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>மேலும் அறிய</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              தொடர்பு கொள்க
            </Link>
          </div>
        </div>


      </section>

      {/* Bento Grid Features - Mobile First */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-tamil">
              சிறப்பம்சங்கள்
            </h2>
            <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {/* About Card - Large */}
            <Link to="/about" className="group md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-800" />
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">எங்களைப் பற்றி</h3>
                  <p className="text-emerald-100 line-clamp-2">எங்கள் கிராமத்தின் வரலாறு, பண்பாடு மற்றும் சமூக வாழ்க்கை</p>
                </div>
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <div className="bg-white text-emerald-900 p-3 rounded-full">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Services Card */}
            <Link to="/services" className="group relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="h-full p-8 flex flex-col">
                <div className="bg-blue-100 w-fit p-3 rounded-2xl text-blue-600 mb-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">சேவைகள்</h3>
                <p className="text-gray-500 text-sm">கல்வி, சுகாதாரம், மற்றும் போக்குவரத்து</p>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link to="/gallery" className="group relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="h-full p-8 flex flex-col">
                <div className="bg-orange-100 w-fit p-3 rounded-2xl text-orange-600 mb-auto">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">படங்கள்</h3>
                <p className="text-gray-500 text-sm">எங்கள் கிராமத்தின் அழகான காட்சிகள்</p>
              </div>
            </Link>

            {/* Video Gallery Card - New */}
            <Link to="/videos" className="group md:col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {/* Placeholder for video thumbnail or looping video */}
                <div className="w-full h-full bg-[url('/images/Temples/Murugan%20Temple.png')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <div className="relative z-20 h-full p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Video className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold">இயங்குபடங்கள்</h3>
                </div>
                <p className="text-gray-300 ml-16">திருவிழாக்கள் மற்றும் நிகழ்வுகளை காணொளியில் காணுங்கள்</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview - Refined */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-2 block">புதுப்பிப்புகள்</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">சமீபத்திய செய்திகள்</h2>
            </div>
            <Link
              to="/news"
              className="group flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors"
            >
              அனைத்தையும் காண்க
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Card 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-700 z-10">
                  புதிது
                </div>
                <img
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="சுகாதார மையம்"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  புதிய சுகாதார மையம் திறப்பு
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-2">
                  எங்கள் கிராமத்தில் நவீன வசதிகளுடன் கூடிய புதிய முதன்மை சுகாதார மையம் திறக்கப்பட்டுள்ளது...
                </p>
                <Link to="/news" className="text-sm font-bold text-primary-600 hover:text-primary-700 uppercase tracking-wide">
                  மேலும் படிக்க
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-700 z-10">
                  திட்டம்
                </div>
                <img
                  src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="சுற்றுச்சூழல்"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  சுற்றுச்சூழல் பாதுகாப்பு திட்டம்
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-2">
                  மரங்கள் நடுதல் மற்றும் கழிவு மேலாண்மை திட்டம் தொடங்கப்பட்டது. அனைவரும் இதில்...
                </p>
                <Link to="/news" className="text-sm font-bold text-primary-600 hover:text-primary-700 uppercase tracking-wide">
                  மேலும் படிக்க
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;