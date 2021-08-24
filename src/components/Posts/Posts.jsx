import React, { useEffect, useState } from 'react';
import {BigContainer, SmallContainer, Banner, Button} from '../structure/Structure';

import Post from './Post';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Vietnam', description: 'Description of Vietnam'},
        {id:2, title: 'China', description: 'Description of China'}
    ]);
    const [meta, setMeta] = useState({
        total: 2,
        currentPage: 1,
        perPage: 2
    });
    const [page, setPage] = useState(1);
    const onDelete = item => {
        axios.delete(`http://127.0.0.1:8000/api/post/${item.id}`)
        .then(res => {
            alert("A post was deleted: " + item.title);
        })
        .catch(err => console.log(err));
    };
    const onChangePage = newPage => {
        setPage(newPage);
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts?page=${page}`)
        .then(res => {
            const posts = res.data.posts;
            const meta = res.data.meta;
            setMeta(meta);
            setPosts(posts);
        })
        .catch(err => console.log(err));
    },[page]);
    return (
        <BigContainer clear="both">
            <SmallContainer>
                <Banner>
                    <h1>Blog Posts</h1>
                </Banner>
                <div>
                    <Button>
                        <Link to="/blog/create" style={{textDecoration: "none", color: "white"}}>
                            Create Post
                        </Link>
                    </Button>
                    {posts.map(post =>
                        <Post
                            key={post.id}
                            post={post}
                            onDelete={onDelete}/>
                    )}
                </div>
                <Pagination onChangePage={onChangePage} meta={meta}/>
            </SmallContainer>
        </BigContainer>
    );
}
export default Posts;