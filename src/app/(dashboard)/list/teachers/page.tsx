import React from 'react';
import prisma from '@/lib/prisma';
import Table from '@/components/Table';

const TeacherListPage = async () => {
  // Fetch teachers from Prisma (remove static data in production)
  const teacher = await prisma.teacher.findMany({
    include: {
      classes: true,
      subjects: true,
    },
  });

  console.log(teacher);

  const role = "admin"; // Example role, replace with dynamic logic if needed
  const columns = [
    { header: "Name" },
    { header: "Username" },
    { header: "Classes" },
    { header: "Subjects" },
    { header: "Phone" },
    { header: "Address" },
    ...(role === "admin"
      ? [{ header: "Actions", accessor: "action" }]
      : []),
  ];

  const getRows = (item: any) => (
    <tr className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-3 text-sm text-gray-700">
        {item.firstname} {item.lastname}
      </td>
      <td className="p-3 text-sm text-gray-700">{item.username}</td>
      <td className="p-3 text-sm text-gray-700">
        {item.classes.map((cls: any) => (
          <p key={cls.id} className="mb-1">{cls.name}</p>
        ))}
      </td>
      <td className="p-3 text-sm text-gray-700">
        {item.subjects.map((sub: any) => (
          <p key={sub.id} className="mb-1">{sub.name}</p>
        ))}
      </td>
      <td className="p-3 text-sm text-gray-700">{item.phone}</td>
      <td className="p-3 text-sm text-gray-700">{item.address}</td>
      {role === "admin" && (
        <td className="p-3 text-sm">
          <button className="text-blue-600 hover:text-blue-800">Edit</button>
          <button className="ml-2 text-red-600 hover:text-red-800">Delete</button>
        </td>
      )}
    </tr>
  );

  return (
    <div className="w-full h-full flex flex-col">

      <div className="bg-white p-3 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700">Teachers</h2>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
          Add Teacher
        </button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <Table columns={columns} data={teacher} getRows={getRows} />
      </div>
    </div>
  );
};

export default TeacherListPage;