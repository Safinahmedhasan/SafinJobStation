import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container p-32 mx-auto mt-[-40px]'>
                <div>
                    <div className='bg-gradient-to-r from-indigo-600 to-blue-500 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>01</div>
                    <div className='border border-indigo-600 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-indigo-600 to-blue-500 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>When should use context api ?</h2>
                        <p className='text-indigo-600 px-5'>The Context API in React is used to pass data down the component tree without the need for intermediate components to pass the data. Context provides a way to share values like theme, locale, or any other data that needs to be consumed by many components at different levels in the component tree.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-indigo-600 to-blue-500 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>02</div>
                    <div className='border border-indigo-600 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-indigo-600 to-blue-500 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>What is custom hook ?</h2>
                        <p className='text-indigo-600 px-5'>A custom hook in React is a reusable function that contains some stateful logic and can be shared between multiple components in a React application. Custom hooks allow developers to encapsulate and share common stateful logic without having to repeat it across multiple components.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-indigo-600 to-blue-500 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>03</div>
                    <div className='border border-indigo-600 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-indigo-600 to-blue-500 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>What is use ref and how to use?</h2>
                        <p className='text-indigo-600 px-5'>useRef is a hook that allows you to create a mutable object that persists across re-renders of a component. useRef is useful for accessing DOM nodes, storing temporary data, or caching values that don't trigger a re-render when they change.</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='bg-gradient-to-r from-indigo-600 to-blue-500 w-10 text-center p-2 rounded-full absolute mt-[-20px] ml-[-20px] text-slate-100'>04</div>
                    <div className='border border-indigo-600 p-5 rounded-xl'>
                        <h2 className='text-slate-100 bg-gradient-to-r from-indigo-600 to-blue-500 p-5 rounded-xl mb-5 font-semibold text-1xl pl-7'>What is use memo and how to use?</h2>
                        <p className='text-indigo-600 px-5'>useMemo is a hook that allows you to memoize a function's return value so that it's only re-computed when its dependencies change. Memoization can help to optimize your application's performance by avoiding unnecessary re-renders of components.</p>
                    </div>
                </div>
                
  
   

            </div>
        </div>
    );
};

export default Blog;