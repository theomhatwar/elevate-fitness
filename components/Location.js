import React from 'react'

const Location = () => {
  return (
    <div>
      {/* location*/}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10" style={{ color: 'rgb(46, 148, 255)' }}>
            Our Location
          </h2>

          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto rounded-lg shadow-xl overflow-hidden mb-6 md:mb-8 lg:mb-10 transition-all duration-300 hover:shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Elevate Fitness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7444.505938022183!2d79.10446782121979!3d21.10247851562122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf458bd34505%3A0x5b0f0679cf83e390!2sElevate%20Fitness!5e0!3m2!1sen!2sin!4v1748284461603!5m2!1sen!2sin"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 md:mb-3">
              Elevate Fitness
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Visit us at our conveniently located gym facility. We're open 6am-10pm every day to serve your fitness needs.
            </p>
            <div className="mt-4 md:mt-6">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location