'use client';
import { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5'; // Updated Hamburger Icon
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when the menu is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the menu is closed
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-transparent">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img
              src="/logo/logo.png" // Same logo path for both desktop and mobile
              alt="Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Normal Menu Items for Desktop */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-white-600">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About Us
          </Link>
          <Link href="/producten" className="text-black hover:text-gray-600">
            Producten
          </Link>
          <Link href="/veranda-soorten" className="text-black hover:text-gray-600">
            Veranda Soorten
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <IoMenuOutline className="text-4xl text-black" />
          </button>
        </div>
      </div>

      {/* Fullscreen Desktop Menu - Hidden on mobile */}
      <div
        className={`fixed lg:hidden inset-0 bg-blue-800 z-50 text-white transition-transform duration-700 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } hidden lg:block`} // This ensures it's hidden on mobile
      >
        {/* Two-way slide effect */}
        <div
          className={`transition-transform duration-700 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="text-3xl" />
            </button>
          </div>

          <div className="flex h-full">
            {/* Left Menu Section */}
            <div className="w-3/4 pl-20 pt-24 space-y-8">
              {/** Main Menu Items **/}
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.title}
                    className={`relative text-4xl font-bold cursor-pointer mb-6 hover:text-gray-300`}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link href={item.link}>
                      <span className="relative">{item.title}</span>
                    </Link>
                    {/* Right side line for submenu */}
                    {hoveredItem === item.title && item.submenu && (
                      <div className="absolute left-full top-0 ml-4 h-auto">
                        <div className="border-l-4 border-white pl-4">
                          {item.submenu.map((subItem) => (
                            <p key={subItem.title} className="mb-2">
                              <Link href={subItem.link}>{subItem.title}</Link>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information Section */}
            <div className="w-1/4 flex flex-col justify-end pb-16 pr-16 space-y-4">
              <div className="text-lg">
                <p>010 230 6824</p>
                <p>info@gardenluxveranda.nl</p>
              </div>
              <div className="text-sm">
                <p>Showroom: Edisonstraat 5C</p>
                <p>2652 XS Berkel en Rodenrijs</p>
                <p>Fabriek: Mercuriusstraat 43</p>
                <p>3133 EN Vlaardingen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Menu items array
const menuItems = [
  { title: 'Home', link: '/' },
  {
    title: 'Veranda’s',
    link: '/verandas',
    submenu: [
      { title: 'Basic Veranda', link: '/verandas/basic' },
      { title: 'Geïsoleerde Veranda', link: '/verandas/geisoleerde' },
      { title: 'Pro Veranda', link: '/verandas/pro' },
      { title: 'Cube Veranda', link: '/verandas/cube' },
      { title: 'Pergola Veranda', link: '/verandas/pergola' },
      { title: 'Cabrio Veranda', link: '/verandas/cabrio' },
      { title: 'Lamellendak Veranda', link: '/verandas/lamellendak' },
      { title: 'Veranda bouwpakket', link: '/verandas/bouwpakket' },
    ],
  },
  { title: 'Producten', link: '/producten' },
  { title: 'Overig', link: '/overig' },
  { title: 'Veranda Soorten', link: '/veranda-soorten' },
  { title: 'Actie', link: '/actie' },
  { title: 'Contact', link: '/contact' },
];

export default Header;
