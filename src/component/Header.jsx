import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-evenly justify-center items-center mt-5'> 
            <h2 className='font-semibold text-xl'>Career<span className='text-2xl text-fuchsia-600'>Bazaar</span></h2>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Statistics</li>
                <li>Applied Jobs</li>
                <li>Blog</li>
            </ul>
            <div>
            <button className='bg-sky-400 text-white  rounded p-2 hover:bg-sky-700'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;