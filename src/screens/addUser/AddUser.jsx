import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import AddUserHeader from "./addUserHeader/AddUserHeader";
import AddUserForm from "./addUserForm/AddUserForm";

export default function AddUser() {

    return (
        <Container maxWidth="xs">
            <Box my={4} p={1} clone>
                <Paper square >
                    <AddUserHeader />
                    <AddUserForm />
                </Paper>
            </Box>
        </Container>
    );
}
