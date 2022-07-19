import React from 'react';

const BeSmarterArticle = ({title,description,another,number}) => {
    return (
        <div>
            <div className='flex pl-80 justify-center w-5/6 my-12'>
                <div className=' bg-[#262FC933] bg-opacity-50 text-2xl mx-auto  number rounded-full p-3  h-8'>
                    <h1 className="text-sm  inter -my-2">{number}</h1>
                </div>
                <div className='mx-4'>
                    <h1 className='inter font-bold text-3xl mb-4'>{title}</h1>
                    <p className='text-[#737678] inter text-xl my-2'>{description} <br /> <br /> {another}</p>
                </div>
            </div>
        </div>
    );
};

export default BeSmarterArticle;