import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div>
                
                <div className='text-center md:flex justify-around items-center'>
                <h2 className="text-5xl text-red-600 font-bold">My<span className='text-green-700'>-Port</span><span className='text-blue-700'>folio</span></h2>
                    <h2 className='text-2xl font-semibold'><Link to='/'>Home</Link></h2>
                    <h2 className='text-2xl font-semibold'><Link to='/abt'>About me</Link></h2>
                    <h2 className="dropdown dropdown-hover text-2xl font-semibold">
                        <label tabIndex={0} className="">My Skills </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='mt-3 mb-2' to='/skill1'>SKill 1</Link>
                            <Link className='nt-3 mb-2' to='/skill1'>Skill 2</Link>
                        </ul>
                    </h2>
                    <h2 className='text-2xl font-semibold'><Link>Contact me</Link></h2>
                </div>
            </div>

            <div className='w-[86%] mt-5 mx-auto flex justify-center items-center bg-slate-100 p-3 rounded-xl'>
                <div>
                    <button className='btn btn-warning
                    '>Latest: </button>
                </div>
                <div>
                    <Marquee>
                        Hello! This is Anirban Chondro Banai, I am a MERN stack developer.Here i post my real skills show.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Header;