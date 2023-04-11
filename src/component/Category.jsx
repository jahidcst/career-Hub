import React from 'react';

const Category = ({category}) => {
    const {logo, name, available} = category
    return (
        <div className='space-y-1 bg-slate-200 p-4 w-[220px] rounded-md'>
            <img className='pb-2' src={logo}alt="" />
            <h2 className='text-start  font-bold'>{name}</h2>
            <p className='text-start text-gray-500 font-semibold' >{available}</p>
        </div>
    );
};

export default Category;