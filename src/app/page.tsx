import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>Todo app</h3>
      <Link href={"/signup"}>
        <button className="bg-blue-200 mr-2">Signup</button>
      </Link>
      <Link href={"/login"}>
        <button className="bg-red-200">Login</button>
      </Link>
    </div>
  );
}
