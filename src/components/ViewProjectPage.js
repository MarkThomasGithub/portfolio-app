import React from 'react';
import { connect } from 'react-redux';

const ViewProjectPage = (props) => {
    console.log(props);
    return (
        <div>
            Viewing project with id of {props.match.params.id}
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project)=>{
            return project.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(ViewProjectPage);