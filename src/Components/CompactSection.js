import React from 'react';
const CompactSection = () => {
    const style = {
        backgroundColor: "#566246",
    }
    return (
        <div>
            <div style={style} className="flex justify-between items-center p-12 gap-44" >
                <div className='w-[145rem]'>
                    <h1 className='font-[Inter] my-2 text-[#CDD0D5]'>This is a Label</h1>
                    <p className='lorem text-white text-5xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='font-[Inter] text-xl text-[#CDD0D5] w-auto'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint tempore repellat earum. Natus accusantium dolores quas porro delectus corporis explicabo, adipisci eaque, tempore beatae blanditiis totam iste alias ipsum. Asperiores, temporibus quo.</p>

                    <br />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore officiis voluptatem et, sequi qui explicabo esse excepturi minus quisquam cupiditate cum recusandae ad dicta doloribus doloremque omnis inventore ipsa a veritatis laboriosam. Nostrum numquam nesciunt animi dolore. Sit earum vel illum obcaecati dolorem recusandae voluptates molestias iure repellendus blanditiis porro aspernatur tempora nam commodi ipsam ipsum minus nobis omnis pariatur sed dolor fugiat, nulla facilis! Ducimus quasi dolorum laudantium distinctio cum voluptatibus inventore nostrum, a qui deleniti odit dicta!</p>
                    <div className='float-right'>
                        <button className='rounded hover:bg-gray-200 hover:text-black  text-[#CDD0D5] p-1 my-2'>Read More</button>

                    </div>
                </div>



            </div>
           
        </div>
    );
};

export default CompactSection;