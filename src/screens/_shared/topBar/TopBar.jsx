import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UsersLogo from './UsersLogo/UsersLogo';

export default function TopBar() {

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
            <UsersLogo/>
          <Typography variant="h6">
              Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
