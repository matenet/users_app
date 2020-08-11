import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  }
}))

const UsersList = () => {
  const users = useSelector(state => state.users.data);
  console.log(users);
  const classes = useStyles();
  return (
    <List>
      {users.map((user) => (
          <Paper key={`suser-${user.id}`} elevation={0}>
            <Box mb={2} borderRadius={5} border={1} borderColor="grey.300">
        <ListItem >
          <ListItemText
            primary={
              <>
                <Typography variant="caption" color="textSecondary">{`ID: ${user.id}`}</Typography>
                <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
              </>
            }
            secondary={user.email}
          />
          <ListItemAvatar>
            <Avatar alt={user.first_name + '' + user.last_name} src={user.avatar} variant="square" className={classes.large}/>
          </ListItemAvatar>
        </ListItem>
            </Box>
            </Paper>
      ))}
    </List>
  )
};

export default UsersList;
