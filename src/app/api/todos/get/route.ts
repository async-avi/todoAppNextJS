import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/db/db";

export async function GET(req: NextRequest) {
  const authorId = cookies().get("id")?.value;
  const decoded = authorId ? jwt.decode(authorId) : "";

  const allTodos = await prisma.todo.findMany({
    where: {
      authorId: `${decoded}`,
    },
  });

  return NextResponse.json({
    status: 200,
    allTodos,
  });
}
