import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import TopBar from './_shared/topBar';
import Users from './users';
import AddUser from './addUser/AddUser';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
      minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: '#E1E4E5'
  },
}));

const App = () => {
  const classes = useStyles();
  const snackBarValidOpen = useSelector(state => state.users.snackbarValidOpen);
  const snackbarErrorOpen = useSelector(state => state.users.snackbarErrorOpen);
  const snackbarValidText = "Thank you - your submission is pending and will appear after validation";
  const snackbarErrorText = "Connection error - please try again later";

  return (
    <div className={classes.container}>
      <TopBar />
        <Container maxWidth="sm">
            {snackBarValidOpen || snackbarErrorOpen ? <SnackbarContent
                message={snackBarValidOpen ?  snackbarValidText : snackbarErrorText}
                open={snackBarValidOpen || snackbarErrorOpen}
                // onClose={handleClose}
            /> : <></>}
        </Container>
      <Switch>
        <Route path="/" exact component={Users}/>
        <Route path="/add-user" component={AddUser}/>
      </Switch>
    </div>
  )
};

export default App;
