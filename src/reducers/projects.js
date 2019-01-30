//projects reducer

const projectsReducerDefaultState = [];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_PROJECT': 
            return [
                ...state,
                action.project
            ];
        case 'REMOVE_PROJECT':
            return state.filter(({ id }) => action.id !== id);
        case 'EDIT_PROJECT':
            return state.map((project)=>{
                return project.id === action.id ?
                    {
                        ...project,
                        ...action.updates
                    }
                    : project;
            });
        default:
            return state;
    }
}

export default projectsReducer;