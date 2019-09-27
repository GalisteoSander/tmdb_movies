
import React, { Component } from 'react';
import { Container, makeStyles, Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    embeddedIframe: {
        position: "absolute",
        top: 0,
        left: 0,
        marginLeft: "10%",
        width: "80%",
        height: "80%"
    },
    embeddedBox: {
        position: "relative",
        overflow: "hidden",
        paddingTop: "56.25%",

    }
}));

export const MovieTrailer = (props) => {
    const classes = useStyles();
    const { trailerUrl } = props;
    return (

        <Container direction="column" >
            <Box className={classes.embeddedBox} align="center" justify="center" >
                {
                    <iframe className={classes.embeddedIframe} src={trailerUrl} />
                }
            </Box>
            <Box align="center">
                <Link to="/">
                    <Button variant="contained" color="primary" >BACK TO MOVIES</Button>
                </Link>
            </Box>
        </Container>
    );
}


