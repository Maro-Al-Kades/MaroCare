import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون على الأقل 3 أحرف"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  role: z.enum(["patient", "admin", "doctor"]).optional(), // تحديد الأدوار المتاحة فقط
  photo: z.string().url("الصورة يجب أن تكون رابط صحيح").optional(),
  gender: z.enum(["male", "female"]),
  bloodType: z.string().optional(),
});
