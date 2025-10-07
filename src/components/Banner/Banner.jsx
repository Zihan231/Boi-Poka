import React from 'react';
import Book from '../../assets/BannerBook.png'
const Banner = () => {
    return (
        <div className='offWhite grid md:grid-cols-[2fr_1fr] grid-cols-1 py-10 items-center rounded-3xl playfair md:px-20 px-2 gap-4'>
            <div className='md:text-left order-2 md:order-1 pl-5 md:pl-0 sm:pl-0'>
                <h1 className='text-left sm:text-5xl text-4xl md:text-6xl mb-10'>Books to freshen up your bookshelf</h1>
                <button className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-success text-white bg-[#23BE0A] workSans border-0">View The List</button>
            </div>
            <div className='order-1 md:order-2 flex items-center justify-center'>
                <img className='md:w-full w-[70%] sm:w-[320px]' src={ Book } alt="Book"></img>
            </div>
        </div>
    );
};

export default Banner;