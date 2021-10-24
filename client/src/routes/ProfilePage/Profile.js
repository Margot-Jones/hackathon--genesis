import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Post, POSTEXAMPLE } from "../HomePage/BlogBlock/Post";
import { UserInfo, USER } from './UserInfo/UserInfo'
const POSTS = [POSTEXAMPLE, POSTEXAMPLE, POSTEXAMPLE];

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    paddingTop: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  blockPost: {
    height: "auto",
    "@media (max-width: 984px)": {
      marginBottom: "50px",
    },
  },

  blockUsers: {
    height: "auto",
  },
});

const Profile = ({ posts } = {}) => {
  posts = POSTS;
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainContent} position="static">
        <Grid className={classes.blockPost} md={4} sm={8} xs={10}>
          <UserInfo {...USER} />
        </Grid>
        <Grid className={classes.blockUsers} md={6} sm={8} xs={10}>
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Grid item>
                <Post key={index} {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
