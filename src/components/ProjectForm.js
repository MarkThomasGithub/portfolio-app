import React from 'react';

export default class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.buttonTxt = props.project ? "Update Project" : "Add Project";
        
        this.state={
            title: props.project ? props.project.title : '',
            description: props.project ? props.project.description : '',
            image: props.project ? props.project.image : null
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
        const image = e.target.files[0];
        this.setState(()=>({image}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            description: this.state.description,
            image: this.state.image
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Title" 
                    autoFocus value={this.state.title} onChange={this.onTitleChange}/>
                    <br/>
                    <textarea type="text" placeholder="Description" 
                    value={this.state.description} onChange={this.onDescriptionChange}/>
                    <br/>
                    <input type="file" onChange={this.onImageChange} />
                    <br/>
                    <button>{this.buttonTxt}</button>
                </form>
                <img src={this.state.image} />
                {console.log("state", this.state)}
            </div>
        )
    }
}