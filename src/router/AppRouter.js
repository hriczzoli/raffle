import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../components/Header';
import Home from '../components/Home/index';
import Login from '../components/Login/index';
import ToDo from '../components/ToDo/index';
import Profile from '../components/Profile/index';

export const history = createBrowserHistory();

const AppRouter = ({ user }) => {
    //Check if object is empty
    const isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }


    useEffect(() => {
        if (isEmpty(user)) {
            history.push('/')
        }
    }, [user])

    return (
        <Router history={history}>
            <div>
                <Header history={history}/>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/login" component={Login} history={history}/>
                    <Route path="/todo" component={ToDo} />
                    <Route path="/profile" component={Profile} history={history}/>
                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(AppRouter);