'use client';
import { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5'; // Hamburger Icon
import { FaTimes, FaHome, FaMapMarkerAlt, FaClipboardList, FaChevronDown, FaEnvelope, FaPhoneAlt, FaPercentage } from 'react-icons/fa'; // Icons for Menu Items
import { FaShop } from 'react-icons/fa6'; // New Fa6 icon import
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when the menu is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the menu is closed
    }
  }, [isMenuOpen]);

  // Handle clicking outside the menu to close it
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg shadow-md">
        <div
          className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
          style={{
            backgroundColor: 'rgba(var(--bs-emphasis-color-rgb), 0.65)',
          }}
        >
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <Link href="/">
              <img
                src="/logo/logo.png" // Same logo path for both desktop and mobile
                alt="Logo"
                className="h-16 w-auto lg:h-10" // Increase the size of the logo on mobile
              />
            </Link>
          </div>

          {/* Normal Menu Items for Desktop */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.link}
                  className="text-white font-bold text-lg"
                >
                  {item.title}
                </Link>

                {/* Simple Submenu for Desktop (Vertically Stacked) */}
                {item.submenu && (
                  <div className="hidden group-hover:block absolute left-0 mt-2 bg-primary text-white shadow-lg rounded-lg p-2 z-50">
                    <ul className="flex flex-col space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-primary-dark"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Details */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaPhoneAlt style={{ color: 'rgba(var(--bs-emphasis-color-rgb), 1)' }} />
            <span className="font-bold text-white">
              Call Us Any Time
            </span>
            <span className="text-white">
              (+01) 789 987 645
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <IoMenuOutline className="text-4xl text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu with Curtain Animation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30" onClick={closeMenu}>
          <div
            className={`relative bg-white text-black h-full w-full transition-all duration-700 ease-in-out transform origin-top overflow-y-auto ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              transformOrigin: 'top', // Set the curtain-like animation starting from the top
            }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <FaTimes className="text-3xl text-black" />
              </button>
            </div>

            {/* Logo at the top */}
            <div className="flex justify-center pt-6">
              <img src="/logo/logo.png" alt="Logo" className="h-24 w-auto" /> {/* Bigger logo on mobile */}
            </div>

            {/* Menu Items */}
            <div className="flex flex-col justify-start space-y-6 pl-8 pt-12">
              {menuItems.map((item) => (
                <div key={item.title} className="w-full pr-8">
                  <div className="flex items-center justify-between">
                    <h5 className="flex items-center space-x-4 text-black text-lg">
                      {item.icon}
                      <span className="font-bold">{item.title}</span>
                    </h5>

                    {/* Arrow Button for Submenu */}
                    {item.submenu && (
                      <button
                        onClick={() => setActiveSubMenu(activeSubMenu === item.title ? null : item.title)}
                        className="text-lg text-gray-700"
                      >
                        <FaChevronDown className={`transition-transform duration-300 ${activeSubMenu === item.title ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Submenu for Mobile */}
                  {activeSubMenu === item.title && item.submenu && (
                    <ul className="pl-8 pt-2 space-y-2 w-full">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link href={subItem.link} className="text-sm block">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Phone Number and Email */}
              <div className="flex flex-col space-y-2 mt-auto mb-8">
                <p className="text-black text-lg font-bold">010 230 6824</p>
                <p className="text-black text-lg">info@gardenluxveranda.nl</p>
              </div>

              {/* Full-width Button */}
              <Link href="/contact">
                <button className="w-3/4 mx-auto bg-green-500 text-white py-3 rounded-md font-bold text-lg">
                  Offerte aanvragen
                </button>
              </Link>
            </div>

            {/* Fade out effect at the bottom */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-300 to-transparent"></div>
          </div>
        </div>
      )}
    </>
  );
};

// Menu items array with icons and restored submenus
const menuItems = [
  {
    title: 'Veranda’s',
    link: '/verandas',
    icon: <FaHome className="text-l" />,
    submenu: [
      { title: 'Basic Veranda', link: '/verandas/basic' },
      { title: 'Geïsoleerde Veranda', link: '/verandas/geisoleerde' },
      { title: 'Pro Veranda', link: '/verandas/pro' },
      { title: 'Cube Veranda', link: '/verandas/cube' },
      { title: 'Pergola Veranda', link: '/verandas/pergola' },
      { title: 'Cabrio Veranda', link: '/verandas/cabrio' },
      { title: 'Lamellendak Veranda', link: '/verandas/lamellendak' },
      { title: 'Veranda Bouwpakket', link: '/verandas/bouwpakket' },
    ],
  },
  {
    title: 'Producten',
    link: '/producten',
    icon: <FaShop className="text-l" />,
    submenu: [
      { title: 'Glazen Schuifwanden', link: '/producten/glazen-schuifwanden' },
      { title: 'Schuifpui', link: '/producten/schuifpui' },
      { title: 'Led Verlichting', link: '/producten/led-verlichting' },
      { title: 'Fundering', link: '/producten/fundering' },
      { title: 'Horren', link: '/producten/horren' },
      { title: 'Zonwering', link: '/producten/zonwering' },
      { title: 'Rolluiken', link: '/producten/rolluiken' },
      { title: 'Screens', link: '/producten/screens' },
    ],
  },
  {
    title: 'Overig',
    link: '/overig',
    icon: <FaClipboardList className="text-l" />,
    submenu: [
      { title: 'Carport', link: '/overig/carport' },
      { title: 'Zwermbad Overkapping', link: '/overig/zwermbad-overkapping' },
      { title: 'Schuttingen', link: '/overig/schuttingen' },
    ],
  },
  {
    title: 'Veranda Soorten',
    link: '/veranda-soorten',
    icon: <FaMapMarkerAlt className="text-l" />,
    submenu: null,
  },
  {
    title: 'Actie',
    link: '/actie',
    icon: <FaPercentage className="text-l" />,
    submenu: null,
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: <FaEnvelope className="text-l" />,
    submenu: [
      { title: 'Showroom Afspraak', link: '/contact/showroom' },
      { title: 'Reparatieverzoek', link: '/contact/reparatieverzoek' },
      { title: 'Projecten', link: '/contact/projecten' },
    ],
  },
];

export default Header;
