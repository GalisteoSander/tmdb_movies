import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as React from 'react';
import Header from '../components/Header'
import MovieList from './MovieList'
import MovieTrailer from './MovieTrailer'

const App = () => {
    return (<div>
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={MovieList}></Route>
            <Route path="/MovieTrailer/:movieId" component={MovieTrailer}></Route>
        </BrowserRouter>
    </div>
    )
};

export default App;