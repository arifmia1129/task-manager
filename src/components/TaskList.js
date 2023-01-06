import React from 'react';

const TaskList = ({ todo, progress, complete }) => {
    return (
        <div className='grid grid-cols-3 gap-10 my-10'>
            <div className='border rounded-lg w-[20vw]'>
                <h6 className='text-center text-xl font-bold bg-[#FF6347] text-white'>To Do</h6>
                <div className='p-5'>
                    <ul>
                        {todo.map((data, index) => (
                            <li className='border p-2 m-2 rounded-lg text-center' key={index}>
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='border rounded-lg w-[20vw]'>
                <h6 className='text-center text-xl font-bold bg-[#FF6347] text-white'>In Progress</h6>
                <div className='p-5'>
                    <ul>
                        {progress.map((data, index) => (
                            <li className='border p-2 m-2 rounded-lg text-center' key={index}>
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='border rounded-lg w-[20vw]'>
                <h6 className='text-center text-xl font-bold bg-[#FF6347] text-white'>Complete</h6>
                <div className='p-5'>
                    <ul>
                        {complete.map((data, index) => (
                            <li className='border p-2 m-2 rounded-lg text-center' key={index}>
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskList;