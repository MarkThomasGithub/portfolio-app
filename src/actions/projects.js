import uuid from 'uuid';

//action generators for projects

//ADD_PROJECT - action
export const addProject = (
    {
        description = '', 
        title = ''
    } = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        description,
        title
    }
});

//REMOVE_PROJECT

export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

//EDIT_EXPENSE

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});