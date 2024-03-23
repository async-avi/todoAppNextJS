"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();

  const [user, setUser] = useState({
    param: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(user);
    if (user.param && user.password) {
      const response = await axios.post("api/users/login", user);
      const data = response.data;
      console.log(data);
    } else {
      alert("Invalid inputs");
    }
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username/email"
          className="text-black"
          onChange={(e) => {
            setUser({ ...user, param: e.target.value });
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
