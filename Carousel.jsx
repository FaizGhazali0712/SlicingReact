import React from 'react';

const Carousel = ({ children }) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
        
        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {React.Children.map(children, (child, index) => (
              <div key={index} className="w-80 md:w-96 shrink-0">
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;