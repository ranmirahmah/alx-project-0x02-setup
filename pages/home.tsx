import React from "react";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
};

export default HomePage;
