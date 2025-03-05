import React from 'react';
import { Plus } from "lucide-react"

const ClassButton = ({type}:{type:"class" | "grade"}) => {
    return <div className='h-10 w-20 flex items-center justify-center bg-amber-100 border border-black rounded-md'>
           <Plus  /> {type}
    </div>;
}


export default ClassButton;