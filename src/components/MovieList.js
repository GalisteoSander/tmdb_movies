import React, { Component } from "react";
import MovieItem from './MovieItem';
import { Spinner } from './Spinner';
import { constructUrlOfMovieImage } from '../helpers';
import { makeStyles, Box, Button, Grid, Card, CardActionArea } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    listDiv: {
        marginTop: '20px',
        padding: '30'
    }
}));

export const MovieList = (props) => {
    const classes = useStyles();
    const { movieItems, onGoToTrailerCLick, handleScroll } = props;

    return (

        <div className={classes.listDiv} >
            <Grid container spacing={1} justify="center">
                {movieItems && movieItems.length > 0 ?
                    movieItems.map(
                        movie => (
                            <Grid item key={movie.id}>
                                <Card>
                                    <CardActionArea>
                                        <MovieItem key={movie.id} movieImageUrl={constructUrlOfMovieImage(movie.backdrop_path)}
                                            movieId={movie.id} onGoToTrailerCLick={onGoToTrailerCLick} name={movie.original_title} >
                                        </MovieItem>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )) : <Spinner className={classes.progress} color="secondary" />}
            </Grid>
            {<Box align="center">
                <Button variant="contained" color="primary" onClick={handleScroll} marginTop="5%">LOAD MORE</Button>
            </Box>}
        </div>
    )

}

