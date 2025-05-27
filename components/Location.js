import React from 'react'

const Location = () => {
  return (
    <div>
          {/* location*/}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8"   style={{ color: 'rgb(46, 148, 255)' }}>Our Location</h2>

            <div className=" w-3/5 mx-auto shadow-lg overflow-hidden mb-6">
              <iframe
                title="Elevate Fitness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7444.505938022183!2d79.10446782121979!3d21.10247851562122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf458bd34505%3A0x5b0f0679cf83e390!2sElevate%20Fitness!5e0!3m2!1sen!2sin!4v1748284461603!5m2!1sen!2sin"
                className="w-full h-[450px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Elevate Fitness</h3>
              <p className="text-gray-600">Visit us at our conveniently located gym facility</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Location
