import React from 'react'

const Timetable = () => {
     const openingHours = [
    { day: 'Monday', hours: '06:00 am - 10:00 pm', offPeak: ['11:15 am - 09:45 pm', '01:15 am - 03:15 am'] },
    { day: 'Tuesday', hours: '06:00 am - 10:00 pm', offPeak: ['11:15 am - 09:45 pm', '01:15 am - 03:15 am'] },
    { day: 'Wednesday', hours: '06:00 am - 10:00 pm', offPeak: ['11:15 am - 09:45 pm', '01:15 am - 03:15 am'] },
    { day: 'Thursday', hours: '06:00 am - 10:00 pm', offPeak: ['11:15 am - 09:45 pm', '01:15 am - 03:15 am'] },
    { day: 'Friday', hours: '06:00 am - 10:00 pm', offPeak: ['11:15 am - 09:45 pm', '01:15 am - 03:15 am'] },
    { day: 'Saturday', hours: '06:00 am - 10:00 pm', offPeak: ['01:15 pm - 01:15 am'] }
    // { day: 'Sunday', hours: '08:00 am - 08:00 pm', offPeak: ['01:15 pm - 01:15 am'] }
  ];

  return (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
    
    {/* Opening Hours */}
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">Opening Hours</h2>
      </div>
      <ul className="space-y-3">
        {openingHours.map((item, index) => (
          <li key={index} className="flex justify-between items-baseline">
            <span className="text-gray-600 font-medium">{item.day}</span>
            <span className="text-gray-900 font-medium">{item.hours}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Off-Peak Hours */}
    <section className="bg-white hidden md:block  rounded-lg shadow-sm p-3">
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">Off-Peak Hours</h2>
      </div>
      <ul className="space-y-1">
        {openingHours.map((item, index) => (
          <li key={index}>
            <h3 className="text-gray-600 font-medium mb-2">{item.day}</h3>
            <ul className="text-gray-900 space-y-2">
              {item.offPeak.map((time, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {time}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>

    {/* Location */}
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">Location</h2>
      </div>
      <address className="not-italic space-y-2">
        <p className="text-gray-900 font-medium">Manewada Road , Nagpur</p>
        <p className="text-gray-600">Manewada ring road</p>
        <p className="text-gray-900 font-medium">C-45 Shiv shakti nagar, amar nagar road , 440034</p>
      </address>
      <a 
        href="https://maps.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Get directions
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="font-semibold">Note:</strong> The Gym Elevate Fitness may be remotely supervised on certain days to ensure your safety. 
          Learn more about our remotely supervised hours on our health and safety page.
        </p>
      </div>
    </section>

  </div>
</div>                              

  )
}

export default Timetable
