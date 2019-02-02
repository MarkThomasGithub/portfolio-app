import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';

const ProjectListItem = ({ dispatch, id, description, title }) => (
    <div>
        <Link to={'/projects/'.concat(id)}><h3>{title}</h3></Link>
        <p>{description}</p>
        <button onClick={()=>{
            dispatch(startRemoveProject({id}));
        }}>Remove</button>
        <Link to={'/edit/'.concat(id)}>Edit</Link>
    </div>
);

export default connect()(ProjectListItem);