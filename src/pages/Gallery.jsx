import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'அனைத்தும்' },
    { id: 'village', name: 'கிராம காட்சிகள்' },
    { id: 'festivals', name: 'பண்டிகைகள்' },
    { id: 'agriculture', name: 'விவசாயம்' },
    { id: 'temples', name: 'கோவில்கள்' }
  ];

  const images = [
    {
      url: '/images/Temples/Murugan Temple.png',
      title: 'முருகன் & விநாயகர் கோவில்',
      description: 'எங்கள் கிராமத்தின் முருகன் மற்றும் விநாயகர் கோவில்கள்',
      category: 'temples',
      // date: '2024-01-03'
    },
    {
      url: '/images/Temples/Kaliamman.PNG',
      title: 'அருள்மிகு ஆகாச காளியம்மன் கோவில்',
      description: 'எங்கள் கிராமத்தின் ஆகாச காளியம்மன் கோவில்',
      category: 'temples',
      // date: '2024-01-03'
    },

    {
      url: '/images/Nature/nature1.png',
      title: 'இயற்கை காட்சி',
      description: 'பறவைகள் பாடும் எங்கள் கிராமத்தின் இயற்கை அழகு',
      category: 'village',
      // date: '2024-01-15'
    },

    {
      url: '/images/Agri/paddy.png',
      title: 'நாற்று நடவு',
      description: 'மண் வாசனை கமழ, சேற்று வயலில் உழவர்கள் நெல் நாற்றுகளை நடும் காட்சி, விவசாயத்தின் உயிர் நாடியாய்.',
      category: 'agriculture',
      // date: '2024-01-10'
    },
    {
      url: '/images/Agri/coconut.jpg',
      title: 'தென்னந்தோப்பு',
      description: 'பசுமையான தென்னைகள் நிறைந்த பண்ணை நிலம், அலைபாயும் தென்னை ஓலைகளுடன்.',
      category: 'agriculture',
      // date: '2024-01-10'
    },
    {
      url: '/images/Temples/temple.png',
      title: 'பழமையான கிராமத்து கோயில்',
      description: 'மரபுவழி கட்டிடக்கலையுடன் கூடிய எழில்மிகு கிராமத்துக் கோயில். இதன் சுற்றுப்புறம் அமைதியையும், ஆன்மிக உணர்வையும் ஊட்டுகிறது.',
      category: 'temples',
      // date: '2024-01-03'
    },
    {
      url: '/images/Nature/pond1.png',
      title: 'மாலைக் குளத்து எழில்',
      description: 'மாலையில் கதிரவனின் செங்கதிர்கள் பட்டு, குளம் பொன்னிறமாய் மின்னும் இயற்கை எழிற்காட்சி.',
      category: 'village',
      // date: '2024-01-08'
    },
    {
      url: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'பண்டிகை கொண்டாட்டம்',
      description: 'சமூக பண்டிகைகள்',
      category: 'festivals',
      // date: '2024-01-05'
    },

    {
      url: '/images/Nature/Kasankuttai.jpg',
      title: 'காசாங்குட்டை ஏரி',
      description: 'காசாங்குட்டை ஏரியானது எங்கள் கிராமத்தின் நீர் ஆதாரம், சுற்றிலும் பசுமையும் நீரின் அமைதியும் கொண்ட மனதிற்கு இனிமையான இடம்.',
      category: 'village',
      // date: '2024-01-01'
    },
    {
      url: '/images/Temples/pond.jpg',
      title: 'ஊரணி',
      description: 'எங்கள் ஊரின் பழமையான ஊரணி',
      category: 'temples',
      // date: '2023-12-28'
    },
    {
      url: '/images/Agri/paddy1.jpg',
      title: 'பசும் வயல்வெளி',
      description: 'நீல வானின் கீழ் இளம்பச்சை நெற்பயிர்கள் விரிந்திருக்கும் காட்சி. கிராமத்தின் வளம் மற்றும் உழவர்களின் உழைப்பை பிரதிபலிக்கும் ஆரோக்கியமான விவசாய நிலம்.',
      category: 'village',
      // date: '2024-01-01'
    },
    {
      url: '/images/Agri/groundnut.png',
      title: 'வேர்க்கடலைத் தோட்டம்',
      description: 'மண்ணுக்குள் விளைந்து செழிக்கும் வேர்க்கடலை செடிகள் நிறைந்த விவசாய நிலம்.',
      category: 'agriculture',
      // date: '2023-12-25'
    },
    {
      url: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'தீபாவளி கொண்டாட்டம்',
      description: 'தீபாவளி விழா',
      category: 'festivals',
      // date: '2023-12-20'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };



  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">எங்கள் கிராமத்தின் படங்கள்</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            எங்கள் அழகான கிராமத்தின் சிறப்பம்சங்களை படங்களில் கண்டு மகிழுங்கள்
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

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">{image.description}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      {/* <Calendar className="w-3 h-3 mr-1" /> */}
                      {/* {new Date(image.date).toLocaleDateString('ta-IN')} */}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">படங்கள் இல்லை</h3>
              <p className="text-gray-500">இந்த வகையில் படங்கள் எதுவும் கிடைக்கவில்லை</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-200 mb-2">{filteredImages[selectedImage].description}</p>
              <div className="flex items-center text-sm text-gray-300">
                {/* <Calendar className="w-4 h-4 mr-2" /> */}
                {/* {new Date(filteredImages[selectedImage].date).toLocaleDateString('ta-IN')} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;