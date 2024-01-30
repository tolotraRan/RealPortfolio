import React from 'react';

const Bouton: React.FC = () => {
  return (
    <div className="relative z-10"> 
      <a href="#Contact">
        <button className="btn ml-3 border border-gray-300 hover:bg-neutral-500 hover:bg-opacity-50 transition duration-3000 bg-gradient-to-r font-medium rounded-xl cursor-pointer text-white text-lg md:text-xl sm:text-xl px-5 py-1 mt-5 md:px-10 md:py-3 sm:px-7 sm:py-2">
          <span className="CV">Contact me</span>
        </button>
      </a>
      <a href="#" download={"CV"}>
      <button className="btn ml-3 border border-gray-300 hover:bg-neutral-500 hover:bg-opacity-50 transition duration-3000 bg-gradient-to-r font-medium rounded-xl cursor-pointer text-white text-lg md:text-xl sm:text-xl px-5 py-1 mt-5 md:px-10 md:py-3 sm:px-7 sm:py-2">
          <span className="CV">Download CV</span>
        </button>
      </a>
    </div>
  );
};

export default Bouton;
