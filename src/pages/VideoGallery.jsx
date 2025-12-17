import { useState } from "react";
import { Video } from 'lucide-react';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [

    { id: 1, url: "/Silambavelankadu/videos/coverup.mp4", title: "கிராம இயற்கை" },
    { id: 2, url: "/Silambavelankadu/videos/temple.mp4", title: "கோவில்" },
    { id: 3, url: "/Silambavelankadu/videos/thiruvizha.mp4", title: "காளியம்மன் திருவிழா 2024" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section (same color as Gallery) */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <Video className="w-16 h-16 mx-auto mb-6" />
            எங்கள் கிராமத்தின் இயங்குபடங்கள்
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            எங்கள் அழகான கிராமத்தின் சிறப்பம்சங்களை இயங்குபடங்களில் கண்டு மகிழுங்கள்
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(video.url)}
              >
                <video
                  className="w-full h-[600px] object-cover" // Instagram Reels size
                  src={video.url}
                  muted
                  loop
                  autoPlay
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {video.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <video
              className="w-[350px] h-[600px] object-cover rounded-xl"
              src={selectedVideo}
              controls
              autoPlay
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
