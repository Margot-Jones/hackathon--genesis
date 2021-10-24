import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BLOGSEXAMPLE, OtherBlogs } from './OtherBlogs/OtherBlogs';
import { Post, POSTEXAMPLE } from './BlogBlock/Post';
import { AddComment } from '../../components/AddComment';

const useStyles = makeStyles({
  mainContent: {
      width: '100%',
      height: '500px',
      padding: '90px 0 103px 0' ,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap-reverse',
      marginTop: '280px',
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

const HomePagePresenter = ({posts=[], isLoading, isError}) => {
  const classes = useStyles();
  if(isLoading) {
    return <p>Loading</p>
  }
  if(isError){
    return <p>Error</p>
  }

  return <>
    <AddComment />
    <Grid className={classes.mainContent} position="static">
        <Grid className={classes.blockPost} md={6} sm={8} xs={10}>
          {posts.map((post) => <Post post={post}/>)}
        </Grid>
        <Grid className={classes.blockUsers} md={3} sm={8} xs={10}>
            <OtherBlogs {...{blogs: BLOGSEXAMPLE}} />
        </Grid>
    </Grid>
  </>
}

export default HomePagePresenter
