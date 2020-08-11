import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import UsersList from './userList';
import { loadUsers } from '../../redux/actions/usersActions';
import UsersListHeader from "./usersListHeader/UsersListHeader";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box my={4} px={2} clone>
        <Paper square >
          <Box pt={2} pb={1}>
            <UsersListHeader/>
          </Box>
          <Box>
            <UsersList />
          </Box>
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
