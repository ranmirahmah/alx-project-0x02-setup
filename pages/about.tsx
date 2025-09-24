import React from "react";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      <p className="mb-6 text-gray-600">
        This page demonstrates using our reusable Button component with different sizes and shapes.
      </p>

      <div className="flex gap-4">
        {/* Small, rounded-sm */}
        <Button
          label="Small"
          onClick={() => alert("Small button clicked")}
          size="small"
          shape="rounded-sm"
        />

        {/* Medium, rounded-md */}
        <Button
          label="Medium"
          onClick={() => alert("Medium button clicked")}
          size="medium"
          shape="rounded-md"
        />

        {/* Large, rounded-full */}
        <Button
          label="Large"
          onClick={() => alert("Large button clicked")}
          size="large"
          shape="rounded-full"
        />
      </div>
    </div>
  );
};

export default AboutPage;

