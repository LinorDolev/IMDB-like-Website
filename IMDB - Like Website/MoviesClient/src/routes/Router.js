import React from 'react';
import {Route, Switch} from 'react-router';

import Movies from '../containers/Movies/Movies';
import MovieForm from '../containers/MovieForm/MovieForm';

export default () =>
    <Switch>
    <Route exact path="/" component={Movies}/>
    <Route exact path="/add" component={MovieForm}/>
    </Switch>