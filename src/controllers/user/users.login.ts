import prisma from "@/db/db";

export default async function loginUser(param: string, password: string) {
  try {
    const concernedUserByEmail = await prisma.user.findFirst({
      where: {
        email: param,
      },
    });
    const concernedUserByUsername = await prisma.user.findFirst({
      where: {
        username: param,
      },
    });

    if (concernedUserByEmail) {
      return {
        status: 200,
        id: concernedUserByEmail.id,
      };
    } else if (concernedUserByUsername) {
      return {
        status: 200,
        id: concernedUserByUsername.id,
      };
    }
    return {
      status: 403,
      msg: "User does not exist",
    };
  } catch (error: any) {
    return {
      msg: error.message,
    };
  }
}
