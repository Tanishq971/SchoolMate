"use client";
import { useForm } from "react-hook-form";
import { studentSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudent, getAllGrades, getAllClasses } from "@/actions/student"; // Add getAllClasses
import { useState, useEffect } from "react";

const mockParents = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Bob Johnson" },
  { id: "4", name: "Alice Brown" },
  { id: "5", name: "Mike Wilson" },
  { id: "6", name: "Sarah Davis" },
];

const AddStudentForm = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      image: "",
      phone: "",
    },
  });

  const [grades, setGrades] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [parentSearch, setParentSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");



  const [selectedParent, setSelectedParent] = useState<{ id: string; name: string } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(parentSearch);
    }, 500);
    return () => clearTimeout(timer);
  }, [parentSearch]);




  useEffect(() => {
    const fetchData = async () => {
      const allGrades = await getAllGrades();
      const allClasses = await getAllClasses();
      setGrades(allGrades);
      setClasses(allClasses);
    };
    fetchData();
  }, []);

  const filteredParents = mockParents
    .filter((parent) => parent.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
    .slice(0, 5);



  const handleParentSelect = (parent: { id: string; name: string }) => {
    setSelectedParent(parent);
    setValue("parentId", parent.id, { shouldValidate: true });
    setIsDropdownOpen(false);
    setParentSearch("");
  };

  const onSubmit = async (data: any) => {
    console.log("Student Data Submitted:", data);
    const newStudent = await createStudent(data);
    setIsOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl px-20 bg-white rounded-lg shadow-sm"
    >
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Add New Student</h1>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Basic Information</h2>
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
              placeholder="Age"
              type="number"
              {...register("age", { valueAsNumber: true })}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && <p className="text-sm text-red-600">{errors.age.message}</p>}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-700 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              placeholder="Phone Number (optional)"
              type="tel"
              {...register("phone")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Blood Type"
              type="text"
              {...register("bloodType")}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.bloodType && <p className="text-sm text-red-600">{errors.bloodType.message}</p>}
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

          <div className="flex flex-col gap-1 relative">
            <input
              placeholder="Search Parents"
              type="text"
              value={parentSearch}
              onChange={(e) => setParentSearch(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {selectedParent && (
              <div className="mt-1 text-sm text-gray-600">
                Selected: {selectedParent.name}
              </div>
            )}
            {isDropdownOpen && debouncedSearch && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {filteredParents.length > 0 ? (
                  filteredParents.map((parent) => (
                    <div
                      key={parent.id}
                      onClick={() => handleParentSelect(parent)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {parent.name}
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-gray-500">No parents found</div>
                )}
              </div>
            )}
            <input type="hidden" {...register("parentId")} />
            {errors.parentId && <p className="text-sm text-red-600">{errors.parentId.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <select
              {...register("classId", { valueAsNumber: true })}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
            {errors.classId && <p className="text-sm text-red-600">{errors.classId.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <select
              {...register("gradeId", { valueAsNumber: true })}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade.id} value={grade.id}>
                  {grade.name}
                </option>
              ))}
            </select>
            {errors.gradeId && <p className="text-sm text-red-600">{errors.gradeId.message}</p>}
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Create Student
      </button>
    </form>
  );
};

export default AddStudentForm;