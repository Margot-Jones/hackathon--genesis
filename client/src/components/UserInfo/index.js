import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import userPhoto from '../../assets/img/userPhoto.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    userName: {
        margin: '20px 0',
        fontSize: '30px',
    },

    card: {
        width: '455px',
        backgroundColor: '#1C0D1C',
    },

    cardContent: {
        color: '#EBEBEB',
    },

    userDesc: {
        fontSize: '20px',
    }
});


export const UserInfo = () =>{
    const classes = useStyles();

    return (
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src = {userPhoto}
                        height="281"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" align="center" className={classes.userName}>
                            someone77
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" className={classes.userDesc}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
};
