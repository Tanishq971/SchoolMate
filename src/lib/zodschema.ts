import { z } from "zod";




export const studentSchema = z.object({
    username: z
      .string()
      .min(6, { message: "Username must be at least 6 characters" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
        message: "Username must contain at least one letter and one number",
      }),
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    age: z.number().min(1, { message: "Age must be a positive number" }),
    address: z.string().min(1, { message: "Address is required" }),
    image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal("")),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).optional().or(z.literal("")),
    bloodType: z.string().min(1, { message: "Blood type is required" }),
    sex: z.enum(["MALE", "FEMALE"], { message: "Please select a valid gender" }),
    parentId: z.string().min(1, { message: "Please select a parent" }),
    classId: z.number().min(1, { message: "Please select a class" }),
    gradeId: z.number().min(1, { message: "Please select a grade" }),
  });