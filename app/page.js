"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gymdeals from "@/components/Gymdeals";
import Ourplans from "@/components/Ourplans";
import Imageslider from "@/components/Imageslider";
import Location from "@/components/Location";
import Timetable from "@/components/Timetable";
export default function Home() {

  return (
    <>
      <Navbar />


      <div className="font-sans pt-16  antialiased relative">
        {/* green band */}
        <div
          className="w-full flex items-center justify-center gap-3 py-3 text-black text-lg font-semibold"
          style={{ backgroundColor: 'rgb(178, 255, 0)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" role="img" aria-hidden="false">
            <title>promoTileIcon</title>
            <g fill="#000000" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g id="deals-icon" transform="translate(1.000000, 1.000000)" fillRule="nonzero">
                <path d="M0.248409605,0.270577378 C0.589793308,-0.0818902105 1.15063796,-0.0907573197 1.50310555,0.248409605 
        L1.50310555,0.248409605 L3.85732303,2.52060633 L4.64649575,1.73143361 C4.90364191,1.47428745 5.20290684,1.27256071 
        5.53985699,1.13512052 C5.87237359,0.997680329 6.22484117,0.928960233 6.5839591,0.928960233 C6.78568583,0.928960233 
        6.98519578,0.948911228 7.18027219,0.993246774 L7.18027219,0.993246774 L10.904458,1.82232148 
        C11.4187504,1.9375939 11.8842736,2.19474006 12.2544754,2.56715865 L12.2544754,2.56715865 L19.2040722,9.56552455 
        C19.4634351,9.82710427 19.6651619,10.1330195 19.8026021,10.4744032 C19.9356087,10.8024863 20.002112,11.1505203 
        19.9999489,11.5052047 C19.9976785,11.859889 19.9311751,12.2057063 19.7959517,12.5337893 
        C19.6562948,12.8729563 19.4523513,13.1788715 19.1907715,13.4382345 L19.1907715,13.4382345 
        L13.3961157,19.1996386 C13.1367528,19.4590016 12.8308375,19.6607283 12.4916706,19.7981685 
        C12.1635875,19.9311751 11.819987,19.9976785 11.4653027,19.9976785 C11.1061848,19.9976785 10.755934,19.9289584 
        10.4256341,19.793735 C10.0798169,19.6518612 9.77390161,19.4479177 9.51232189,19.1819044 
        L9.51232189,19.1819044 L2.5915432,12.1658043 C2.21912461,11.7867354 1.96419523,11.3123451 1.85778992,10.7936192 
        L1.85778992,10.7936192 L1.08413464,7.03839844 C0.895708574,6.13173653 1.17502251,5.20069007 1.82897181,4.54674077 
        L1.82897181,4.54674077 L2.60262709,3.77308549 L0.270577378,1.52527332 C-0.0818902105,1.18388962 
        -0.0907573197,0.623044967 0.248409605,0.270577378 Z M6.5839591,2.70238206 
        C6.33124648,2.70238206 6.08518421,2.80213704 5.90119169,2.98391278 L5.90119169,2.98391278 
        L5.13418675,3.75091772 L6.02976477,4.61324409 C6.38223236,4.95462779 6.39109947,5.51547244 6.05193255,5.86794003 
        C5.87680714,6.04749899 5.6462623,6.13838686 5.41350069,6.13838686 C5.19182296,6.13838686 
        4.97014523,6.0563661 4.7972366,5.8901078 L4.7972366,5.8901078 L3.8794908,5.00339689 
        L3.08366776,5.79921994 C2.85312292,6.02976477 2.75336794,6.36006459 2.81987126,6.67928052 
        L2.81987126,6.67928052 L3.59352653,10.436718 C3.63121175,10.6184938 3.72209962,10.7869688 3.85288948,10.9199755 
        L3.85288948,10.9199755 L10.7736682,17.9360756 C10.964311,18.1289352 11.2125901,18.2242566 11.4630859,18.2242566 
        C11.711365,18.2242566 11.9574272,18.131152 12.1458533,17.9427259 L12.1458533,17.9427259 
        L17.9405091,12.1813217 C18.3195781,11.8044696 18.3217948,11.1926391 17.9449427,10.8135702 
        L17.9449427,10.8135702 L10.9953459,3.81520426 C10.864556,3.6844144 10.6982977,3.59352653 10.5187388,3.55362454 
        L10.5187388,3.55362454 L6.79455294,2.72454984 C6.72361606,2.7090324 6.65489597,2.70238206 6.5839591,2.70238206 
        Z M12.1214688,10.0266142 C13.0502984,10.0266142 13.5889753,10.7603675 13.5889753,11.6958475 
        C13.5889753,12.6424114 13.0502984,13.3739479 12.1214688,13.3739479 C11.1926391,13.3739479 
        10.6628293,12.6424114 10.6628293,11.6958475 C10.6628293,10.7581507 11.1926391,10.0266142 
        12.1214688,10.0266142 Z M12.8086697,7.1004682 L8.64777875,13.2874936 L7.36648148,13.2874936 
        L11.5273724,7.1004682 L12.8086697,7.1004682 Z M12.1214688,10.9886956 
        C11.8465884,10.9886956 11.7246656,11.2458417 11.7246656,11.7047146 C11.7246656,12.1547204 
        11.8488052,12.4207337 12.1214688,12.4207337 C12.3763981,12.4207337 12.527139,12.1547204 12.527139,11.7047146 
        C12.527139,11.2458417 12.3763981,10.9886956 12.1214688,10.9886956 Z M8.05589921,7.01179711 
        C8.9847289,7.01179711 9.52340578,7.74555039 9.52340578,8.68103041 C9.52340578,9.62759431 
        8.9847289,10.3591308 8.05589921,10.3591308 C7.12706953,10.3591308 6.59725976,9.62759431 6.59725976,8.68103041 
        C6.59725976,7.74333362 7.12706953,7.01179711 8.05589921,7.01179711 Z M8.05589921,7.97387845 
        C7.78101883,7.97387845 7.65909608,8.23102462 7.65909608,8.68989752 C7.65909608,9.13990331 
        7.78323561,9.40591658 8.05589921,9.40591658 C8.3108286,9.40591658 8.46156946,9.14212009 
        8.46156946,8.68989752 C8.46156946,8.23102462 8.3108286,7.97387845 8.05589921,7.97387845 Z"></path>
              </g>
            </g>
          </svg>
          <span className="font-bold">50% OFF First Month</span>
        </div>
        {/* Screen-size space for sliding photos */}
        <div className="flex justify-around items-center p-4 bg-[rgb(229,239,250)] rounded-lg">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">London Oxford Street</h2>

            <div className="mt-1 text-sm text-gray-700 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
              </svg>
              Opening hours • Full details
            </div>

            <div className="mt-1 text-sm text-gray-700 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414zM12 14a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              120 Oxford Street, Entrance on Wells Street, London, W1D 1LT
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white px-6 py-4 rounded-xl shadow text-center min-w-[140px]">
            <p className="text-base text-gray-600">from</p>
            <p className="text-2xl font-bold text-blue-800">£28.99</p>
            <p className="text-base text-gray-600">per month</p>
          </div>

        </div>

        {/* gym Deals */}
        <Gymdeals />

        <Ourplans />

        <Imageslider />

        <Location />

        <Timetable />

        <div className="bg-blue-700 text-white py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">FACILITIES</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Spacious Gym */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Spacious Gym</h3>
                  <p className="text-blue-100">Our gyms are bright with a laid-back atmosphere</p>
                </div>
              </div>

              {/* Changing Rooms */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Changing Rooms</h3>
                  <p className="text-blue-100">We have lots of lockers available (don't forget your padlock)</p>
                </div>
              </div>

              {/* Personal Trainers */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Trainers</h3>
                  <p className="text-blue-100">Improve your form and help you meet your goals faster</p>
                </div>
              </div>

              {/* Cardio Machines */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cardio Machines</h3>
                  <p className="text-blue-100">Get your heart pumping and your pulse racing</p>
                </div>
              </div>

              {/* Weights Area */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weights Area</h3>
                  <p className="text-blue-100">Equipment to help you flex every major muscle group</p>
                </div>
              </div>

              {/* Free WiFi */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free WiFi</h3>
                  <p className="text-blue-100">Our gyms provide free Wi-Fi access to all members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Full-width image with container */}
          <div className="w-full h-64 md:h-96 lg:h-[28rem]  overflow-hidden shadow-lg mb-8">
            <img
              src="https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group_Asset-Generic-Member_Doing_Goblet_Squats_At_A_Gym_Class?fmt=auto&h=545&w=1341&sm=c&qlt=default&$qlt$&$poi$"
              alt="Group fitness class at Oxford Street gym"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content below image */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold  mb-4" style={{ color: 'rgb(46, 148, 255)' }}>
              Gym Classes Oxford Street
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking to add movement to your life, bulk up, or lose weight -
              explore our classes and meet your fitness goals.
            </p>

          </div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Full-width image with container */}
          <div className="w-full h-64 md:h-96 lg:h-[28rem]  overflow-hidden shadow-lg mb-8">
            <img
              src="https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group_Asset-Generic-Member_Squating_In_Front_The_Rack_With_A_Personal_Trainer?fmt=auto&h=545&w=1341&sm=c&qlt=default&$qlt$&$poi$"
              alt="Group fitness class at Oxford Street gym"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content below image */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold  mb-4" style={{ color: 'rgb(46, 148, 255)' }}>
              Personal Trainers
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Oxford Street PT's support you with fresh new ideas to bring variety back to your workout
            </p>

          </div>
        </div>

        <Footer />
        <div className="py-10 px-4" style={{ backgroundColor: 'rgb(46, 148, 255)' }}>
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {/* Sunday Times Award */}
              <div className="flex flex-col items-center">
                <div className="h-20 w-48 relative">
                  <img
                    src="https://www.thegymgroup.com/_next/image/?url=%2Fywnqh%2Fimages%2Fsunday-times_2024.png&w=256&q=100"
                    alt="Sunday Times Award"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Carbon Neutral Award */}
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 relative">
                  <img
                    src="https://www.thegymgroup.com/_next/image/?url=%2Fywnqh%2Fimages%2Fcarbon-neutral.png&w=96&q=100"
                    alt="Carbon Neutral Certified"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Investors in People Gold */}
              <div className="flex flex-col items-center">
                <div className="h-20 w-48 relative">
                  <img
                    src="https://www.thegymgroup.com/_next/image/?url=%2Fywnqh%2Fimages%2Finvest-in-people-gold.png&w=256&q=100"
                    alt="Investors in People Gold Award"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Glassdoor Award */}
              <div className="flex flex-col items-center">
                <div className="h-20 w-36 relative">
                  <img
                    src="https://www.thegymgroup.com/_next/image/?url=%2Fywnqh%2Fimages%2Fglassdoor-2022.png&w=256&q=100"
                    alt="Glassdoor Best Places to Work 2022"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
