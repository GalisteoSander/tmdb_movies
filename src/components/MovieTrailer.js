
import React from 'react';
import { Container, makeStyles } from "@material-ui/core";
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
        paddingTop: '2px',
        width: "100%",
        height: "70%",
        borderStyle: 'hidden'
    },
    embeddedBox: {
        position: "relative",
        overflow: "hidden",
        paddingTop: "56.25%",
        marginLeft: '50px'
    },
    returnButton: {
        float: 'right',
        paddingTop: '5px',

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

    if (error) return <ErrorSnackbar variant="error" className={classes.margin} message={error} />
    return (<div>
        <div className={classes.backGround} test-attrib="movie-trailer">
            <Container direction="row" >
                <div align="left" className={classes.returnButton}>
                    <Link to="/">
                        <Fab disabled aria-label="delete" className={classes.fab}>
                            <CancelIcon color="secondary" />
                        </Fab>
                    </Link>
                </div>
                <div className={classes.embeddedBox}>
                    <iframe className={classes.embeddedIframe} src={trailerUrl} />
                </div>
            </Container>
        </div>
    </div >
    );
}


