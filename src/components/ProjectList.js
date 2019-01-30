import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => (
    <div>
        <h1>Project List</h1>
        {props.projects.map((project) => {
            return <ProjectListItem key={project.id}{...project}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps)(ProjectList);