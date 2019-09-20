import { Router, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as React from 'react';
import Header from './Header'
import MovieList from './MovieList'
import MovieTrailer from './MovieTrailer'

const App = () => {
    return (<div>
        <BrowserRasasdasouter>
            <Header></Header>
            <Route exact path="/" component={MovieList}></Route>
            <Route path="/MovieTrailer/:movieId" component={MovieTrailer}></Route>
        </BrowserRouter>
    </div>
    )
};

export default App;