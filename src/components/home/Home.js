import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Posts from './Posts';
import Authors from './Authors';

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Grid container p={3} spacing={3}>
                <Grid item xs={12} md={3}>
                    <Typography component="h6" fontWeight={700} mb={2}>نویسنده ها</Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography component="h6" fontWeight={700} mb={2}>مقالات</Typography>
                    <Posts />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;