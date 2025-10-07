import React from 'react';
import BookImg from '../../assets/BannerBook.png'
import { RiStarSLine } from "react-icons/ri";


const Book = () => {
    return (
        <div className='md:mt-24 sm:mt-12 mt-8'>
            <h1 className='playfair font-bold sm:text-3xl text-2xl md:text-4xl mb-4'>Books</h1>
            {/* Books Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Cards */}
                <div className='border-2 border-gray-200 rounded-3xl p-4'>
                    {/* img */}
                    <div className='flex justify-center items-center offWhite rounded-3xl'>
                        <img className='w-[70%] md:w-[60%] mx-auto p-2' src={ BookImg } alt=""></img>
                    </div>
                    <div className='px-2 py-4'>
                        <div className='flex justify-between TxtGreen font-semibold px-4'>
                            <h3>Young Adult</h3>
                            <h3>Identity</h3>
                        </div>
                        <div className='text-left mt-4'>
                            <h2 className='playfair text-2xl mb-2 font-bold'>The Catcher in the Rye</h2>
                            <p className='workSans font-medium text-base text-[#13131390] mb-2'>By: Hedar Bal</p>
                        </div>
                        <hr className='opacity-20 border-dashed border-t-2'></hr>
                        <div className='flex justify-between font-medium text-base text-[#13131390] mt-2'>
                            <h4>Fiction</h4>
                            <p className='flex items-center justify-center gap-2'>
                                <span>5.0</span> <span><RiStarSLine /></span>
                            </p>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;