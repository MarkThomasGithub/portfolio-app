import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase/firebase';
import * as firebase from 'firebase';
import 'firebase/auth';

const Header = () => (
    <header id="app-header">
        <div>
            <a id="admin-button" onClick={() => {
                const password = prompt("Enter admin password for access:");
                    firebase.auth().signInWithEmailAndPassword("mark.e.thomas.1997@gmail.com", password).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        //console.log(error);
                      });
                    firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            // User is signed in.
                            var email = user.email;
                            //console.log("USER EMAIL: ", email);
                            window.location.reload();
                            // ...
                        } else {
                            // User is signed out.
                            // ...
                        }
                      });
            }}><u>Admin</u></a>           
            <h1>Portfolio</h1>
            <NavLink to="/" className="navlink" activeClassName="is-active" exact={true}><h3>Dashboard</h3></NavLink>
            <NavLink to="/about" className="navlink" activeClassName="is-active"><h3>About Me</h3></NavLink>
        </div>
    </header>
);

export default Header;