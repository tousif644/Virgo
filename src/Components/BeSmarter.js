import React from 'react';
import BeSmarterArticle from './BeSmarterArticle';
import BeSmarterLoop from './BeSmarterLoop';

const BeSmarter = () => {
    return (
        <div>
            <div className='p-12 '>
                <h1 className='lorem font-bold text-5xl'>Be better,</h1>
                <h1 className='lorem font-bold text-5xl mb-6'>Be stronger</h1>
                <div className="button-container">
                    <div className='the-button'>
                        <div className='the-front-button'>
                            <a href="#" className='text-5xl lorem font-bold'>Join Our Club ➡</a>
                        </div>

                        <div className='the-back-button'>
                            <a href="#" className='text-5xl lorem font-bold'>Join Our Club ➡</a>
                        </div>
                    </div></div>
            </div>
            <BeSmarterLoop></BeSmarterLoop>

        </div>
    );
};

export default BeSmarter;