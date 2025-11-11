import React from 'react';
import Banner from './Banner';
import LatestBooks from './LatestBooks';
import StaticSection from './StaticSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <LatestBooks></LatestBooks>
           <StaticSection></StaticSection>
        </div>
    );
};

export default Home;