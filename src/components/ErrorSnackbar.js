import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles(theme => ({
    error: {
        position: 'relative',
        top: 17,
        marginTop: 50,
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },

}));

export const ErrorSnackbar = (props) => {
    const classes = useStyles();
    const { message } = props;

    return (
        <SnackbarContent
            className={classes.error}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" >
                    <ErrorIcon className={classes.icon}></ErrorIcon>
                    {message}
                </span>
            }
        />
    );
}



