import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface NavItemsRef {
  [key: string]: HTMLAnchorElement | null;
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});
  const navItemsRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const router = useRouter();
  const dynamicColors: Record<string, string> = {
    '/': 'text-[#b6f4ad]',
    '/about': 'text-[#1653dc]',
    '/projects': 'text-[#f2f5b3]',
    '/skills': 'text-[#ff8801d4]',
    '/contact': 'text-[#291f70]',
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setIsOpen(false); // Close the menu after selection
  };

  useEffect(() => {
    const updateUnderline = () => {
      const navItem = navItemsRef.current[activeSection];
      if (navItem) {
        setUnderlineStyle({
          width: `${navItem.offsetWidth}px`,
          left: `${navItem.offsetLeft}px`,
          backgroundColor: dynamicColors[activeSection],
        });
      }
    };
    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeSection]);

  return (
    <div>
      {/* Desktop Header */}
      <div className="hidden md:block fixed top-4 right-4 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg z-50">
        <nav className="nav-container">
          {Object.keys(dynamicColors).map((section) => (
            <a
              key={section}
              href={`${section}`}
              ref={(el:any) => (navItemsRef.current[section] = el)}
              className={`nav-item text-earth-secondary font-semibold cursor-pointer hover:font-bold ${router.pathname === section ? `${dynamicColors[section]} italic font-bold` : ''}`}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
              onClick={() => handleLinkClick(section)}
            >
              {section === '/' ? 'Home' : section.charAt(1).toUpperCase() + section.slice(2)}
            </a>
          ))}
          <div className="nav-underline" style={underlineStyle}></div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="bg-white bg-opacity-50 p-4 rounded-lg shadow-lg focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {isOpen && (
          <div className="fixed w-[80%] top-8 right-16 bg-white bg-opacity-90 p-4 rounded-2xl shadow-lg z-50">
            <nav className="flex flex-col justify-center items-center space-y-4">
              {Object.keys(dynamicColors).map((section) => (
                <a
                  key={section}
                  href={`${section}`}
                  ref={(el:any) => (navItemsRef.current[section] = el)}
                  className={`nav-item text-earth-secondary font-semibold cursor-pointer hover:font-bold ${router.pathname === section ? `${dynamicColors[section]} italic font-bold` : ''}`}
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  onClick={() => handleLinkClick(section)}
                >
                  {section === '/' ? 'Home' : section.charAt(1).toUpperCase() + section.slice(2)}
                </a>
              ))}
              <div className="nav-underline" style={underlineStyle}></div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
