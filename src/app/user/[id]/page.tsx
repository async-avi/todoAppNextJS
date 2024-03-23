"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Todo {
  id: string;
  title: string;
  description: string;
}

function Page() {
  const param = useParams();

  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async function getTodos() {
      const response = await axios.get("/api/todos/get");
      console.log(response.data);
      setTodos(response.data.allTodos);
    }
    getTodos();
  }, []);

  return (
    <div>
      <h3>Your todos</h3>
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <div key={todo.id}>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
              </div>
            );
          })
        : null}
      <div className="bg-green-400">
        <Link href={`/user/${param.id}/new`}>New</Link>
      </div>
    </div>
  );
}

export default Page;
