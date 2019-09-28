
import React, { Component } from 'react';
import { Container, makeStyles, Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { ErrorSnackbar } from './ErrorSnackbar';
import Fab from '@material-ui/core/Fab';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
    cont: {
        marginLeft: '20px'
    },
    embeddedIframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "80%",
        height: "70%"
    },
    embeddedBox: {
        position: "relative",
        overflow: "hidden",
        paddingTop: "56.25%",
        marginLeft: '50px'
    },
    returnButton: {
        float: 'left',
        paddingTop: '5px',
        paddingRight: '5px'
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    icon: {
        '& > .fa': {
            margin: theme.spacing(2),

        }
    }
}));

export const MovieTrailer = (props) => {
    const classes = useStyles();
    const { trailerUrl, error } = props;
    const thereIsError = error;

    if (thereIsError) return <ErrorSnackbar variant="error" className={classes.margin} message={error} />
    return (<div>

        <Container direction="row" >
            <Box align="left" className={classes.returnButton}>
                <Link to="/">
                    <Fab disabled aria-label="delete" className={classes.fab}>
                        <CancelIcon color="secondary" />
                    </Fab>
                </Link>
            </Box>
            <Box className={classes.embeddedBox} align="center" justify="center" >
                <iframe className={classes.embeddedIframe} src={trailerUrl} />
            </Box>

        </Container>
    </div>
    );
}


