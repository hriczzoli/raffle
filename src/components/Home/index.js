import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center text-lg">
            <h2>Welcome to Raffle.ai code challange</h2>
            <p>this is a Todo application</p>
            <p>to get started please login</p>
            <Link to="/login"><button className="bg-green-500 text-white rounded p-2 mt-6">GET STARTED</button></Link>
        </div>
    )
}

export default Home;