import React from 'react';
import ProjectForm from './ProjectForm';
import { connect } from 'react-redux';
import { editProject, addProject } from '../actions/projects';

const EditProjectPage = (props) => {
    console.log(props);
    return (
        <div>
            Editing project with id of {props.match.params.id}
            <ProjectForm 
                project={props.project}
                onSubmit={(project) => {
                props.dispatch(editProject(props.match.params.id, project));
                console.log('edited project: ', project);
                props.history.push('/');
            }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return{
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditProjectPage);