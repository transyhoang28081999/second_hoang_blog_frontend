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
function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [post, setPost] = useState({});
    const onSubmit = data => {
        setPost(data);
    }
    useEffect(() => {
        if(post.title){
            axios.post(`http://127.0.0.1:8000/api/post`,post)
            .then(res => {
                const post = res.data.post;
                alert('New post was created: ' + post.title);
            })
            .catch(err => console.log(err));
            }
    },[post]);
    return (
        <BigContainer clear="both">
            <SmallContainer>
                <Banner>
                    <h1>Create Post</h1>
                </Banner>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Title: </label>
                        <Input type="text" placeholder="write something ..." {...register("title")}/>
                        <p style={{color: "red"}}>{errors.title?.message}</p>
                        <label>Description: </label>
                        <Textarea placeholder="write something ..."
                            {...register('description')}></Textarea>
                        <p style={{color: "red"}}>{errors.description?.message}</p>
                        <Button type="submit" style={{margin: "30px 0px"}}>Submit</Button>
                    </form>
                </div>
            </SmallContainer>
        </BigContainer>
    );
}
export default Create;