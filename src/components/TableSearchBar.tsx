"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';


const TableSearchBar = () => {
    const router = useRouter()
     
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const value = (e.currentTarget[0] as HTMLInputElement).value;
     
        const params = new URLSearchParams(window.location.search)//THis create an object of search params 
        params.set('q' , value);
        router.push(`${window.location.pathname}?${params}`)
     }


    return <div>
       <form onSubmit={handleSubmit}  className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
       >
        <Search width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2  outline-none bg-transparent"
      />
       </form>
    </div>;
}


export default TableSearchBar;