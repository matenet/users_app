import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsersLogoImage from '../../../../assets/img/users-logo.png';


const useStyles = makeStyles(() => ({
    mainLogo: {
        height: '50px',
        width: 'auto',
    },
}));

const UsersLogo = () => {
    const classes = useStyles();

    return (
        <>
            <img src={UsersLogoImage} className={classes.mainLogo} alt="Users App logo"/>
        </>
    )
};

export default UsersLogo;
