import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../actions/projects';

const AddProjectPage = (props) => (
    <div>
        <h3>Add Project</h3>
        <ProjectForm onSubmit={(project) => {
            props.dispatch(startAddProject(project));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(AddProjectPage);