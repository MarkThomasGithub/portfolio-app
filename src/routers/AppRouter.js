import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ProjectDashboardPage from '../components/ProjectDashboardPage';
import AddProjectPage from '../components/AddProjectPage';
import EditProjectPage from '../components/EditProjectPage';
import NotFoundPage from '../components/NotFoundPage';
import ViewProjectPage from '../components/ViewProjectPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ProjectDashboardPage} exact={true}/>
                <Route path="/create" component={AddProjectPage}/>
                <Route path="/projects/:id" component={ViewProjectPage}/> 
                <Route path="/edit/:id" component={EditProjectPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;