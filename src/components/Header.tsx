import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-semibold">Assignment</div>
          <div>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-700">Applications</a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-700">Innovation</a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-700">Company</a>
            <a href="#" className="ml-4 text-gray-500 hover:text-gray-700">Careers</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
