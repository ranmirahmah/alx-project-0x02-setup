// pages/users.tsx
import React from "react";
import { GetStaticProps, NextPage } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = {
  users: UserProps[];
};

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="grid gap-4">
        {users.length === 0 ? (
          <p className="text-gray-500">No users available.</p>
        ) : (
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Map external API shape to our UserProps type (ensure address shape)
    const users: UserProps[] = data.map((u: any) => ({
      id: u.id,
      name: u.name,
      username: u.username,
      email: u.email,
      address: {
        street: u.address?.street ?? "",
        suite: u.address?.suite ?? "",
        city: u.address?.city ?? "",
        zipcode: u.address?.zipcode ?? "",
      },
    }));

    return {
      props: { users },
      revalidate: 60, // optional: refresh at most once per minute
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: { users: [] },
      revalidate: 60,
    };
  }
};

export default UsersPage;
