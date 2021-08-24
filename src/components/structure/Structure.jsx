import styled from 'styled-components';

export const BigContainer = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;

    background-color: ${props => props.primary ? props.primary : "white"};
    clear: ${props => props.clear ? props.clear : ""};
`;
export const SmallContainer = styled.div`
    width: 1140px;
    margin: 0px auto;
`;

export const Banner = styled.div`
    & h1{
        font-size: 50px;
        text-align: center;
        margin: 20px 0px;
    }
    border-bottom: 1px solid gray;
    margin-bottom: 30px;
`;
export const Button = styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 17px;

    color: ${props => props.color ? props.color : "white"};
    background-color: ${props => props.background ? props.background : "blue"};
    transition: all .25s ease;

    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;