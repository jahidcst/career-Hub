import React from 'react';

const Home = () => {
    return (
        <section>
        <div className='pt-32 flex justify-evenly bg-gray-100'>
            <div>
                <h1 className='text-4xl font-bold mb-3'>find There <br /> Your Dream Job  To  Build <br /> <span className='text-purple-600'>Your Career</span></h1>
                <p className='text-xs mb-4 text-gray-600'>Explore thousands of job opportunities with  all the <br /> information you need. Its your future. Come find it.Manage all <br /> your job application from start to finish.</p>
                <button className='rounded p-2 hover:bg-purple-500 bg-sky-500 text-white'>Get Started</button>
            </div>
            <div>
                <img  className='h-96 -mt-16' src="/public/hardy.png" alt="" />
            </div>
        </div>
    </section>
    );
};

export default Home;