import { Route } from 'react-router-dom'

import * as React from 'react';
import Header from '../components/Header'
import MovieList from './MovieList'
import MovieTrailer from './MovieTrailer'
import TypoGraphy from '@material-ui/core/Typography'

const App = () => {
    return (<div>

        <Header>
            <TypoGraphy position="static" >ASDASDAS</TypoGraphy>
        </Header>
        <Route exact path="/" component={MovieList}></Route>
        <Route path="/MovieTrailer/:movieId" component={MovieTrailer}></Route>


    </div>
    )
};

export default App;