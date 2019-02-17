import React from 'react';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import ImageElement from './ImageElement';
import uuid from 'uuid';

const ViewProjectPage = (props) => {
    console.log(props);
    //Viewing project with id of {props.match.params.id}
    return (
        <div className="viewProject">
            <h3 className="project__title">{props.project.title}</h3>
            <p>{props.project.description}</p>
            <div className="ViewProject__imageGrid">

                {props.project.images.map((image) => {
                    return <ImageElement key={uuid().toString()}img={image}/>
                })}

            </div>
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