"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(user);
    if (user.email && user.username && user.password) {
      const response = await axios.post("api/users/signup", user);
      const data = response.data;
      router.push(`user/${data.id}`);
    } else {
      alert("Invalid inputs");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className="text-black"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="username"
          className="text-black"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="password"
          className="text-black"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Page;
