import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to="/" style={{ color: "#fff" }}>
                        <Typography component='h1' variant='h5' fontWeight='700'>وبلاگ</Typography>
                    </Link>
                    <Link to="/" style={{ color: "#fff" }}>
                        <PostAddSharpIcon />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;