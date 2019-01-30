import React from 'react';

export default class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.buttonTxt = props.project ? "Update Project" : "Add Project";
        
        this.state={
            title: props.project ? props.project.title : '',
            description: props.project ? props.project.description : ''
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
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            description: this.state.description
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Title" 
                    autoFocus value={this.state.title} onChange={this.onTitleChange}/>
                    <input type="text" placeholder="Description" 
                    value={this.state.description} onChange={this.onDescriptionChange}/>
                    <button>{this.buttonTxt}</button>
                </form>
            </div>
        )
    }
}