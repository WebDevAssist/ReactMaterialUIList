import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import USER_DATA from "./data/data";
import getUserCardColor from "./utils/utils";
import { colors, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
  },
  listItem: {
    padding: theme.spacing(2),
  },
  subHeader: {
    backgroundColor: colors.grey[50],
    padding: theme.spacing(1),
  },
}));

const headerIndices = [1, 11, 21, 31];
const getHeaderTitle = (i) => {
  switch (i) {
    case 1:
      return "Users - A";
    case 11:
      return "Users - B";
    case 21:
      return "Users - C";
    case 31:
      return "Users - D";
    default:
      return "N/A";
  }
};
export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {USER_DATA.map((msg) => (
          <>
            {headerIndices.includes(msg.id) && (
              <ListSubheader className={classes.subHeader}>
                {getHeaderTitle(msg.id)}
              </ListSubheader>
            )}
            <ListItem button className={classes.listItem}>
              <ListItemAvatar>
                <Avatar
                  alt="user profile picture"
                  style={{
                    backgroundColor: getUserCardColor(msg.name.charAt(0)),
                  }}
                >
                  {msg.id}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={msg.title} secondary={msg.subtitle} />
            </ListItem>
          </>
        ))}
      </List>
    </Paper>
  );
}
