"use client";

import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  return <div>page {params.id}</div>;
}

export default Page;
