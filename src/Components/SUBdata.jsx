import React from 'react';

const SUBdata = ({main}) => {
    return (
        <div className='text-center rounded-xl bg-slate-200 m-3 hover:bg-red-200'>
           <h1 className='text-xl'>{main.id}</h1>
           <h3 className='text-2xl font-semibold'>Skill in : {main.name}</h3>
           <img className='w-[60%] rounded-xl mx-auto' src={main.img} alt="" />
           <h3 className='text-xl font-bold mb-3'>Skill Level : {main.level}</h3>
        </div>
    );
};

export default SUBdata;