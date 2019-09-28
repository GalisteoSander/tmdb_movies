import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import tmdbIcon from '../icons/tmdbIcon.png';

const useStyles = makeStyles(theme => ({
    bar: {
        height: '65px',
        color: '#333',
        backgroundColor: '#272727'
    },
    icon: {
        height: '55px',
        width: '145px',
        paddingTop: '7px',
        paddingLeft: '10px'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position="static">
                <img className={classes.icon} src={tmdbIcon}></img>
            </AppBar>
        </div>
    );
}