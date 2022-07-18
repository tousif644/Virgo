import React from 'react';
import geometry from "../assets/img/feature-v10-img-2.jpg"
import articleExample2 from "../assets/img/article-example-img-2.svg"
const Geometry = () => {
    const style = {
        backgroundColor: "#202930"
    }

    const style1 = {
        backgroundColor: "#13181B"
    }
    return (
        <div style={style}>
            <div className="flex flex-row px-12 mb-24">
                <div style={style1} className="flex flex-col justify-between w-2/4 px-5 py-8">
                    <div> <h1 className='text-5xl lorem text-white font-bold'>Geometry</h1>
                    </div>
                    <div>
                        <p className='text-xl inter text-white underline decoration-[#777860]'>Shop now</p>
                    </div>
                </div>
                <div>
                    <img src={geometry} alt="" width={650} className="drop-shadow-lg" />
                </div>

            </div>


            {/* How it works */}
            <div className='flex justify-around p-14 items-center gap-8 w-full'>
                <div className='w-2/3'>
                    <h3 className='inter text-md text-[#cdd0d5] my-4'>How it works</h3>
                    <h1 className='lorem text-6xl text-white my-4 font-bold'>Lorem ipsum</h1>
                    <h2 className='text-xl text-white my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo.</h2>
                    <button className='btn btn-secondary'>Download</button>
                </div>

                <div className=' flex  w-3/4'>
                    <div class="mockup-phone max-h-60">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1">
                                <img src={articleExample2} alt="" className='-mt-80  rounded cover  w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="artboard mockup-window border w-96">
                    <img src={articleExample2} alt="" className='w-96 items-stretch'/>
                </div>
            </div>
        </div>
    );
};

export default Geometry;