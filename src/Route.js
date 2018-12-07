import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../src/component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

const route=(
    <Switch>
        <Route path='/' component={Dashboard}exact/>
        <Route path='/wizard' component={Wizard}/>
               
    </Switch>
)

export default route;