import React from 'react';
import ClassButton from '@/components/Buttons/ClassButton';
const classListPage = () => {
    return <div className='w-full h-full '>
       <section className='w-full h-14 bg-slate-50 flex gap-3'>
        <ClassButton type = {"class"}></ClassButton>
        <ClassButton type = {"grade"}></ClassButton>
       </section>
       <section className='w-full h-full bg-slate-100'>
        
       </section>
    </div>;
}


export default classListPage;