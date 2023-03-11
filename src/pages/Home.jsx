import React from 'react';
import MavenCanvas from '../components/canvas/Maven';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <section>
            <Navbar />
            <MavenCanvas />
        </section>
    );
};

export default Home;