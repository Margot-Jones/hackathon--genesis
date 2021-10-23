import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Post, POSTEXAMPLE } from '../BlogBlock/Post';
import { BLOGSEXAMPLE, OtherBlogs } from '../OtherBlogs/OtherBlogs';

const useStyles = makeStyles({
    mainContent: {
        width: '100%',
        height: '500px',
        padding: '90px 0 103px 0' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap-reverse'
    },

    blockPost: {
        height: 'auto',
        '@media (max-width: 984px)': {
            marginBottom: '-500px'
          }
    },

    blockUsers: {
        height: 'auto'
    }

});

export const Blog = () =>{
    const classes = useStyles();

    return (
        <Grid className={classes.mainContent} position="static">
            <Grid className={classes.blockPost} md={6} sm={8} xs={10}>
                <Post {...POSTEXAMPLE} />
            </Grid>
            <Grid className={classes.blockUsers} md={3} sm={8} xs={10}>
                <OtherBlogs {...{blogs: BLOGSEXAMPLE}} />
            </Grid>
        </Grid>
    );
};
