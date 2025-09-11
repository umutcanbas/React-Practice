import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* max-w-7xl: Max tablet boyutunda(1280px) olsun */}
      {/* mx-auto: x ekseninde ortalar */}
      {/* 
        px-4    : Telefonlar için 
        sm:px-6 : Küçük tabletler için
        lg:px-8 : Desktoplar için
      */}
      {/* Max width ve diğer ilgili padding ayarları */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 max-lg::px-8 ">
        <div className="flex justify-between items-center py-4">
          {/* Icon and Text */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-orange-500 rounded-full p-3">
              <Heart color="white" />
            </div>
            <span className="text-xl">Vet</span>
          </a>
          {/* Desktop Nav */}
          {/* 
            hidden  : Telefon ve iPad Mini gibi küçük ekranlarda gizler
            md:flex : Büyük tabletler ve diğer büyük cihazlarda gözükmesini sağlar
          */}
          <nav className="space-x-8 hidden md:flex">
            {navigation.map((item) => (
              <a
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50 "
                key={item.href}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* 

            md:hidden : Büyük tabletler ve diğer büyük cihazlarda gizlenmesini sağlar
          */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {/* Göster - Gizle */}
        {isOpen && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-300">
              {navigation.map((item) => (
                <a
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50 "
                  key={item.href}
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
