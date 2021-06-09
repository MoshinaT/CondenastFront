import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import {  PrivateRoute, Alert } from '@/_components';
import { Account } from '@/account';

function App() {
    const { pathname } = useLocation();  
  

    useEffect(() => {
    }, []);

    return (
        <div >
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route path="/" component={Account} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export { App }; 