"use server"
import prisma from "@/lib/prisma";
import { handleError } from "../../utils";


export const createStudent = async (data:any) =>{
   try{
    const newStudent  = await prisma.student.create({data});
    return JSON.parse(JSON.stringify(newStudent));
   }catch(err){
        handleError(err);
   }
}

export const getAllGrades = async ()=>{
    try{
        const allGrades = await prisma.grade.findMany();
        if(allGrades){
            return JSON.parse(JSON.stringify(allGrades));
        }else{
            return [];
        }
    }catch(err){
        handleError(err)
    }
}


export const getAllClasses = async ()=>{
    try{
        const allClasses = await prisma.class.findMany();
        if(allClasses){
            return JSON.parse(JSON.stringify(allClasses));
        }else{
            return [];
        }
    }catch(err){
        handleError(err)
    }
}
