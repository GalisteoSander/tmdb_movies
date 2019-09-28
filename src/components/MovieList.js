import React from "react";
import { MovieItem } from './MovieItem';
import { Spinner } from './Spinner';
import { constructUrlOfMovieImage } from '../helpers';
import { makeStyles, Grid } from "@material-ui/core";
import { ErrorSnackbar } from './ErrorSnackbar';


const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    listDiv: {
        marginTop: '20px',
        padding: '30'
    },

    margin: {
        margin: theme.spacing(2),
    },
}));

export const MovieList = (props) => {
    const classes = useStyles();
    const { movieItems, onGoToTrailerCLick, pending, handleScroll } = props;
    const emptyMovieList = movieItems.length === 0;
    const error = props.error;

    const loadingOrErrorDisplay = () => {
        if (pending || emptyMovieList)
            return <Spinner className={classes.progress} color="secondary" />;
        else if (error)
            return <ErrorSnackbar variant="error" className={classes.margin} message={error} />
    }

    loadingOrErrorDisplay();
    return (
        <div className={classes.listDiv} >
            <Grid container spacing={1} justify="center">
                {movieItems.map(
                    (movie, index) => (
                        <Grid item key={movie.id}>
                            <MovieItem index={index} key={movie.id} movieImageUrl={constructUrlOfMovieImage(movie.backdrop_path)}
                                movieId={movie.id} onGoToTrailerCLick={onGoToTrailerCLick} movieTitle={movie.original_title} >
                            </MovieItem>
                        </Grid>
                    ))}
                {loadingOrErrorDisplay()}
            </Grid>
        </div>
    )
}




