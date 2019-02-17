import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import { withRouter } from 'react-router';

const ProjectList = (props) => (
    <div className="projectList_title">
        <h2>Project List</h2>
        <div id="project-list">
            {props.projects.map((project) => {
                console.log("PROJECT: ", {...project});
            })}
            {props.projects.map((project) => {
                return <ProjectListItem key={project.id}{...project}/>
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    console.log("STATE ", state);
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps)(ProjectList);