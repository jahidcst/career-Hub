import React from 'react';

const Blogs = () => {
    return (
        <div >
            <h1 className='text-3xl text-center pt-5 font-bold text-violet-700'>Important Questions</h1>
            <div className='p-12 space-y-2'>
                <h2 className='text-xl font-semibold'><span className='text-indigo-400'>Question-1:</span> When should we use Context API ?</h2>
                <p className='pl-6'><span className='font-semibold text-rose-700'>
                    Answer: </span> We should use Contex API  when some data needs to be accessible by many components at different nesting levels.
                </p>

                <h2 className='text-xl font-semibold'><span className='text-indigo-400'>Question-2:</span> What is Custom Hook in React ?</h2>
                <p className='pl-6'><span className='font-semibold text-rose-700'>
                    Answer: </span> Custom JavaScript hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.
                </p>

                <h2 className='text-xl font-semibold'><span className='text-indigo-400'>Question-3:</span> What is useRef in  React ?</h2>
                <p className='pl-6'><span className='font-semibold text-rose-700'>
                    Answer: </span> useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current.
                </p>

                <h2 className='text-xl font-semibold'><span className='text-indigo-400'>Question-4:</span>  What is useMemo in React ?</h2>
                <p className='pl-6'><span className='font-semibold text-rose-700'>
                    Answer: </span> useMemo() is a function that returns a memoized value of a passed in resource-intensive function.
                    </p>
            </div>
        </div>
    );
};

export default Blogs;