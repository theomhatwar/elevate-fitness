import React from 'react'

const Ourplans = () => {
  return (
    <div>
      
        {/* our plans */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          {/* Heading with custom blue color */}
          <h2
            className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-8"
            style={{ color: 'rgb(46, 148, 255)' }}
          >
            our memberships
          </h2>

          {/* Description text */}
          <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            We want our memberships to work as hard as you do. That's why we offer flexible packages
            and payment terms, so you can create a membership that provides exactly what you need.
          </p>

          {/* Thin divider line */}
          <div className="w-full h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        <div className="bg-white container rounded-2xl shadow-md mx-auto w-3/5 border border-gray-300 overflow-hidden">
          {/* Header with title and icons */}
          <header className="p-6 pb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-orange-600">ultimate</h3>
              
            </div>
          </header>

          {/* Membership options */}
          <div className="px-6 pb-6">
            {/* Monthly option */}
            <div className="mb-6 border border-orange-500 rounded-lg bg-pink-100 p-4" >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">1 month rolling</span>
                <div className="text-right">
                 
                  <div className="text-lg font-bold text-orange-600"> <span className="text-black font-light text-sm line-through">£45.99</span>  £36.99 <span className="text-sm text-black font-normal">/1st month</span></div>
                <div className="text-sm text-gray-600 mb-3">+ £20 joining fee</div>
                </div>
              </div>
              
              <hr className="border-t border-gray-200 my-2" />
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm">£45.99 after 1st month</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Select
                </button>
              </div>
            </div>

            {/* Divider with "or" */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

          <div className="flex  gap-4">
            {/* 12-month saver option */}
            <div className="border w-1/2 border-gray-200 rounded-lg p-4 bg-white hover:border-orange-600">
              <div className="flex items-center mb-2 text-sm bg-blue-950 px-2 py-1 rounded-full w-fit">
                {/* <svg viewBox="0 0 22 22" className="w-3 h-3 fill-white mr-1">
                  <path d="M0.248,0.271a0.689,0.689,0,0,1,1.255-.022L3.857,2.521,4.647,1.731a3.1,3.1,0,0,1,4.536,4.2L2.592,12.166a3.1,3.1,0,0,0-.734,3.6l1.084,3.755a3.1,3.1,0,0,0,3.8,2.2l3.755-1.084a3.1,3.1,0,0,0,1.9-1.4l6.488-8.8a3.1,3.1,0,0,1,4.2-4.2L19.191,19.2a3.1,3.1,0,0,1-4.2,0L0.248,1.525A0.689,0.689,0,0,1,0.248,0.271Z" />
                </svg> */}
                <span className="text-white font-bold">25% off code: saver</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">12 months</span>
                <div className="text-lg font-bold text-orange-600">£499 <span className="text-sm text-black font-normal">/upfront</span></div>
              </div>
              <div className="text-sm text-gray-600 mb-3">+ no joining fee</div>
              <hr className="border-t border-gray-200 my-2" />
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm">equal to <span className="font-bold">£41.58</span>/month</span>
                <button className="text-blue-600 bg-white border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-950 hover:text-white">
                  Select
                </button>
              </div>
            </div>
            {/* 6-month saver option */}
            <div className="border w-1/2 border-gray-200 rounded-lg p-4 hover:border-orange-600 bg-white">
              <div className="flex items-center mb-2 text-sm  bg-blue-950 px-2 py-1 rounded-full w-fit">
                {/* <svg viewBox="0 0 22 22" className="w-3 h-3 fill-white mr-1">
                  <path d="M0.248,0.271a0.689,0.689,0,0,1,1.255-.022L3.857,2.521,4.647,1.731a3.1,3.1,0,0,1,4.536,4.2L2.592,12.166a3.1,3.1,0,0,0-.734,3.6l1.084,3.755a3.1,3.1,0,0,0,3.8,2.2l3.755-1.084a3.1,3.1,0,0,0,1.9-1.4l6.488-8.8a3.1,3.1,0,0,1,4.2-4.2L19.191,19.2a3.1,3.1,0,0,1-4.2,0L0.248,1.525A0.689,0.689,0,0,1,0.248,0.271Z" />
                </svg> */}
                <span className=" text-white font-bold">25% off code: saver</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">6 months</span>
                <div className="text-lg font-bold text-orange-600">£249 <span className="text-sm text-black font-normal">/upfront</span></div>
              </div>
              <div className="text-sm text-gray-600 mb-3">+ no joining fee</div>
              <hr className="border-t border-gray-200 my-2" />
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm">equal to <span className="font-bold">£41.58</span>/month</span>
                <button className="text-blue-600 bg-white border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-950 hover:text-white">
                  Select
                </button>
              </div>
            </div>
          </div>
          </div>

          {/* Footer note */}
          <div className="px-6 pb-4 text-xs text-gray-500">
            * free freeze benefit is not included in saver memberships
          </div>
        </div>
    </div>
  )
}

export default Ourplans
