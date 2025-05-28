import React from 'react'

const Ourplans = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      {/* our plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading with custom blue color */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'rgb(46, 148, 255)' }}>
          Our Memberships
        </h2>

        {/* Description text */}
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto">
          We want our memberships to work as hard as you do. That's why we offer flexible packages
          and payment terms, so you can create a membership that provides exactly what you need.
        </p>

        {/* Thin divider line */}
        <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Header with title and icons */}
          <header className="p-6 sm:p-8 pb-4 sm:pb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">Ultimate</h3>
          </header>

          {/* Membership options */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            {/* Monthly option */}
            <div className="mb-6 border border-orange-500 rounded-lg bg-orange-50 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                <span className="font-bold text-base sm:text-lg">1 month rolling</span>
                <div className="text-right">
                  <div className="text-lg sm:text-xl font-bold text-orange-600">
                    <span className="text-gray-500 font-light text-sm line-through">₹1500</span>₹1200 
                    <span className="text-sm text-gray-600 font-normal"> /1st month</span>
                  </div>
                  <div className="text-sm text-gray-600">+ ₹300 joining fee</div>
                </div>
              </div>
              
              <hr className="border-t border-orange-200 my-3" />
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-3">
                <span className="text-sm sm:text-base text-gray-700">₹1500 after 1st month</span>
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors">
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

            <div className="flex flex-col md:flex-row gap-4">
              {/* 12-month saver option */}
              <div className="border w-full md:w-1/2 border-gray-200 rounded-lg p-4 sm:p-6 bg-white hover:border-orange-600 transition-colors">
                <div className="flex items-center mb-3 text-xs sm:text-sm bg-blue-950 px-3 py-1 rounded-full w-fit">
                  <span className="text-white font-bold">25% off code: saver</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <span className="font-bold text-base sm:text-lg">12 months</span>
                  <div className="text-lg sm:text-xl font-bold text-orange-600">
                    ₹14400 <span className="text-sm text-gray-600 font-normal">/upfront</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">+ no joining fee</div>
                <hr className="border-t border-gray-200 my-3" />
                <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-3">
                  <span className="text-sm sm:text-base text-gray-700">
                    equal to <span className="font-bold">₹1200.00</span>/month
                  </span>
                  <button className="w-full sm:w-auto text-blue-600 bg-white border border-gray-300 px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-colors">
                    Select
                  </button>
                </div>
              </div>

              {/* 6-month saver option */}
              <div className="border w-full md:w-1/2 border-gray-200 rounded-lg p-4 sm:p-6 hover:border-orange-600 bg-white transition-colors">
                <div className="flex items-center mb-3 text-xs sm:text-sm bg-blue-950 px-3 py-1 rounded-full w-fit">
                  <span className="text-white font-bold">25% off code: saver</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <span className="font-bold text-base sm:text-lg">6 months</span>
                  <div className="text-lg sm:text-xl font-bold text-orange-600">
                    ₹7200 <span className="text-sm text-gray-600 font-normal">/upfront</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">+ no joining fee</div>
                <hr className="border-t border-gray-200 my-3" />
                <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-3">
                  <span className="text-sm sm:text-base text-gray-700">
                    equal to <span className="font-bold">₹1200.00</span>/month
                  </span>
                  <button className="w-full sm:w-auto text-blue-600 bg-white border border-gray-300 px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-colors">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 sm:px-8 pb-4 sm:pb-6 text-xs sm:text-sm text-gray-500">
            * free freeze benefit is not included in saver memberships
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourplans