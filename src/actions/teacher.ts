"use server"
import prisma from "@/lib/prisma";
import { handleError } from "../../utils";


export const createTeacher = async (data:any) =>{
   try{
    const newTeacher  = await prisma.teacher.create({data});
    return JSON.parse(JSON.stringify(newTeacher));
   }catch(err){
        handleError(err);
   }
}