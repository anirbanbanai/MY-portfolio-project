import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SUBdata from './SUBdata';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2 className='text-4xl text-center'>This is Home</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 rounded-2xl'>
                {
                    data.map(m=> <SUBdata key={m.id} main={m}></SUBdata>)
                }
            </div>
        </div>
    );
};

export default Home;