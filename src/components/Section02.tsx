import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section02: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6"><span className="text-blue-500">Next era</span> of possibilities</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <Slider {...settings}>
              <div>
                <img src="../asset0.svg" alt="Technology 1" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Embracing digital transformation that goes beyond products</p>
            <p className="text-gray-700 mt-2">
              Our pillars of Technology Development, System Integration, and Process Engineering drive innovation, streamline operations, and ensure long-term success in a dynamic market.
            </p>
              </div>
              <div>
                <img src="../image.png" alt="Technology 2" className="w-full h-auto mb-4" />
                
            <p className="text-gray-700 mt-2">
              Our pillars of Technology Development, System Integration, and Process Engineering drive innovation, streamline operations, and ensure long-term success in a dynamic market.
            </p>
              </div>
              <div>
                <img src="../image1.png" alt="Technology 3" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Drive innovation, streamline operations, and ensure long-term success in a dynamic market.</p>
              </div>
            </Slider>
            <br />
            <button className="mt-4 inline-block text-black py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: '#5CD6FF' }}>
              How do we innovate?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;





