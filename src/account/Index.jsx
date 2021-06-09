import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { accountService } from '@/_services';
import {NewsDisplay} from './NewsDisplay';


function Account({ history, match }) {
    const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        if (accountService.userValue) {
            history.push('/');
        }
    }, []);

    return (
  
           
                    <div >
                        <Switch>
                            <Route path={`${path}`} component={NewsDisplay} />
                        </Switch>
                    </div>
               
        
    );
}

export { Account };