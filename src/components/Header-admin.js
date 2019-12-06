import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase/firebase';
import * as firebase from 'firebase';
import 'firebase/auth';

const HeaderAdmin = () => (
    <header id="root-header">
        <div>
            <a id="admin-button" onClick={() => {
                firebase.auth().signOut();   
                window.location.reload();         
            }}><u>Sign out</u></a>           
            <h1>Portfolio</h1>
            <NavLink to="/" className="navlink" activeClassName="is-active" exact={true}><h3>Dashboard</h3></NavLink>
            <NavLink to="/about" className="navlink" activeClassName="is-active"><h3>About Me</h3></NavLink>
            <NavLink to="/create" className="navlink" activeClassName="is-active"><h3>Create Project</h3></NavLink>       
        </div>
    </header>
);

export default HeaderAdmin;