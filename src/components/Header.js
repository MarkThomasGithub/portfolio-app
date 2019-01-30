import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/about" activeClassName="is-active">About Me</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Project</NavLink>
    </header>
);

export default Header;