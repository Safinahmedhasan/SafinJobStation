import React from 'react';

const Footer = () => {
    return (
        <div className='mt-64'>
            <div className='grid grid-cols-4 bg-slate-950 text-gray-100 justify-start p-32'>
                <div className='p-2'>
                    <h2 className='text-2xl mb-2'>SafinJobStation</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/src/assets/Icons/Group 9969.png" className='mt-5' alt="" />
                </div>
                <div className='p-2'>
                    <h2 className='text-2xl mb-2'>Company</h2>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='p-2'>
                    <h2 className='text-2xl mb-2'>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integration</p>
                </div>
                <div className='p-2'>
                    <h2 className='text-2xl mb-2'>Contact</h2>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>

            <div className=' bg-slate-950 text-gray-100 p-5 px-32 flex justify-between'>
                <div><p>@2023 SafinJobStation. All Rights Reserved</p></div>
                <div>Powered by SafinJobStation</div>
            </div>
        </div>
    );
};

export default Footer;