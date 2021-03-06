import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BLOGSEXAMPLE, OtherBlogs } from "./OtherBlogs/OtherBlogs";
import { Post, POSTEXAMPLE } from "./BlogBlock/Post";
import { AddComment, FindPost } from "../../components/AddComment";
import { SortToggler } from "./Sort";

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    // height: '500px',
    // padding: '90px 0 103px 0' ,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap-reverse",
    marginTop: "80px",
  },

  blockPost: {
    height: "auto",
    "@media (max-width: 984px)": {
      marginBottom: "-270px",
    },
  },

  AddComment: {
    marginLeft: "5%",
    alignItems: "center",
  },

  blockUsers: {
    height: "auto",
  },
});

const HomePagePresenter = ({ posts = [], isLoading, isError }) => {
  const classes = useStyles();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }

  const [sortBy, setSortBy] = useState("date");
  const [descending, setDescending] = useState(true);
  const [sortFunc, setSortFunc] = useState("date" + true);
  const [findField, setFindField] = useState('');

  const sortFuncs = {
    ["date" + false]: (a, b) => (a.date > b.date ? 1 : -1),
    ["date" + true]: (a, b) => (a.date < b.date ? 1 : -1),
    ["alphabet" + false]: (a, b) => (a.authorData.toLowerCase() > b.authorData.toLowerCase() ? 1 : -1),
    ["alphabet" + true]: (a, b) => (a.authorData.toLowerCase() < b.authorData.toLowerCase() ? 1 : -1),
  };

  const onFindChange = (e) => {
    setFindField(e.target.value); 
    console.log(e.target.value);
  }

  return (
    <>
      <Grid className={classes.mainContent} position="static">
        <Grid
          container
          position="static"
          md={6}
          sm={10}
          xs={10}
          className={classes.AddComment}
        >
          <Grid item container md={12} style={{ justifyContent: "center" }}>
            <Grid item md={8}>
              {/* <AddComment /> */}
              <FindPost {...{changeValue: onFindChange}}/>
            </Grid>
            <Grid item md={4}>
              <SortToggler
                {...{
                  sortBy: sortBy,
                  setSortBy: setSortBy,
                  descending: descending,
                  setDescending: setDescending,
                  setSortFunc: setSortFunc
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.blockPost}
            xs={12}
            spacing={2}
          >
            {posts.filter((val)=>val.authorData.toLowerCase().includes(findField.toLowerCase())).sort(sortFuncs[sortFunc]).map((post) => (
              <Grid item xs={12}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container className={classes.blockUsers} md={3} sm={8} xs={10}>
          <OtherBlogs {...{ blogs: BLOGSEXAMPLE }} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePagePresenter;
