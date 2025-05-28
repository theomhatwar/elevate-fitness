import React from 'react'
import { useState } from 'react';

const Imageslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-Entrance_1?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$',
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-Free_Weights_Area_1?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$',
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-Changing_Rooms_1?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$',
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-View_Of_Gym_3?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$',
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-Resistance_Machines_1?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$',
        'https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-London_Oxford_Street-Resistance_Machines_2?fmt=auto&h=544&w=1349&sm=c&qlt=default&$qlt$&$poi$'
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full overflow-hidden px-0 sm:px-4">
            <div className="w-full mx-auto pt-6 md:pt-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8" style={{ color: 'rgb(46, 148, 255)' }}>
                    Inside The Gym - Elevate
                </h2>

                <div className="relative group">
                    {/* Slider container */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-video h-auto max-h-[70vh] mx-auto overflow-hidden">
                        {/* Images */}
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img
                                    src={image}
                                    alt={`Gym interior ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation arrows - always visible on mobile */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 p-2 rounded-full shadow-md transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 p-2 rounded-full shadow-md transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imageslider