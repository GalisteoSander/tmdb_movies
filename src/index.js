import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import { rootReducer } from './reducers/index';
import { Router, Route } from 'react-router-dom';
import history from './history';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById('root')
)
export default store;