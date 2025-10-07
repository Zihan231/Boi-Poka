import React from 'react';
import BookImg from '../../../assets/BannerBook.png'
import { RiStarSLine } from "react-icons/ri";

// "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": ["Fiction", "Romance"],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925

const Book = ({ data }) => {
    // console.log(data);
    return (
        <div className='border-2 border-gray-200 rounded-3xl p-4'>
            {/* img */}
            <div className='flex justify-center items-center offWhite rounded-3xl'>
                <img className='w-[70%] md:w-[60%] h-[330px] mx-auto p-2' src={data.image} alt={data.bookName}></img>
            </div>
            <div className='px-2 py-4'>
                <div className='flex justify-between TxtGreen font-semibold px-4'>
                    <h3>{data.publisher}</h3>
                    <h3>{data.yearOfPublishing}</h3>
                </div>
                <div className='text-left mt-4'>
                    <h2 className='playfair text-2xl mb-2 font-bold'>{ data.bookName }</h2>
                    <p className='workSans font-medium text-base text-[#13131390] mb-2'>By: { data.author }</p>
                </div>
                <hr className='opacity-20 border-dashed border-t-2'></hr>
                <div className='flex justify-between font-medium text-base text-[#13131390] mt-2'>
                    <h4>{data.category}</h4>
                    <p className='flex items-center justify-center gap-2'>
                        <span>{ data.rating}</span> <span><RiStarSLine /></span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Book;