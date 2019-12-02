import React from 'react';
import { connect } from 'react-redux';
import ProjectListItemAdmin from './ProjectListItem-admin';
import { withRouter } from 'react-router';

const ProjectListAdmin = (props) => (
    <div className="projectList_title">
        <h2>Project List</h2>
        <div id="project-list">
            {props.projects.map((project) => {
                return <ProjectListItemAdmin key={project.id}{...project}/>
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    //console.log("STATE ", state);
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps)(ProjectListAdmin);