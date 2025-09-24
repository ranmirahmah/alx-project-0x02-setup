export interface CardProps {
  title: string;
  location: string;
  rating: number;
  price: number;
  imageUrl: string;
  tags?: string[]; // optional array for things like ["Top Villa", "Self CheckIn"]
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";         // New size prop
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // New shape prop
}
