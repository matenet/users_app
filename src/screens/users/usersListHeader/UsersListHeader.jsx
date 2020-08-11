import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';

const UsersListHeader = () => {

    return (
        <Grid container direction="row" justify="space-between">
            <Typography variant='h5' display={"inline"} >Users</Typography>
            <Button variant="contained" color="primary" size="small" startIcon={ <AddIcon /> } href="/add-user">
                Add User
            </Button>
        </Grid>
    )
};

export default UsersListHeader;
