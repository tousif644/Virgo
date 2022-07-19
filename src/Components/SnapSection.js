import React from 'react';
import image from "../assets/img/sticky-hero-img-1.jpg"
const SnapSection = () => {
    return (
        // <div class="snap-mandatory snap-y h-screen w-screen overflow-scroll">
        //     <div className='bg-yellow-500 snap-start w-screen flex justify-center items-center'>1</div>
        //     <div className='bg-blue-500 snap-start w-screen flex justify-center items-center'>2</div>
        //     <div className='bg-teal-500 snap-start w-screen flex justify-center items-center'>3</div>
        //     <div className='bg-red-500 snap-start w-screen flex justify-center items-center'>4</div>
        // </div>


        <div>
            <img src={image} alt="" />

            <div className="w-6/12 mx-auto my-12 inter text-xl text-[#323639]">
                <div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odit ea aliquid reiciendis eum quo eligendi sapiente molestiae recusandae autem dolore cupiditate dicta enim illo, dolorem accusamus doloremque.
                    </h1>
                </div>

                <br />

                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum eos accusantium atque aspernatur repellat rem illo earum nihil. Earum eligendi error tenetur ullam id dolores fugiat necessitatibus placeat. Omnis, ad! Ipsam consequuntur officiis iusto praesentium voluptatibus nulla quidem dolores! Debitis laudantium libero maiores porro velit distinctio neque earum architecto tenetur, doloremque sit ad dolores consequatur corrupti quae culpa? Officia!</h1>
                </div>
            </div>
        </div>
    );
};

export default SnapSection;