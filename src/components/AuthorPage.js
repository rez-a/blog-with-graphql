import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardEL from './shared/CardEL';
import Loader from './shared/Loader';

const AuthorPage = () => {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(GET_AUTHOR, { variables: { slug } });

    if (loading) return <Loader />
    if (error) return <h4>something went wrong</h4>
    const { author: { avatar: { url }, description: { html }, field, name, posts } } = data;
    return (
        <Container maxWidth="lg">
            <Grid container my={3}>
                <Grid item mt={5} display="flex" alignItems="center" flexDirection="column" xs={12}>
                    <Avatar
                        src={url}
                        alt={name}
                        sx={{ width: 200, height: 200 }}
                    />
                    <Typography component="h4" variant="h4" fontWeight={700} my={2}>{name}</Typography>
                    <Typography component="p" variant="p" color="text.secondary">{field}</Typography>
                </Grid>
                <Grid item xs={12} my={3}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}></div>
                </Grid>
                <Grid item xs={12} my={3}>
                    <Typography component="h6" variant="h6" fontWeight={500} my={2}>مقالات {name}</Typography>
                </Grid>
                <Grid container spacing={2}>
                    {
                        posts.map(post =>
                            <Grid key={post.id} item xs={12} sm={6} md={3}>
                                <CardEL {...post} />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorPage;