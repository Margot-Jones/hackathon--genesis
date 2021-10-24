import React from "react";
import { Comment } from "./Comment";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import { PostBody, POSTEXAMPLE, UserAvatar } from "../HomePage/BlogBlock/Post";

import { Card } from "@material-ui/core";

export const COMMENTEXAMPLE = {
  author: "asdd5",
  avatar:
    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
  text: "hi, there!",
  date: "12.05.2021",
};

const useStyles = makeStyles({
  mainCard: {
    marginTop: 60,
    marginBottom: 80,
    paddingTop: 60,
    paddingBottom: 40,
    background: "rgba(148,27,12,0.75)",
  },
  avatar: {
    justifyContent: "center",
  },
  comments: {
    marginTop: 25,
    marginBottom: 10,
  },
  commentStyle: {
    height: "auto",
    backgroundColor: "white",
    margin: "20px auto",
    paddingTop: "20px",
  },
  post: {
    marginRight: "10px",
  },
});

export const COMMENTSEXAMPLE = {
  comments: [
    COMMENTEXAMPLE,
    COMMENTEXAMPLE,
    {
      ...COMMENTEXAMPLE,
      author: "abc",
      text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    },
  ],
};

export const CommentPage = ({ comments }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid container item style={{ alignItems: "center" }} md={8}>
        <Card className={classes.mainCard}>
          <Grid item container>
            <Grid item container md={2} className={classes.avatar}>
              <UserAvatar {...POSTEXAMPLE} />
            </Grid>
            <Grid item container md={9}>
              <Card elevation={3}>
                <PostBody {...POSTEXAMPLE} />
              </Card>
              <Grid
                container
                spacing={2}
                item
                direction="column"
                className={classes.comments}
              >
                {comments.map((comment, index) => (
                  <Grid item>
                    <Comment key={index} {...comment} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
