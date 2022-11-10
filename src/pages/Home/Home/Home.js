import React from 'react';
import useSetTitle from '../../../Hooks/useSetTitle';
import AboutMe from '../../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useSetTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;