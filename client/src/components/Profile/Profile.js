import React from "react";
import { POSTEXAMPLE } from "../BlogBlock/Post";
import { USER, UserInfo } from "../UserInfo/UserInfo";
import { Post } from "../BlogBlock/Post";
import { Grid } from "@material-ui/core";

const POSTS = [POSTEXAMPLE, POSTEXAMPLE, POSTEXAMPLE];

const Profile = ({ posts } = {}) => {
  posts = POSTS;
  return (
    <>
      <UserInfo {...USER}/>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item>
            <Post key={index} {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Profile;
