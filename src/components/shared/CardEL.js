import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const CardEL = ({ slug, title, coverPhoto: { url }, author }) => {

    return (
        <Card sx={{ borderRadius: 4, boxShadow: "rgba( 0 , 0 , 0 , 0.2) 0px 5px 10px" }}>
            {
                author &&
                <Link to={`/authors/${author.slug}`}>
                    <CardHeader
                        avatar={<Avatar src={author.avatar.url} alt={author.name} />}
                        title={<Typography component="p" variant='p' fontWeight={700} fontSize="12px" color="text.secondary">{author.name}</Typography>}
                    />
                </Link>
            }
            <CardMedia
                component="img"
                height={194}
                src={url}
                alt={title}
            />
            <CardContent>
                <Typography component="p" variant="p" noWrap fontWeight={700}>{title}</Typography>
                <Divider variant="middle" sx={{ margin: "1rem 0 0" }} />
            </CardContent>
            <CardActions>
                <Link to={`/posts/${slug}`} style={{ width: "100%" }}>
                    <Button variant='outlined' sx={{ width: "100%", borderRadius: 3 }}>مطالعه مقاله</Button>
                </Link>
            </CardActions>
        </Card >
    );
};

export default CardEL;