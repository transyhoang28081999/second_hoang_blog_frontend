import React from 'react';
import {Button} from '../structure/Structure';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Outside = styled.div`
    clear: both;
    margin-top: 30px;
`;
const Image = styled.div`
    width: 400px;
    height: 300px;
    overflow: hidden;
    & img{
        width: 400px;
    }
    float: left;
`;
const Text = styled.div`
    width: 600px;
    height: 250px;
    float: left;
    & h3 {
        margin-top: 20px;
    }
    & p.postText{
        color: gray;
    }
    & p {
        margin-top: 15px;
        padding: 10px 0px;
    }
`;
const PostButton = styled.div`
    float: left;
    & Button{
        margin-right: 30px;
        & a{
            color: ${props => props.color ? props.color: "white"};
            text-decoration: none;
        }
    }
`;

function Post({post, onDelete}) {
    return (
        <Outside>
            <Image>
                <img src="" alt="No images" />
            </Image>
            <Text>
                <h3>{post.title}</h3>
                <p className="postText">By <strong>Tran Sy Hoang</strong>, 1 day ago</p>
                <p>{post.description}</p>
            </Text>
            <PostButton>
                <Button><Link to={"/blog/"+post.id}>Keep Reading</Link></Button>
                <Button color="blue" background="yellow">
                    <Link to={"/blog/" + post.id + "/edit"} style={{color:"blue"}}>Edit</Link>
                </Button>
                <Button background="red" onClick={() => onDelete(post)}>Delete</Button>
            </PostButton>
        </Outside>
    );
}
export default Post;