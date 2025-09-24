// components/common/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-xl shadow-md border p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
