import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-100 '>
            {/* Navbar ---- */}

            <div className='flex justify-evenly justify-center items-center pt-5 pb-5'>
               <Link to='/'> <h2  className='font-bold text-2xl'>Career<span className='text-3xl text-fuchsia-600'>Bazaar</span></h2></Link>
                <ul className='flex gap-10'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Home 
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/statistics'
                            aria-label='statistics'
                            title='statistics'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Statistics
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/applied Jobs'
                            aria-label='applied Jobs'
                            title='applied Jobs'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Applied Jobs
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                            to='/blogs'
                            aria-label='blogs'
                            title='blogs'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')} > Blogs
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <button className='bg-sky-400 text-white  rounded p-2 hover:bg-purple-600'>Start Applying</button>
                </div>
            </div>
        </nav>

    );
};

export default Header;