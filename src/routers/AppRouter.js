import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ProjectDashboardPage from '../components/ProjectDashboardPage';
import ProjectDashboardPageAdmin from '../components/ProjectDashboardPage-admin';
import AddProjectPage from '../components/AddProjectPage';
import EditProjectPage from '../components/EditProjectPage';
import NotFoundPage from '../components/NotFoundPage';
import ViewProjectPage from '../components/ViewProjectPage';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';
import HeaderAdmin from '../components/Header-admin';

import { firebase } from '../firebase/firebase';

const AppRouter = () => {
    if(firebase.auth().currentUser){
        //console.log("uid",firebase.auth().currentUser.uid);
        return (<BrowserRouter>
            <div id="app-box">
                <HeaderAdmin />
                <Switch>
                    <Route path="/" component={ProjectDashboardPageAdmin} exact={true} />
                    <Route path="/create" component={AddProjectPage} />
                    <Route path="/projects/:id" component={ViewProjectPage} /> 
                    <Route path="/edit/:id" component={EditProjectPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>);
    } else{
        return (<BrowserRouter>
            <div id="app-box">
                <Header />
                <Switch>
                    <Route path="/" component={ProjectDashboardPage} exact={true} />
                    <Route path="/projects/:id" component={ViewProjectPage} /> 
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>);
    }
};

export default AppRouter;