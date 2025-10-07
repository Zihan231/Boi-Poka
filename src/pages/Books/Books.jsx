import React from 'react';
import BookImg from '../../assets/BannerBook.png'
import Book from './Book/Book';
import { useLoaderData } from 'react-router';


const Books = () => {
    const dt = useLoaderData();
    // console.log(dt.map((x)=>x.bookId));
    return (
        <div className='md:mt-24 sm:mt-12 mt-8'>
            <h1 className='playfair font-bold sm:text-3xl text-2xl md:text-4xl mb-4'>Books</h1>
            {/* Books Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Cards */}
                {
                    dt.map(data => <Book key={data.bookId} data={data}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;