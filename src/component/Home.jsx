import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import FeatureJobs from './FeatureJobs';

const Home = () => {

    const {jobs} = useLoaderData()

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(categoriesData => setCategories(categoriesData.categories))
    }, [])

    return (
        // Banner Section--------//
        <section>
        <div className='pt-32 flex justify-evenly gap-24 bg-gray-100'>
            <div>
                <h1 className='text-4xl font-bold mb-3'>find Jobs <br /> Here  To  Build <br /> <span className='text-purple-600'>Your Career</span></h1>
                <p className='text-xs mb-4 text-gray-600'>Explore thousands of job opportunities with  all the <br /> information you need. Its your future. Come find it.Manage all <br /> your job application from start to finish.</p>
                <button className='rounded p-2 hover:bg-purple-500 bg-sky-500 text-white'>Get Started</button>
            </div>
            <div>
                <img  className='h-96 -mt-16' src="https://i.ibb.co/3vmyDPc/hardy.png" alt="" />
            </div>
        </div>

        {/* Category section---------- */}
        <section className='my-24  container mx-auto text-center'>
            <h1 className='text-4xl font-semibold '>Job Category List</h1>
            <p className='text-sm text-slate-500 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-center items-center gap-10 mt-7'>
                {
                    categories.map(category => <Category
                         key={categories.id} category={category}
                         ></Category>)
                }
            </div>
        </section>

        <section className='my-24  container mx-auto '>
            <div className='text-center pb-7'>
            <h1 className='text-4xl font-semibold  '>Featured Jobs</h1>
            <p className='text-sm text-slate-500 mt-3 '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 px-20 gap-3'>
                {
                    jobs?.slice(0, 4).map(job => <FeatureJobs job={job} key={job.id}></FeatureJobs>)
                }
            </div>
            <button>See All Jobs</button>
        </section>
    </section>

    
    );
};

export default Home;