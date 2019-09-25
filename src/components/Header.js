import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles(theme => ({
    bar: {
        height: '75px',
        color: '#333',
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position="static">
            </AppBar>
        </div>
    );
}