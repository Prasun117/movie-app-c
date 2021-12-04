import React from "react";

import {
  Drawer,
  List,
  ListItem,
  makeStyles,
  ListItemText,
  Divider
} from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});
export const CustomDrawer = (props) => {
  const classes = useStyles();
  const { drawerToggle, handleDrawerToogleClose } = props;
  return (
    <Drawer
      anchor={"left"}
      open={drawerToggle}
      onClose={handleDrawerToogleClose}
    >
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemText primary={"Login"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Start your free trial"} />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};
