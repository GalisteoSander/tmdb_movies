import * as React from 'react';
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2)
    }

}));

export const Spinner = () => {
    const classes = useStyles();
    return <CircularProgress className={classes.progress} color="secondary" />
}

