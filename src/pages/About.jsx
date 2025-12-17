import React from 'react';
import { History, Leaf, Users, Award, MapPin, Calendar, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">எங்கள் கிராமத்தைப் பற்றி</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            பாரம்பரியமும் நவீனத்துவமும் இணைந்த எங்கள் கிராமம் ஒரு சிறந்த வாழ்விடமாக விளங்குகிறது
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">எங்கள் வரலாறு</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                சிலம்பவேளாங்காடு என்பது தமிழ்நாடு மாநிலம், தஞ்சாவூர் மாவட்டம், பட்டுக்கோட்டை வட்டத்தில் உள்ள ஒரு கிராமம் ஆகும். இது மூத்தகுறிச்சி பஞ்சாயத்து கீழ் வருகிறது. இது தஞ்சாவூர் மாவட்டத் தலைமையகத்திலிருந்து தெற்கே சுமார் 52 கி.மீ. தொலைவில், மதுக்கூரிலிருந்து 4 கி.மீ. தொலைவில் மற்றும் மாநிலத் தலைநகரான சென்னை நகரிலிருந்து 354 கி.மீ. தொலைவில் அமைந்துள்ளது.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                சிலம்பவேளாங்காடு கிராமத்தின் அஞ்சல் குறியீடு 614906 ஆகும், அஞ்சல் தலைமையகம் நட்டுச்சாலை ஆகும்.

                சிலம்பவேளாங்காடு கிராமத்தைச் சுற்றி தெற்கில் பட்டுக்கோட்டை வட்டம், கிழக்கில் முத்துப்பேட்டை வட்டம், மேற்கில் திருவோணம் வட்டம், வடக்கில் ஒரத்தநாடு வட்டம் அமைந்துள்ளன.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                பட்டுக்கோட்டை, திருத்துறைப்பூண்டி, பேராவூரணி, நஞ்சிக்கோட்டை ஆகிய நகரங்கள் சிலம்பவேளாங்காடு அருகிலுள்ள நகரங்களாகும்.

                இக்கிராமம் வங்காள விரிகுடா அருகில் அமைந்துள்ளது. எனவே இப்பகுதியில் ஈரப்பதமான வானிலை காணப்படும் வாய்ப்பு உள்ளது.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                கல்வி, சுகாதாரம், போக்குவரத்து என அனைத்து அடிப்படை வசதிகளும் நம் கிராமத்தில் கிடைக்கின்றன.
                சுற்றுச்சூழலை பாதுகாத்து, இயற்கை விவசாயத்தை ஊக்குவிக்கும் நமது முயற்சிகள் பாராட்டப்பட்டுள்ளன.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  {/* <Calendar className="w-5 h-5 text-emerald-600" /> */}
                  {/* <span className="text-gray-700 font-medium">ஸ்தாபிக்கப்பட்ட ஆண்டு: 1975</span>/ */}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold">2,000+</div>
                    <div className="text-emerald-100">மக்கள் தொகை</div>
                  </div>
                  <div className="text-center">
                    <Leaf className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-emerald-100">பசுமை பகுதி</div>
                  </div>
                  <div className="text-center">
                    <History className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-emerald-100">குடும்பங்கள்</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-emerald-100">விருதுகள்</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Temples Section */}
          <section className="py-15 mb-20 mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-700 mb-12">
                எங்கள் கிராம கோவில்கள்
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Temple Image */}
                <div className="relative">
                  <img
                    src="/images/Temples/Murugan Temple.png"
                    alt="கோவில்"
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium text-emerald-700 mt-4">
                    ஸ்ரீ பாலசுப்ரமணியர் மற்றும் ஸ்ரீ சித்தி விநாயகர் கோவில்கள்
                  </p>
                </div>

                {/* Temple Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">ஸ்ரீ பாலசுப்ரமணியர் மற்றும் ஸ்ரீ சித்தி விநாயகர் கோவில்கள்</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    எங்கள் கிராமத்தில் பல நூற்றாண்டு பழமை வாய்ந்த கோவில்கள் உள்ளன. அவற்றில் முக்கியமானவை
                    <span className="font-semibold"> ஸ்ரீ பாலசுப்ரமணியர் கோவில் </span>
                    மற்றும் <span className="font-semibold"> ஸ்ரீ சித்தி விநாயகர் கோவில்</span>.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    ஒவ்வொரு ஆண்டும் நடைபெறும் திருவிழாக்களில்,
                    பல ஊர்களிலிருந்து மக்கள் வந்து கலந்து கொள்வார்கள்.
                    இந்த விழாக்கள் நம் கிராமத்தின் பாரம்பரியத்தையும், ஒற்றுமையையும் வெளிப்படுத்துகின்றன.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    சித்திரை மாத திருவிழாவில் <span className="font-semibold">காவடி</span>,
                    <span className="font-semibold">தேர் திருவிழா</span>,
                    மற்றும் <span className="font-semibold">பல்லக்கு</span> போன்ற நிகழ்வுகள் மிகுந்த
                    பக்தி சிறப்புடன் நடைபெறுகின்றன.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    இந்த கோவில்கள் நம் கிராம மக்களின் ஆன்மீக வாழ்வின் முக்கிய அங்கமாக விளங்கி,
                    அனைவருக்கும் ஒருமைப்பாடு, பக்தி, மற்றும் ஆன்மிக நம்பிக்கையை ஊட்டுகின்றன.
                  </p>

                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
                {/* Temple Image */}
                <div className="relative">
                  <img
                    src="/images/Temples/Kaliamman.PNG"
                    alt="கோவில்"
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium text-emerald-700 mt-4">
                    அருள்மிகு ஆகாச காளியம்மன் கோவில்
                  </p>
                </div>
                {/* Temple Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">அருள்மிகு ஆகாச காளியம்மன் கோவில்</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    எங்கள் கிராமத்தின் ஆன்மீக அடையாளமாக விளங்குவது
                    <span className="font-semibold"> ஸ்ரீ ஆகாச காளியம்மன் கோவில்</span>.
                    இந்த கோவில் பழமை வாய்ந்ததுடன், கிராம மக்கள் அனைவருக்கும் பாதுகாப்பையும்
                    செழிப்பையும் அளிக்கும் தெய்வமாக கருதப்படுகிறார்.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    குறிப்பாக <span className="font-semibold">ஆடி மாத திருவிழா</span> மிகுந்த
                    சிறப்புடன் நடைபெறுகிறது. அந்த விழாவில்
                    <span className="font-semibold"> அம்மன் அலங்காரம்</span>,
                    <span className="font-semibold"> பால்குடம்</span>, மற்றும்
                    <span className="font-semibold"> காவடி</span> போன்ற நிகழ்வுகள் மக்களை ஆன்மிக
                    மகிழ்ச்சியுடன் இணைக்கின்றன.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    மேலும் அம்மாவாசை அன்று <span className="font-semibold">அம்மனுக்கு சிறப்பு வழிபாடு</span> மற்றும்
                    <span className="font-semibold"> அன்னதானம்</span> மிகுந்த பக்தியுடன் நடைபெறும்.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    இந்த ஆகாச காளியம்மன் கோவில், கிராம மக்களின் நம்பிக்கை, பக்தி,
                    மற்றும் ஆன்மிக வாழ்வின் மையமாக இருந்து அனைவரையும் ஒன்றிணைக்கிறது.
                  </p>

                </div>
                
              </div>

            

            </div>
          </section>

          {/* Banquet Hall */}
          <section className="py-15 mb-20 mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-700 mb-12">
                எங்கள் கிராம திருமண மண்டபம்
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/*Image */}
                <div className="relative">
                  <img
                    src="/images/Temples/BanquetHall.jpg"
                    alt="மண்டபம்"
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium text-emerald-700 mt-4">
                    ஸ்ரீ பாலசுப்ரமணியர் மற்றும் ஸ்ரீ சித்தி விநாயகர் திருக்கோவில் திருமண மண்டபம்
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">ஸ்ரீ பாலசுப்ரமணியர் மற்றும் ஸ்ரீ சித்தி விநாயகர் திருக்கோவில் திருமண மண்டபம்</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    எங்கள் கிராமத்தில் அமைந்துள்ள <span className="font-semibold">திருமண மண்டபம்</span>
                    பாரம்பரிய அழகும், நேர்த்தியான வசதிகளும் கொண்டுள்ளது. இது பக்தர்களுக்கும்
                    மக்களுக்குமான சிறப்பான இடமாக அமைந்துள்ளது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    மண்டபத்தில் <span className="font-semibold">800+ பேர்</span> ஒரே நேரத்தில் அமர
                    வசதி உண்டு. இது பெரும் திருமண நிகழ்ச்சிகள் மற்றும் சமூக விழாக்களுக்கு
                    ஏற்ற இடமாக அமைந்துள்ளது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    இந்த மண்டபத்திற்கு <span className="font-semibold">மிகப்பெரிய வாகன நிறுத்து வளாகம்</span> உள்ளது,
                    இதன் மூலம் அதிகமான வாகனங்களை பாதுகாப்பாக நிறுத்த முடியும்.
                  </p>

                </div>
              </div>





            </div>
          </section>

          {/* Water Management */}
          <section className="py-15 mb-20 mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-700 mb-12">
                எங்கள் கிராம நீர் மேலாண்மை
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative">
                    <img
                      src="/images/Nature/Kasankuttai.jpg"
                      alt="ஏரி"
                      className="rounded-2xl shadow-lg w-full object-cover"
                    />
                    <p className="text-center text-sm font-medium text-emerald-700 mt-2">
                      காசாங்குட்டை ஏரி
                    </p>
                  </div>

                  <div className="relative">
                    <img
                      src="/images/Nature/Stone.jpg"
                      alt="ஏரி"
                      className="rounded-2xl shadow-lg w-full max-h-[300px] object-cover"
                    />
                    <p className="text-center text-sm font-medium text-emerald-700 mt-2">
                      கல்வெட்டு
                    </p>
                  </div>
                </div>

                {/* Description Section */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-5">காசாங்குட்டை ஏரி</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    எங்கள் கிராமத்தின் அழகான சுற்றுப்புறத்தில் அமைந்துள்ள <span className="font-semibold">காசாங்குட்டை ஏரி</span>,
                    1894 ஆம் ஆண்டு கட்டப்பட்ட பழமையான நீர் வளமாகும். இது நீர்தேவை மற்றும் இயற்கை அழகை வழங்கும் முக்கிய இடமாக உள்ளது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    ஏரியின் நீர்நிலை பரந்ததும் சுத்தமானதும் இருக்கிறது. சுற்றுப்புற சூழல் பாதுகாப்பில் இது முக்கிய பங்கு வகிக்கின்றது.
                    கிராம மக்களுக்கு நீர் ஆதாரமாகவும் விவசாயத்திற்கு ஆதரவாகவும் செயல்படுகிறது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    காசாங்குட்டை ஏரி நீர் மேலாண்மையில் முக்கிய இடத்தை பிடித்துள்ளது. விவசாய நிலங்களுக்கு நீர் வழங்கல்
                    விவசாயத்தின் வளர்ச்சிக்கு அடிப்படை ஆதாரம் ஆகும்.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    பரந்த வேளாண் நிலங்களுக்கு நீர் சீரானமாக கிடைக்கச் செய்கிறது.
                    இது மழைநீர் சேமிப்பு மற்றும் நிலத்தடி நீர் அளவை மேம்படுத்துவதில் முக்கிய பங்கு வகிக்கின்றது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    பருவநிலை மாற்றத்தால் பாதிக்கப்பட்ட விவசாயத்திற்கு இது ஆதரவாக செயல்படுகிறது.
                    ஏரியின் நீர் நிலை நிலைத்திருப்பதற்காக கிராம மக்கள் ஒத்துழைப்பு காட்டுகின்றனர்.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    ஏரிக்கு அருகில் பரந்த நடைபாதைகள் அமைக்கப்பட்டுள்ளன. இது கிராம மக்களுக்கு நடைபயணத்திற்கும்
                    ஆரோக்கிய அனுபவத்திற்கும் சிறந்த இடமாக அமைந்துள்ளது.
                  </p>
                </div>



              </div>
            </div>
          </section>

          {/* Agriculture */}
          <section className="py-15 mb-20 mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-700 mb-12">
                எங்கள் கிராம வேளாண்மை வளங்கள்
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <div className="relative">
                  <img
                    src="/images/Agri/paddy.png"
                    alt="பயிர்"
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium text-emerald-700 mt-4">
                    நாற்று நடவு
                  </p>
                </div>

                {/*  Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">நாற்று நடவு</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    மழை நீர் பொழிந்த பின், எங்கள் கிராமத்து <span className="font-semibold">  நிலத்தில் </span>
                    உள்ள வயல்களில் <span className="font-semibold">நாற்று நடவுப் பணிகள்</span> களைகட்டுகின்றன.
                    இது விவசாயத்தின் தொடக்கத்தையும், வளமான அறுவடையின் நம்பிக்கையையும் குறிக்கிறது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    விவசாயக் குடும்பங்கள் அனைவரும் ஒன்றுசேர்ந்து, சேற்றில் இறங்கி,
                    <span className="font-semibold"> ஒரே நேர்க்கோட்டில்</span> நெல் நாற்றுகளை நடுகின்றனர்.
                    பெண்களின் உழைப்பே இதில் பிரதானமாக உள்ளது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    இந்த நடவு முறை, நெற்பயிர்கள் சீராக வளரவும், <span className="font-semibold">அதிக மகசூல் </span>
                    தரவும் உதவுகிறது. உழவர்களின் நம்பிக்கையும், அடுத்த தலைமுறைக்கான உணவும்
                    இந்த ஈர மண்ணில் வேர்விடுகிறது.
                  </p>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <div className="relative">
                  <img
                    src="/images/Agri/coconut.jpg"
                    alt="பயிர்"
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium text-emerald-700 mt-4">
                    தென்னந்தோப்பு
                  </p>
                </div>

                {/*  Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">தென்னந்தோப்பு</h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    எங்கள் கிராமத்தின் பசுமைக்குப் பெருமை சேர்ப்பது <span className="font-semibold">பரந்து விரிந்த தென்னந்தோப்பு</span>.
                    வரிசையாக நடப்பட்ட தென்னை மரங்கள், தலைமுறை தலைமுறையாக வாழ்வாதாரமாக
                    விளங்கி, இந்தப் பகுதிக்கு குளுமையைத் தருகின்றன.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    ஒவ்வொரு மரமும் உயரமாக வளர்ந்து, நமக்கு <span className="font-semibold"> இளநீர், தேங்காய் மற்றும் தேங்காய் எண்ணெய் </span>
                    போன்ற அத்தியாவசியப் பொருட்களை வழங்குகிறது. இவற்றின் அறுவடை எங்கள் மக்களின்
                    முக்கிய வருமான ஆதாரமாக உள்ளது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    வெப்பமான காலங்களில், இந்தப் <span className="font-semibold">தென்னந்தோப்பின் நிழல் </span>
                    இளைப்பாற சிறந்த இடமாக உள்ளது. இயற்கையின் கொடையான இந்தத் தோப்பு,
                    சுற்றுச்சூழலுக்கும், வாழ்வாதாரத்திற்கும் அடித்தளமாக விளங்குகிறது.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    தேங்காய் மற்றும் இளநீர் மட்டுமன்றி, தென்னை மரத்தின் <span className="font-semibold">ஓலைகள் குடிசை வேயவும், மட்டைகள் விறகாகவும், நார் கயிறு திரிக்கவும்</span> என பல்வேறு கைவினைப் பொருட்களுக்குப் பயன்படுத்தப்படுகின்றன.
                  </p>

                </div>

                
              </div>

            </div>
          </section>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">சுற்றுச்சூழல் பாதுகாப்பு</h3>
              <p className="text-gray-600">
                இயற்கை விவசாயம், மரங்கள் நடுதல், மற்றும் சுத்தமான சூழலை பராமரித்தல்
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">சமூக ஒற்றுமை</h3>
              <p className="text-gray-600">
                அனைத்து மதம், சாதி பேதம் இன்றி ஒன்றிணைந்து வாழும் மக்கள்
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">கலை & பண்பாடு</h3>
              <p className="text-gray-600">
                பாரம்பரிய கலைகள், நாட்டுப்புற பாடல்கள் மற்றும் பண்டிகைகளை கொண்டாடுதல்
              </p>
            </div>
          </div>

          {/* Awards Section */}
          {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">எங்கள் சாதனைகள்</h2>
              <p className="text-lg text-gray-600">எங்கள் கிராமம் பெற்ற விருதுகள் மற்றும் அங்கீகாரங்கள்</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">சிறந்த கிராம விருது</h3>
                <p className="text-gray-600">2023 - மாவட்ட அளவில்</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">சுற்றுச்சூழல் விருது</h3>
                <p className="text-gray-600">2022 - மாநில அளவில்</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">சமூக சேவை விருது</h3>
                <p className="text-gray-600">2021 - தேசிய அளவில்</p>
              </div>
            </div>
          </div> */}
          
        </div>
      </section>
    </div>
  );
};

export default About;