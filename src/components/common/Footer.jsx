import React from 'react';
import {BigContainer, SmallContainer} from '../structure/Structure';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Block = styled.div`
    float: left;
    color: white;
    width: 33%;
    text-align: center;

    margin-top: 30px;
    & ul{
        & li{
            list-style-type: none;
            & a{
            text-decoration: none;
            color: white;
            }
        }
    }
`;
const Bottom = styled.div`
    color: white;
    font-size: 20px;
    clear: both;

    text-align: center;
    padding: 30px;
    margin-top: 10px;
    line-height: 30px;
`;

function Footer() {
    return (
        <BigContainer primary="black" clear="both">
            <SmallContainer>
                <Block>
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/">Register</Link></li>
                    </ul>
                </Block>
                <Block>
                    <h3>Why?</h3>
                    <ul>
                        <li><Link to="/">Why am I?</Link></li>
                        <li><Link to="/">I not know</Link></li>
                        <li><Link to="/">You know?</Link></li>
                        <li><Link to="/">No, thank you!</Link></li>
                    </ul>
                </Block>
                <Block>
                    <h3>What?</h3>
                    <ul>
                        <li><Link to="/">What I love?</Link></li>
                        <li><Link to="/">You know?</Link></li>
                        <li><Link to="/">Hello</Link></li>
                        <li><Link to="/">Goodbye</Link></li>
                    </ul>
                </Block>
                <Bottom>
                    Copyright @2019, Hello everyone. Good luck with us!
                </Bottom>
            </SmallContainer>
        </BigContainer>
    );
}
export default Footer;