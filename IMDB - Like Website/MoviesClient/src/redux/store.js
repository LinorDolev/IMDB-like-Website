import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {MoviesReducer, MovieFormReducer} from "./reducers/MoviesReducer";

//const STATE_FROM_SERVER = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    combineReducers({
        movieForm: MovieFormReducer,
        movies: MoviesReducer
    }),
    {},
    applyMiddleware(logger, promise));

export default store;
