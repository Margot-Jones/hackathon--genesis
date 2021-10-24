import React, { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import SortByAlpha from "@material-ui/icons/SortByAlpha";
import { makeStyles } from "@material-ui/core/styles";

const activeColor = '#F6AA1C';
const disabledColor = '#EBEBEB';

export const SortByDate = ({ active, descending, onClick }) => {
  return (
    <>
      <IconButton onClick={() => onClick("date")}>
        <CalendarTodayIcon
          htmlColor={active ? activeColor : disabledColor}
          fontSize="large"
        />
        {descending ? (
          <ArrowDownwardIcon
            htmlColor={active ? activeColor : disabledColor}
            fontSize="large"
          />
        ) : (
          <ArrowUpwardIcon
            htmlColor={active ? activeColor : disabledColor}
            fontSize="large"
          />
        )}
      </IconButton>
    </>
  );
};

export const SortByAlphabet = ({ active, descending, onClick }) => {
  return (
    <>
      <IconButton onClick={() => onClick("alphabet")}>
        <SortByAlpha htmlColor={active ? activeColor : disabledColor} fontSize="large" />
        {descending ? (
          <ArrowDownwardIcon
            htmlColor={active ? activeColor : disabledColor}
            fontSize="large"
          />
        ) : (
          <ArrowUpwardIcon
            htmlColor={active ? activeColor : disabledColor}
            fontSize="large"
          />
        )}
      </IconButton>
    </>
  );
};

export const SortToggler = () => {
  const [sortBy, setSortBy] = useState("date");
  const [descending, setDescending] = useState(false);

  const changeSort = (name) => {
    if (name === sortBy) {
      setDescending(!descending);
    } else {
      setSortBy(name);
    }
  };

  return (
    <>
      <SortByDate
        active={sortBy === "date" ? true : false}
        onClick={changeSort}
        descending={descending}
      />
      <SortByAlphabet
        active={sortBy === "alphabet" ? true : false}
        onClick={changeSort}
        descending={descending}
      />
    </>
  );
};
