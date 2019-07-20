import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
    Home,
    TicTacToe
} from './games'

export default () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/tic-tac-toe' component={TicTacToe} />
            </Switch>
        </div>
    )
}