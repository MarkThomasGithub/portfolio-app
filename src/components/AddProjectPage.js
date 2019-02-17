import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../actions/projects';

const AddProjectPage = (props) => (
    <div className="addProject_input">
        <h2>Add Project</h2>
        <ProjectForm onSubmit={(project) => {
            props.dispatch(startAddProject(project));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(AddProjectPage);