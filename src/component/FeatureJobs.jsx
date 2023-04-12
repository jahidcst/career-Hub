import React from 'react';

const FeatureJobs = ({ job }) => {
    const { company, logo, id, location, salary, worktime, position, work_type } = job
    return (
        <div className='border p-5 space-y-2 relative rounded-md'>
            <div className="w-20 h-20 flex items-center justify-center">
                <img
                    src={logo}
                />
            </div>
            <div>
            <h1 className="text-xl font-semibold">{position}</h1>
            <p className="text-base text-gray-700 ">{company}</p>
            </div>
            <div>
            <span className="btn-outline">{work_type}</span>
            <span className="btn-outline">{worktime}</span>
            </div>
            <div className='flex gap-3'>
            <p className='flex text-start'><span><img src='https://i.ibb.co/Jj22w1Y/Location-Icon.png' alt="" /></span> {location}</p>
            <p>Salary: {salary}</p>
            </div>
            <br />
            <button  className=" bottom-2 bg-gradient-to-t  from-indigo-400 to-indigo-500 roun
          ded-md text-gray-50 rounded-md px-3 transition-all hover:bg-indigo-600 py-1 font-semibold">
          View Details</button>
            {/* <Link to={`/details/${id}`}>
        <button
          onClick={() => navigate(id)}
          className=" bottom-2 bg-gradient-to-t  from-indigo-400 to-indigo-500 roun
          ded-md text-gray-50 rounded-md px-3 transition-all hover:bg-indigo-600 py-1 font-semibold">
          View Details
        </button>
      </Link> */}
        </div>
    );
};

export default FeatureJobs;