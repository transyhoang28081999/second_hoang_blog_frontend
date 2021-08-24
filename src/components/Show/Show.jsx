import React, { useEffect, useState } from 'react';
import {BigContainer, SmallContainer, Banner, Button} from '../structure/Structure';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Text = styled.div`
    margin: 20px 0px;
`;

function Show({match}) {
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/post/${match.params.id}`)
        .then(res => {
            const post = res.data.post;
            setPost(post);
        })
        .catch(err => console.log(err));
    },[]);
    return (
        <BigContainer clear="both">
            <SmallContainer>
                <Banner>
                    <h1>{post.title}</h1>
                </Banner>
                <Text>
                    <p>{post.description}</p>
                </Text>
                <Button style={{marginBottom: "30px", float: "right"}}>
                    <Link to="/blog" style={{color:"white", textDecoration: "none"}}>
                        Go to Back
                    </Link>
                </Button>
            </SmallContainer>
        </BigContainer>
    );
}
export default Show;