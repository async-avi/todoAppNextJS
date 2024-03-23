"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface newTodo {
  title: string;
  description: string;
}

function Page() {
  const router = useRouter();
  const [todo, setTodo] = useState<newTodo>({
    title: "",
    description: "",
  });
  async function postNewTodo() {
    const resp = await axios.post("/api/todos/new", todo);
    router.push(`/user/${resp.data.id}`);
  }
  return (
    <div>
      <h3>New Todo</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewTodo();
        }}
        className="flex flex-col"
      >
        <input
          type="text"
          placeholder="title"
          className="text-black"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          className="text-black"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <button type="submit" className="bg-blue-200 w-28">
          Create new
        </button>
      </form>
    </div>
  );
}

export default Page;
