import React from 'react';

export default class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.buttonTxt = props.project ? "Update Project" : "Add Project";
        
        this.state={
            title: props.project ? props.project.title : '',
            description: props.project ? props.project.description : '',
            images: props.project ? props.project.images : null
        };
    }

    onTitleChange = (e) =>{
        const title = e.target.value;
        this.setState(()=>({title}));
    };
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onImageChange = (e) =>{
        const images = e.target.files;
        this.setState(()=>({images}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            description: this.state.description,
            images: this.state.images
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                    <input type="text" placeholder="Title"
                    autoFocus value={this.state.title} onChange={this.onTitleChange}/>
                    <br/>
                    <textarea type="text" placeholder="Description" rows="10"
                    value={this.state.description} onChange={this.onDescriptionChange}/>
                    <br/>
                    <input type="file" onChange={this.onImageChange} multiple="multiple"/>
                    <br/>
                    <button>{this.buttonTxt}</button>
                </form>
                {console.log("state", this.state)}
            </div>
        )
    }
}