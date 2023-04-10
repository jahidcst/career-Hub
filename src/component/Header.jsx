import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-100 '>
            {/* Navbar ---- */}

            <div className='flex justify-evenly justify-center items-center pt-5'>
                <h2 className='font-semibold text-xl'>Career<span className='text-2xl text-fuchsia-600'>Bazaar</span></h2>
                <ul className='flex gap-10'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Home 
                        </NavLink>
                    </li>
                    <li>Statistics</li>
                    <li>Applied Jobs</li>
                    <li>Blog</li>
                </ul>
                <div>
                    <button className='bg-sky-400 text-white  rounded p-2 hover:bg-sky-700'>Start Applying</button>
                </div>
            </div>
        </nav>

    );
};

export default Header;