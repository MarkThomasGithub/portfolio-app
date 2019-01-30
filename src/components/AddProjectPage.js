import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { addProject } from '../actions/projects';

const AddProjectPage = (props) => (
    <div>
        <h3>Add Project</h3>
        <ProjectForm onSubmit={(project) => {
            props.dispatch(addProject(project));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(AddProjectPage);