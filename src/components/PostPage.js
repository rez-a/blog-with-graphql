import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../graphql/queries';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from './shared/Loader';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import sanitizeHtml from 'sanitize-html';
import CommentForm from './shared/CommentForm';
import Comments from './shared/Comments';

const PostPage = () => {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(GET_POST, { variables: { slug } })
    const navigate = useNavigate();

    if (loading) return <Loader />
    if (error) return <h4>something went wrong</h4>
    const { post: { title, content: { html }, coverPhoto: { url }, author: { slug: authorSlug, name, field, avatar: { url: authorUrl } } } } = data;
    return (
        <Container maxWidth="lg">
            <Grid container p={3}>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="space-between" my={5}>
                    <Typography component="h6" variant='h6' fontWeight={700} color="primary">{title}</Typography>
                    <Box component="div" sx={{ color: "text.primary", cursor: "pointer", width: "fit-content", display: "inline-flex" }} onClick={() => navigate(-1)}><ArrowBackRoundedIcon /></Box>
                </Grid>
                <img src={url} alt={title} width="100%" style={{ borderRadius: "20px" }} />
                <Grid item xs={12} my={5}>
                    <Link to={`/authors/${authorSlug}`} style={{ display: "flex", alignItems: "center", width: "fit-content" }}>
                        <Avatar src={authorUrl} alt={name} sx={{ marginRight: 2 }} />
                        <Box component="div">
                            <Typography component="p" variant='p' fontWeight={800} color="text.primary">{name}</Typography>
                            <Typography component="p" variant='p' fontSize={12} color="text.secondary">{field}</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h6" variant='h6' fontWeight={700} color="text.primary">{title}</Typography>
                </Grid>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}></div>
                <CommentForm slug={slug} />
                <Comments slug={slug} />
            </Grid>
        </Container>
    );
};

export default PostPage;