import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';
import { Grid } from '@mui/material';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

const Posts = () => {
    const { loading, data, error } = useQuery(GET_POSTS);

    if (loading) return <Loader />
    if (error) return <h4>something went wrong</h4>
    return (
        <Grid container spacing={2}>
            {
                data.posts.map(post =>
                    <Grid key={post.id} item xs={12} sm={6} md={4}>
                        <CardEL {...post} />
                    </Grid>)
            }
        </Grid>
    );
};

export default Posts;