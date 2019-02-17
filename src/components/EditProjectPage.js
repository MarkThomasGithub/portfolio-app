import React from 'react';
import ProjectForm from './ProjectForm';
import { connect } from 'react-redux';
import { startEditProject, addProject } from '../actions/projects';

const EditProjectPage = (props) => {
    console.log(props);
    //Editing project with id of {props.match.params.id}
    return (
        <div className="editProject_input">
            <h2>Edit Project</h2>
            <ProjectForm 
                project = {props.project}
                onSubmit = {
                    (project) => {
                        if(props.project.images === project.images){
                            props.dispatch(startEditProject(props.match.params.id, project, false));
                        } 
                        else{
                            props.dispatch(startEditProject(props.match.params.id, project, true));
                        }
                        //props.dispatch(editProject(props.match.params.id, project));
                        //console.log('edited project: ', project);
                        props.history.push('/');
                    }
                }
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