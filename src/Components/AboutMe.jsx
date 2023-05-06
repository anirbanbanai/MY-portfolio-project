import React from 'react';
import pic from '../../public/IMG_20230312_193407.jpg'

const AboutMe = () => {
    return (
        <div className='flex'>

            <div >
                <h1 className='text-2xl font-semibold text-center'>Thiis is Anirban</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis facilis facere repellendus porro atque debitis rerum? Nesciunt deleniti maiores tempora sint vero? Recusandae ut ab vitae iste rerum? Assumenda.</p>
            </div>
            <img className='w-1/4 mx-auto rounded-full' src={pic} alt="" />
        </div>
    );
};

export default AboutMe;