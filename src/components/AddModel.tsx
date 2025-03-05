"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import AddTeacherForm from "./forms/TeacherForm";
import AddStudentForm from "./forms/StudentForm";
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
          <div className="bg-white p-6 rounded-lg px-10">
            { type === "teacher" && <AddTeacherForm setIsOpen={setIsOpen}></AddTeacherForm>}
            { type === "student" && <AddStudentForm setIsOpen={setIsOpen}></AddStudentForm>}

          </div>


        </div>
      )}
    </>
  );
};

export default AddStudentModal;
