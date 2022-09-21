import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../graphql/queries';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';

const Authors = () => {
    const { data, loading, error } = useQuery(GET_AUTHORS);

    if (loading) return <Loader />
    if (error) return <h4>something went wrong</h4>
    return (
        <List sx={{ width: "100%", borderRadius: 4, boxShadow: "rgba( 0 , 0 , 0 , 0.2) 0px 5px 10px" }}>
            {
                data.authors.map((author, index) => (
                    <Fragment key={author.id}>
                        <Link to={`/authors/${author.slug}`}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar src={author.avatar.url} />
                                </ListItemAvatar>
                                <ListItemText primary={author.name} sx={{ textAlign: "Left", color: "text.primary" }} />
                            </ListItem>
                        </Link>
                        {
                            index !== data.authors.length - 1 && <Divider variant="middle" component="div" />
                        }

                    </Fragment>
                ))
            }
        </List>
    );
};

export default Authors;