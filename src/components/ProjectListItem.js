import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';
import { withRouter } from 'react-router';

const ProjectListItem = ({ dispatch, id, description, title, image, history }) => (
    <div className="project" onClick={()=>{history.push('/projects/'.concat(id))}}>
        <div className="close-button" onClick={(e)=>{
            e.stopPropagation();
            dispatch(startRemoveProject({id}));
        }}>X</div>
        <Link className="project__title" to={'/projects/'.concat(id)}><h3>{title}</h3></Link>
        <p>{description}</p>
        <img src={image}/>
        <br/>
        <button className="edit-button" onClick={(e)=>{
            e.stopPropagation();
            history.push('/edit/'.concat(id));
        }}>Edit
        </button>
    </div>
);

export default withRouter(connect()(ProjectListItem));