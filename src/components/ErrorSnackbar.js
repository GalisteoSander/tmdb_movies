import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles(theme => ({
    error: {
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
    const { className, message } = props;
    const vertical = 'bottom';
    const horizontal = 'center';
    return (
        <SnackbarContent
            className={classes.error}
            anchorOrigin={{ vertical, horizontal }}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <ErrorIcon className={classes.icon}></ErrorIcon>
                    {message}
                </span>
            }
        />
    );
}



