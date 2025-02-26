import React from 'react';
import prisma from '@/lib/prisma';


const Card = ({type} : {type : "admin" | "teacher" | "student"  | "parent"}) => {
    const totalStudents = 42; // Replace with dynamic data if needed
    const adminRecord : Record<typeof type , any> = {
        admin: prisma.admin,
        teacher:prisma.teacher,
        student:prisma.student,
        parent:prisma.parent,
    }
   
    const count = adminRecord[type]?.count();

    return (
        <div className="border border-gray-300 rounded-lg p-4 w-52 text-center shadow-md">
            <h3 className="text-lg font-semibold">Total {type}s</h3>
            <p className="text-2xl font-bold">{count}</p>
        </div>
    );
};

export default Card;