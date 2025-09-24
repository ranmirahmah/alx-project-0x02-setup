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

// interfaces/index.ts

// PostProps interface
export interface PostProps {
  id: number;       // unique identifier for the post
  title: string;    // title of the post
  content: string;  // content/body of the post
}

// interfaces/index.ts

export interface UserProps {
  id: number;        // unique identifier for the user
  name: string;      // full name
  username: string;  // username/handle
  email: string;     // email address
}

// interfaces/index.ts

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress; // nested address object
}
