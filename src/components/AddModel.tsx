"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import AddTeacherForm from "./forms/TeacherForm";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(1, "Age must be a positive number"),
});

type FormValues = z.infer<typeof schema>;

const AddStudentModal = ({ type }: { type: "teacher" | "student" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
      >
        Add {type}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-50 flex items-center justify-center z-50">
          {/* <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  {...register("age", { valueAsNumber: true })}
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                 <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                 </button>
                 <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div> */}
          <div className="bg-white p-6 rounded-lg px-10">
            <AddTeacherForm setIsOpen={setIsOpen}></AddTeacherForm>
          </div>


        </div>
      )}
    </>
  );
};

export default AddStudentModal;
