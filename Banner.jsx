import React from 'react';

const Banner = () => {
  return (
    <section className="w-full py-24 bg-linear-to-br from-gray-50 to-gray-100 flex flex-col items-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Building Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600">Products</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Kami membantu bisnis Anda berkembang dengan solusi teknologi terbaik. 
          Desain modern, performa cepat, dan hasil yang terukur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-linear-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-lg font-semibold text-indigo-600 border-2 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;