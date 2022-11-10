import React from 'react';
import useSetTitle from '../../../Hooks/useSetTitle';
import AboutMe from '../../AboutMe/AboutMe';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useSetTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutMe></AboutMe>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;