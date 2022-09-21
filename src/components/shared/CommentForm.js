import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ slug }) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        body: ""
    })
    const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT, {
        variables: {
            name: comment.name,
            email: comment.email,
            body: comment.body,
            slug
        }
    })

    const sendHandler = () => {
        const { name, email, body } = comment;
        if (name && email && body) {
            setComment({
                name: "",
                email: "",
                body: ""
            })
            sendComment()
        } else {
            toast.warn('تمامی فیلد ها باید کامل باشند!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    if (data) {
        toast.success('نظر شما با موفقیت ارسال شد و منتظر تایید مدیر است', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (error) {
        toast.error('مشکلی رخ داد و کامنت شما ارسال نشد', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <Grid item xs={12} sx={{ borderRadius: 4, boxShadow: "rgba(0 , 0 , 0 , 0.1) 0px 4px 12px", p: 2, mt: 3 }}>
            <Typography component="h6" variant='h6' color="primary" mb={3}>ارسال کامنت</Typography>
            <TextField value={comment.name} onChange={e => setComment({ ...comment, name: e.target.value })} label="نام" variant="outlined" size='small' fullWidth sx={{ mb: 2 }} />
            <TextField value={comment.email} onChange={e => setComment({ ...comment, email: e.target.value })} label="ایمیل" variant="outlined" size='small' fullWidth sx={{ mb: 2 }} />
            <TextField value={comment.body} onChange={e => setComment({ ...comment, body: e.target.value })} label="کامنت" variant="outlined" size='small' multiline minRows={4} fullWidth sx={{ mb: 2 }} />
            <Button onClick={sendHandler} variant="contained" disabled={loading ? true : false}>{loading ? "درحال ارسال..." : "ارسال نظر"}</Button>
            <ToastContainer />
        </Grid>
    );
};

export default CommentForm;