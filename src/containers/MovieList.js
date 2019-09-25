import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchMovies from '../actions/fetchMovies';
import MovieItem from '../components/MovieItem';
import { constructImageUrl } from '../helpers';
import { Container, Box, Button, Grid, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.fetchMore = this.fetchMore.bind(this);
    }

    fetchMore = (e) => {
        e.preventDefault();
        const { currentPage } = this.props;
        this.props.fetchMovies(currentPage);
    }

    componentDidMount() {
        const emptyMoviesArray = 0;
        const { currentPage, movieItems } = this.props;

        if (movieItems.length === emptyMoviesArray) {
            this.props.fetchMovies(currentPage);
        }
    }

    render() {
        const { history, movieItems } = this.props;

        return (
            <div style={{ marginTop: 20, padding: 30 }}>

                <Grid container spacing={1} justify="center">
                    {movieItems.length > 0 ?
                        movieItems.map(
                            movie => (
                                <Grid item key={movie.id}>

                                    <Card>

                                        <CardActionArea>
                                            <MovieItem key={movie.id} movieImageUrl={constructImageUrl(movie.backdrop_path)}
                                                movieId={movie.id} goToTrailer={this.goToMovieTrailer} name={movie.original_title} >
                                            </MovieItem>

                                            {/* <CardContent>
                                                <Typography color="white" gutterBottom variant="h5" component="h2">
                                                    {movie.original_title}
                                                </Typography>
                                            </CardContent> */}
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            )) : <p>...loading</p>}

                </Grid>
                <Box align="center">
                    <Button variant="contained" color="primary" marginTop="5%" onClick={this.fetchMore}>LOAD MORE</Button>
                </Box>


            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        movieItems: state.movies.movieItems,
        currentPage: state.movies.currentPage
    }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MovieList));