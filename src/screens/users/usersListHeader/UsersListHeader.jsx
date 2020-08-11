import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const UsersListHeader = () => {

    return (
        <Grid container direction="row" justify="space-between">
            <Typography variant='h5' display={"inline"} >Users</Typography>
            <Link to={"/add-user"} >
                <Button variant="contained" color="primary" size="small" startIcon={ <AddIcon /> } >
                    Add User
                </Button>
            </Link>

        </Grid>
    )
};

export default UsersListHeader;
