import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BigContainer, SmallContainer } from '../structure/Structure';

const Outside = styled(BigContainer)`
    height: 80px;
`;

const Left = styled.h1`
    color: white;
    font-size: 40px;
    float: left;
    line-height: 80px;
`;
const Right = styled.nav`
        float: right;
    & a{
        text-decoration: none;
        color: white;
        font-size: 17px;

        line-height: 80px;
        margin-right: 20px;
    }
`;

function Header(){
    return (
        <Outside primary="black">
            <SmallContainer>
                <Left>Laravel & Reactjs</Left>
                <Right>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </Right>
            </SmallContainer>
        </Outside>
    );
}
export default Header;