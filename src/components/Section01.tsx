import React, { useState } from 'react';

const images = {
  Apparel: "url('../image2.png')",
  Automotive: "url('../image2.svg')",
  Filtration: "url('../image3.svg')",
  'Customized Solutions': "url('../image4.svg')",
};

const Section01: React.FC = () => {
  const [bgImage, setBgImage] = useState(images.Apparel);
  const [selectedCategory, setSelectedCategory] = useState('Apparel');

  const handleBgChange = (category: string) => {
    setBgImage(images[category]);
    setSelectedCategory(category);
  };

  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: bgImage }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start pl-12">
        <h1 className="text-white text-4xl font-bold mb-4">Elevate Experiences [Section-01]</h1>
        <p className="text-white mb-8">Lorem Ipsum Quet</p>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          {Object.keys(images).map((category) => (
            <div key={category} className="mb-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => handleBgChange(category)}
                  className="mr-2"
                />
                <span className={`text-white ${selectedCategory === category ? 'font-bold' : 'underline'}`}>
                  {category}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section01;
