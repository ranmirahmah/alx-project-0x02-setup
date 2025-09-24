import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <h1 className="text-lg font-bold">
          <Link href="/">MyApp</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-300">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
