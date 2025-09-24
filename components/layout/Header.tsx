import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">My Project</h1>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <Link href="/home" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
