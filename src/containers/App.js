import { Route } from 'react-router-dom'
import * as React from 'react';
import Header from '../components/Header'
import MovieListContainer from './MovieListContainer'
import MovieTrailerContainer from './MovieTrailerContainer'
import TypoGraphy from '@material-ui/core/Typography'

const App = () => {
    return (<div>

        <Header>
            <TypoGraphy position="static" ></TypoGraphy>
        </Header>
        <Route exact path="/" component={MovieListContainer}></Route>
        <Route path="/MovieTrailer/:movieId" component={MovieTrailerContainer}></Route>


    </div>
    )
};

export default App;