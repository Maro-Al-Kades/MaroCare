"use server";

import { connectToDatabase } from "@/database/mongodb";
import User from "@/models/user.schema";
import { userSchema } from "@/validations/user.validations";
import { ZodError } from "zod";

export async function GET(request: Request) {
  await connectToDatabase();

  const users = await User.find({});

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const data = await request.json();
    const user = await User.findOne({ email: data.email });
    if (user) {
      return new Response(
        JSON.stringify({ error: "البريد الالكتروني موجود مسبقا" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!data.email || typeof data.email !== "string") {
      return new Response(
        JSON.stringify({ error: "يجب إدخال بريد إلكتروني صحيح" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const validatedData = userSchema.parse(data);

    const newUser = new User(validatedData);

    await newUser.save();

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(JSON.stringify({ errors: error.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "خطأ في الخادم الداخلي" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
