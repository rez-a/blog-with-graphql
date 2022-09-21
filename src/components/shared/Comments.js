import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../graphql/queries';
import Loader from './Loader';
import { Typography, Grid, Avatar } from '@mui/material';
import { Box } from '@mui/system';

const Comments = ({ slug }) => {
    const { data, loading, error } = useQuery(GET_COMMENTS, {
        variables: {
            slug
        }
    })
    if (loading) return <Loader />
    if (error) return <h4>something went wrong</h4>
    return (
        <Grid item xs={12} sx={{ borderRadius: 4, boxShadow: "rgba(0 , 0 , 0 , 0.1) 0px 4px 12px", p: 2, mt: 3 }}>
            <Typography component="p" variant='p' color="primary">کامنت ها</Typography>
            <Grid container>
                {
                    data.comments.map(comment => (
                        <Grid item key={comment.id} border="1px solid silver" borderRadius={2} width="100%" p={2} mt={3}>
                            <Box component="div" display="flex" alignItems="center">
                                <Avatar sx={{ marginRight: 1 }}>{comment.name[0]}</Avatar>
                                <Typography component="p" variant='h6' fontSize={13} fontWeight={600}>{comment.name}</Typography>
                            </Box>
                            <Typography component="p" variant='p' color="text.secondary" mt={1}>{comment.body}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
};

export default Comments;