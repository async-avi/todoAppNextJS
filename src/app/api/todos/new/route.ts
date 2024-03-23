import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/db/db";

export async function POST(req: NextRequest) {
  const authorId = cookies().get("id")?.value;
  const decoded = authorId ? jwt.decode(authorId) : "";
  const body = await req.json();
  const { title, description } = body;
  const newTodo = await prisma.todo.create({
    data: {
      title,
      description,
      author: {
        connect: {
          id: `${decoded}`,
        },
      },
    },
  });
  return NextResponse.json({
    status: 200,
    id: authorId,
  });
}
