import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";

const UsersListHeader = () => {

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Link to="/" >
                <IconButton aria-label="Go back">
                    <NavigateBefore />
                </IconButton>
            </Link>
            <Typography variant='h6'>New user details</Typography>
        </Grid>
    )
};

export default UsersListHeader;
