import React from 'react';





const TeacherListPage = () => {
    // Sample data for the table (replace with your actual data)
    const teachers = [
        { id: 1, name: "John Doe", subject: "Math", email: "john@example.com" },
        { id: 2, name: "Jane Smith", subject: "Science", email: "jane@example.com" },
        { id: 3, name: "Emily Johnson", subject: "English", email: "emily@example.com" },
    ];


    return (
        <div className="w-full h-full flex flex-col">
            {/* Small Header */}
            <div className="bg-white p-3 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-700">Teachers</h2>
            </div>

            {/* Table Section */}
            <div className="flex-1 p-4 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 text-left text-sm font-semibold text-gray-600">ID</th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-600">Name</th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-600">Subject</th>
                            <th className="p-3 text-left text-sm font-semibold text-gray-600">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="p-3 text-sm text-gray-700">{teacher.id}</td>
                                <td className="p-3 text-sm text-gray-700">{teacher.name}</td>
                                <td className="p-3 text-sm text-gray-700">{teacher.subject}</td>
                                <td className="p-3 text-sm text-gray-700">{teacher.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TeacherListPage;