import React from 'react';
import useSetTitle from '../../../Hooks/useSetTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useSetTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;