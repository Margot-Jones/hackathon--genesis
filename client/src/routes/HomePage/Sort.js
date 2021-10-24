import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import SortByAlpha from "@material-ui/icons/SortByAlpha";

export const SortByDate = () => {
  const [descending, setDescending] = useState(false);
  return (
    <>
      <IconButton onClick={() => setDescending(!descending)}>
        <CalendarTodayIcon htmlColor="#EBEBEB" fontSize="large" />
        {descending ? (
          <ArrowDownwardIcon htmlColor="#EBEBEB" fontSize="large" />
        ) : (
          <ArrowUpwardIcon htmlColor="#EBEBEB" fontSize="large" />
        )}
      </IconButton>
    </>
  );
};

export const SortByAlphabet = () => {
  const [descending, setDescending] = useState(false);
  return (
    <>
      <IconButton onClick={() => setDescending(!descending)}>
        <SortByAlpha htmlColor="#EBEBEB" fontSize="large" />
        {descending ? (
          <ArrowDownwardIcon htmlColor="#EBEBEB" fontSize="large" />
        ) : (
          <ArrowUpwardIcon htmlColor="#EBEBEB" fontSize="large" />
        )}
      </IconButton>
    </>
  );
};
