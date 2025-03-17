// "use server";

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import bcrypt from "bcryptjs";
// import { connectToDatabase } from "@/database/mongodb";
// import User from "@/models/user.schema";
// import { loginSchema, registerSchema } from "@/validations/user.validations";
// import { revalidatePath } from "next/cache";

// export async function register(formData: FormData) {
//   // 1. connect to database
//   await connectToDatabase();

//   // 2. parse Form Data
//   const parsedData = registerSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//     phone: formData.get("phone"),
//     photo: formData.get("photo") || "https://via.placeholder.com/150",
//     gender: formData.get("gender"),
//     role: "patient",
//     bloodType: formData.get("bloodType") || "unknown",
//   });

//   if (!parsedData.success) {
//     return { error: parsedData.error.errors.map((e) => e.message).join(", ") };
//   }

//   const { name, email, password, phone, photo, gender, role, bloodType } =
//     parsedData.data;

//   // 3.Hashing the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // 4. save user data to database
//   const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//     phone,
//     role,
//     photo,
//     gender,
//     bloodType,
//   });

//   // 5. handle sessions for users
//   const cookieStore = await cookies();
//   cookieStore.set("session", user._id.toString(), {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60 * 60 * 24 * 7,
//     path: "/",
//   });

//   revalidatePath("/");

//   return { success: true, message: "تم انشاء الحساب بنجاح..." };
// }

// export async function login(formData: { email: string; password: string }) {
//   await connectToDatabase();

//   const parsedData = loginSchema.safeParse(formData);

//   if (!parsedData.success) {
//     return { error: parsedData.error.errors.map((e) => e.message).join(", ") };
//   }

//   const { email, password } = parsedData.data;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return { error: "المستخدم غير موجود" };
//   }

//   const isMatch = await bcrypt.compare(password, user.password as string);
//   if (!isMatch) {
//     return { error: "كلمة المرور غير صحيحة" };
//   }

//   const cookieStore = await cookies();
//   cookieStore.set("session", user._id.toString(), {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60 * 60 * 24 * 7,
//     path: "/",
//   });

//   redirect("/");
// }

// export async function logout() {
//   const cookieStore = await cookies();
//   cookieStore.delete("session");

//   revalidatePath("/");
// }
