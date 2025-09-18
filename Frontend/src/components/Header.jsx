import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold">MyWebsite</h1>

        
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          <a href="#faq" className="hover:text-blue-400">FAQ</a>
        </nav>

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#services" className="block hover:text-blue-400">Services</a>
          <a href="#features" className="block hover:text-blue-400">Features</a>
          <a href="#pricing" className="block hover:text-blue-400">Pricing</a>
          <a href="#faq" className="block hover:text-blue-400">FAQ</a>
        </div>
      )}
    </header>
  );
};

export default Header;
