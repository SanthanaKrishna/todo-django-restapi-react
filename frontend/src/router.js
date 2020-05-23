import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoApp } from './components/todos';

export const RootRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={TodoApp} />
            </Switch>
        </Router>
    )
}