import React from 'react';
import {BigContainer, SmallContainer, Banner} from '../structure/Structure';

function Home() {
    return (
        <BigContainer clear="both">
            <SmallContainer>
                <Banner>
                    <h1>This is my homepage</h1>
                </Banner>
            </SmallContainer>
        </BigContainer>
    );
}
export default Home;