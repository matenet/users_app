import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, saveNewUser} from "../../../redux/actions/usersActions";

const useStyles = makeStyles((theme) => ({
    inputMargin: {
        marginBottom: theme.spacing(2)
    }
}))

export default function AddUser() {

    const users = useSelector(state => state.users);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const classes = useStyles();
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const userData = {
            firstName: name,
            lastName: surname,
            email: email
        }

        dispatch(saveNewUser(userData));

    }

    return (
        <form onSubmit={handleSubmit} >
            <Box ml={5} p={1} pt={0}>
                <FormControl fullWidth  variant="outlined">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        type="text"
                        variant="outlined"
                        className={classes.inputMargin}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-surname"
                        label="Surname"
                        type="text"
                        variant="outlined"
                        className={classes.inputMargin}
                        onChange={e => setSurname(e.target.value)}
                    />
                    <TextField
                        id="outlined-email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        className={classes.inputMargin}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormControl>
                <Box pb={1} pl={3} pr={0} pt={1}>
                    <Grid container direction="row" justify="space-between">
                        <Button color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary"  size={"small"} >
                            Submit to review
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </form>
    );
}
