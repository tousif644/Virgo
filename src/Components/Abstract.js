import React from 'react';
import abstract1 from "../assets/img/feature-v10-img-1.jpg"

const Abstract = () => {
    const style = {
        backgroundColor: "#566246",
    }
    const style1 = {
        backgroundColor: "#626D52",
    }
    return (
        <div style={style} className="flex flex-row px-12">
            <div>
                <img src={abstract1} alt="" width={650} className="drop-shadow-lg" />
            </div>
            <div style={style1} className="flex flex-col justify-between w-2/4 px-5 py-8">
                <div> <h1 className='text-5xl lorem text-white font-bold'>Abstract</h1>
                </div>
                <div>
                    <p className='text-xl inter text-white underline decoration-[#777860]'>Shop now</p>
                </div>
            </div>
        </div>
    );
};

export default Abstract;