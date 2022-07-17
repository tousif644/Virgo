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

    const phone = {

        backgroundImage: `url(${require('../assets/img/article-example-img-2.svg')})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"

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
            <div className='flex justify-around p-12 items-center'>
                <div>
                    <h3 className='inter text-md text-[#cdd0d5]'>How it works</h3>
                    <h1 className='lorem text-5xl text-white'>Lorem ipsum</h1>
                    <h2 className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo.</h2>
                    <button className='btn btn-secondary'>Download</button>
                </div>

                <div>
                    <div class="mockup-phone h-36">
                        <div class="camera"></div>
                        <div class="display" >
                            <div class="artboard artboard-demo phone-1 " >
                                <img src={articleExample2} alt="" className='h-96 w-2/4' />
                            </div>
                        </div>
                    </div>
                    <div class="mockup-window border border-base-300">
                        <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Geometry;