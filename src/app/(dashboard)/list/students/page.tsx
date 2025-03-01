import Table from "@/components/Table";
import prisma from "@/lib/prisma";
import AddStudentModal from "@/components/AddModel";





const StudentListPage = async () => {
  // Table columns definition
  const columns = [
    { header: "Name" },
    { header: "Student Id" },
    { header: "age" },
    { header: "class" },
    { header: "mentor" },
    { header: "parent" },
    { header: "Contact number" },
  ];

  const student = await prisma.student.findMany({
    include: {
      class: true,
      parent: true,
    },
  });

  const getRows = (item: any) => (
    <tr className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-3 text-sm text-gray-700">
        {item.firstname} {item.lastname}
      </td>
      <td className="p-3 text-sm text-gray-700">{item.username}</td>
      <td className="p-3 text-sm text-gray-700">{item.age}</td>
      <td className="p-3 text-sm text-gray-700">{item.class?.name}</td>
      <td className="p-3 text-sm text-gray-700">{item.class?.classteacher}</td>
      <td className="p-3 text-sm text-gray-700">{item.parent?.name}</td>
      <td className="p-3 text-sm text-gray-700">{item.parent?.phone}</td>
    </tr>
  );

  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-white p-3 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700">Student</h2>
        <AddStudentModal type="student" />
      </div>
      <div className="flex-1 overflow-x-auto">
        <Table columns={columns} data={student} getRows={getRows} />
      </div>
    </div>
  );
};

export default StudentListPage;