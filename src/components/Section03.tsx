import React from 'react';

const Section03: React.FC = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-8  text-white rounded-lg shadow-md" style={{backgroundColor:'#006ABC'}}>
            <address className="mb-6">
            <h2 className="text-4xl font-bold mb-6 text-left ">Get in touch</h2>
              <p className="text-lg mb-4">For general enquiries:</p>
              <p className="text-lg mb-4">Address: 110, 16th Road, Chembur, Mumbai - 400071</p>
              <p className="text-lg mb-4">Phone: +91 22 25208822</p>
              <p className="text-lg mb-4">Email: info@supremegroup.co.in</p>
            </address>
          </div>
          <div className="w-full md:w-1/2 p-8 text-white rounded-lg shadow-md" style={{backgroundColor:'#006ABC'}}>
            <form>
              <input type="text" placeholder="Full name" className="w-full mb-4 p-3 border rounded text-black" />
              <input type="email" placeholder="E-mail" className="w-full mb-4 p-3 border rounded text-black" />
              <input type="text" placeholder="Subject" className="w-full mb-4 p-3 border rounded text-black" />
              <textarea placeholder="Message" className="w-full mb-4 p-3 border rounded text-black"></textarea>
              <button type="submit" className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
