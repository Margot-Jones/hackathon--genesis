import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BLOGSEXAMPLE, OtherBlogs } from './OtherBlogs/OtherBlogs';
import { Post, POSTEXAMPLE } from './BlogBlock/Post';
import { AddComment } from '../../components/AddComment';
import { SortToggler } from './Sort';

const useStyles = makeStyles({
  mainContent: {
      width: '100%',
      // height: '500px',
      // padding: '90px 0 103px 0' ,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap-reverse',
      marginTop: '80px',
  },

  blockPost: {
      height: 'auto',
      '@media (max-width: 984px)': {
          marginBottom: '-270px',
        }
  },

    AddComment: {
        marginLeft: '5%',
        alignItems: 'center'
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
    <Grid className={classes.mainContent} position="static">
      <Grid container position="static" md={6} className={classes.AddComment}>
          <AddComment />
          <SortToggler />
        <Grid container className={classes.blockPost} md={8} sm={8} xs={10}>
          {posts.map((post) => <Grid item xs={12}><Post post={post}/></Grid>)}
        </Grid>
        </Grid>
        <Grid container className={classes.blockUsers} md={3} sm={8} xs={10}>
            <OtherBlogs {...{blogs: BLOGSEXAMPLE}} />
        </Grid>
    </Grid>
  </>
}

export default HomePagePresenter
