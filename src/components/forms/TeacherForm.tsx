"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTeacher } from "@/actions/teacher";
const teacherSchema = z.object({
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
      message: "Username must contain at least one letter and one number",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
      message: "Password must contain a letter, number, and special character",
    }),
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }).optional().or(z.literal("")),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  image: z.string().url({ message: "Invalid image URL" }).optional().or(z.literal("")),
  sex: z.enum(["MALE", "FEMALE"], { message: "Please select a valid gender" }),
});

const AddTeacherForm = ({setIsOpen} :{setIsOpen:(value:boolean)=>void}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(teacherSchema),
    defaultValues: {
      email: "",
      image: "",
    },
  });

  const onSubmit = async(data :any) => {
     console.log("Teacher Data Submitted:", data);
     const newTeacher = createTeacher(data)
    setIsOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl px-20 bg-white rounded-lg shadow-sm"
    >
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Add New Teacher</h1>

      {/* Credentials Section */}
      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section>
        <h2 className="text-lg font-medium text-gray-700 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <input
              placeholder="First Name"
              type="text"
              {...register("firstname")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstname && <p className="text-sm text-red-600">{errors.firstname.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Last Name"
              type="text"
              {...register("lastname")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastname && <p className="text-sm text-red-600">{errors.lastname.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Email (optional)"
              type="email"
              {...register("email")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Phone Number"
              type="tel"
              {...register("phone")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <input
              placeholder="Address"
              type="text"
              {...register("address")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Image URL (optional)"
              type="url"
              {...register("image")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && <p className="text-sm text-red-600">{errors.image.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <select
              {...register("sex")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {errors.sex && <p className="text-sm text-red-600">{errors.sex.message}</p>}
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Create Teacher
      </button>
    </form>
  );
};

export default AddTeacherForm;