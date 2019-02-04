import uuid from 'uuid';
import database from '../firebase/firebase';
import { storage } from '../firebase/firebase';

//action generators for projects

//ADD_PROJECT - action
export const addProject = (project) => {
    console.log("add project:",project);
    return {
        type: 'ADD_PROJECT',
        project
    };
};
    

export const startAddProject = (projectData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            title = '',
            image
        } = projectData;

        const project = { 
            title,
            description,
            image
        };

        console.log(project.image);

        const imageId = uuid();

        const uploadImage = storage.ref('images').child(imageId.toString()).put(project.image);

        uploadImage.on('state_changed', (snapshot)=>(null), (error)=>(console.log(error)), () => {
            storage.ref('images').child(imageId).getDownloadURL().then((url)=>{
                database.ref('projects').push({
                    ...project,
                    image: url,
                    imageStorageRef: imageId
                }).then((ref) => {
                    dispatch(addProject({
                        id: ref.key,
                        ...project,
                        image: url,
                        imageStorageRef: imageId
                    }));
                });
            });
        });
    };
};

//REMOVE_PROJECT

export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const startRemoveProject = ({ id } = {}) => {
    return (dispatch) => {
        let imageStorageRef = null;
        database.ref('projects').child(id).once('value').then((snapshot)=>{
            imageStorageRef = snapshot.val().imageStorageRef;
            console.log(imageStorageRef);

            return database.ref('projects').child(id).remove().then(() => {
                storage.ref('images').child(imageStorageRef).delete().then(()=>{
                    console.log("image deleted successfully");
                }).catch((e)=>{
                    console.log("image deletion failed with", e);
                });
                dispatch(removeProject({id}));
            });
        });
    };
};

//EDIT_EXPENSE

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

export const startEditProject = (id, updates) => {
    return (dispatch) => {
        return database.ref('projects').child(id).update(updates).then(() => {
            dispatch(editProject(id, updates));
            console.log("editing occurred");
        });
    };
};

//SET_PROJECTS

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const startSetProjects = (projectData = {}) => {
    return (dispatch) => {
        return database.ref('projects').once('value').then((snapshot) => {
            const projects = [];

            snapshot.forEach((childSnapshot)=>{
                projects.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setProjects(projects));
        });
    };
};