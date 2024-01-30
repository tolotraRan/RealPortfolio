import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  title: string;
  link: string;
}

const navlinks: NavLink[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Skill', link: '/skill' },
  { title: 'Formation', link: '/formation' },
  { title: 'Contact', link: '/contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`bg-${isScrolled ? 'gray' : 'transparent'}-800 w-full z-50 transition-all duration-300 ease-in-out absolute top-0`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/"className="text-orange-600">
              <h1>Tolotra</h1>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <a
                  href={link.link}
                  key={index}
                  className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
