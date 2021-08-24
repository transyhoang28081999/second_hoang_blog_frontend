import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {BigContainer, SmallContainer, Banner, Button} from '../structure/Structure';
import styled from 'styled-components';
import axios from 'axios';

const Input = styled.input`
    width: 100%;
    height: 30px;
    font-size: 25px;

    border: none;
    border-bottom: 1px solid gray;
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 300px;

    border: none;
    border-bottom: 1px solid gray;
`;

const schema = yup.object().shape({
    title: yup.string().required().max(100),
    description: yup.string().required().min(10)
});

function Edit({match}){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [post, setPost] = useState({});
    const [lock, setLock] = useState(false);
    const onSubmit = data => {
        const title = data.title;
        const description = data.description;
        setLock(true);
        setPost({...post, title, description});
    };
    useEffect(() => {
        if(lock){
            axios.put(`http://127.0.0.1:8000/api/post/${post.id}`, post)
            .then(res => {
                const post = res.data.post;
                alert("A post was updated: " + post.title);
            })
        }
        else if(!post.id){
            axios.get(`http://127.0.0.1:8000/api/post/${match.params.id}`)
            .then(res => {
                const post = res.data.post;
                setPost(post);
            })
            .catch(err => console.log(err));
        }
    },[post]);
    return (
        <BigContainer clear="both">
            <SmallContainer>
                <Banner>
                    <h1>Edit Post</h1>
                </Banner>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Title: </label>
                        <Input type="text" placeholder="write something ..."
                        defaultValue={post.title}
                        {...register("title")}/>
                        <p style={{color:"red"}}>{errors.title?.message}</p>
                        <label>Description: </label>
                        <Textarea placeholder="write something ..."
                            defaultValue={post.description}
                            {...register("description")}></Textarea>
                        <p style={{color:"red"}}>{errors.description?.message}</p>
                        <Button type="submit" style={{margin: "30px 0px"}}>Submit</Button>
                    </form>
                </div>
            </SmallContainer>
        </BigContainer>
    );
}
export default Edit;