import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';
import { withRouter } from 'react-router';
import ProgressiveImage from 'react-progressive-image';
import '../index.css';


const ProjectListItem = ({ dispatch, id, description, title, images, history }) => (
    <div className="project" onClick={()=>{history.push('/projects/'.concat(id))}}>
        <Link className="project__title" to={'/projects/'.concat(id)}><h3>{title}</h3></Link>
        <p>{description.substring(0,37)}...</p>

        <ProgressiveImage src={images[0]} placeholder="/images/loading.jpg">
            {(src, loading) => (
                <img src={src} alt="an image" />
            )}
        </ProgressiveImage>
        <br/>
    </div>
);

export default withRouter(connect()(ProjectListItem));