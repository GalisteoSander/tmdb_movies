import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTrailerYoutubeKeys from '../actions/fetchTrailerKeys';
import { clearTrailers } from '../actions/actions'
import { withRouter } from 'react-router-dom';
import { Container, Box, Button } from "@material-ui/core";
import { selectRandomVideo } from '../helpers';


class MovieTrailer extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(dispatch) {
        let a = this.props.history;
        let b = this.props.match.params.movieId;
        console.log(this.props.match);
        this.props.dispatch(fetchTrailerYoutubeKeys(this.props.match.params.movieId));
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'CLEAR_TRAILERS' })
        console.log(this.props.match);
    }



    render(disp) {
        return (
            <Container direction="column" >
                <Box align="center" position="relative"
                    overflow="hidden" paddingTop="56.25%" justify="center">
                    {this.props.keys && this.props.keys.length > 0 ?
                        <iframe style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            marginLeft: "10%",
                            width: "80%",
                            height: "80%"
                        }}
                            //¿Change to display in carousel?
                            src={`https://www.youtube.com/embed/${selectRandomVideo(this.props.keys)}`}
                        /> : <p>...loading</p>}
                </Box>
                <Box align="center">
                    <Link to="/">
                        <Button variant="contained" color="primary" marginTop="5%" >GO TO MOVIES</Button>
                    </Link>
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        keys: state.keys.keys
    }
}

export default withRouter(connect(mapStateToProps, null)(MovieTrailer));