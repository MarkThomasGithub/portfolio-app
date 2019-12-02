import uuid from 'uuid';
import database from '../firebase/firebase';
import { storage } from '../firebase/firebase';

//action generators for projects

//ADD_PROJECT - action
export const addProject = (project) => {
    //console.log("add project:",project);
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
            images
        } = projectData;

        const project = { 
            title,
            description,
            images
        };

        //console.log(project.images);

        const imageId = uuid();

        const refs = [];
        const storageRefs = [];

        let count = 0;

        //

        for(let i=0;i<project.images.length;i++){
            (function(imgStoreLazyRef){
                const upload = storage.ref('images').child(imgStoreLazyRef).put(project.images[i]).then( snapshot => {
                    var downloadURL = storage.ref('images').child(imgStoreLazyRef).getDownloadURL().then( ref => {
                        refs.push(ref);
                        count++;
                        database.ref('projects').child(imageId).update(
                            {
                                id: imageId,
                                ...project,
                                images: refs,
                            }
                        ).then(()=>{
                            if(count === Array.from(project.images).length){
                                //console.log("DISPATCHED: ", refs);
                                dispatch(addProject({
                                    id: imageId,
                                    ...project,
                                    images: refs,
                                }));
                            } 
                        });
                    });
                });
                storageRefs.push(imgStoreLazyRef);

                database.ref('projects').child(imageId).update(
                    {
                        imgStorages: storageRefs
                    });
            })(imageId.toString().concat("/"+(uuid().toString())))
        }
/*
            upload.on('state_changed', (snapshot)=>(null), (error)=>(console.log(error)), () => {
                imgStore.getDownloadURL().then((ref) =>{
                    refs.push(ref);
                    console.log("NOWTHIS: ", ref);
                    count++;
                    database.ref('projects').child(imageId).update(
                        {
                            id: imageId,
                            ...project,
                            images: refs
                        }
                    ).then(()=>{
                        if(count === Array.from(project.images).length){
                            console.log("DISPATCHED: ", refs);
                            dispatch(addProject({
                                id: imageId,
                                ...project,
                                images: refs
                            }));
                        } 
                    });
                });
            });
        } */

        //console.log("NOWTHIS", refs);
        

        //
        /*
        Array.from(project.images).forEach(img => {
            imgStore = storage.ref('images').child(imageId.toString()).child(uuid().toString());
            uploading = imgStore.put(img);

            uploading.on('state_changed', (snapshot)=>(null), (error)=>(console.log(error)), () => {
                imgStore.getDownloadURL().then((ref) =>{
                    refs.push(ref);
                    console.log("refs: ", refs);
                    count++;
                    database.ref('projects').child(imageId).update(
                        {
                            id: imageId,
                            ...project,
                            images: refs
                        }
                    ).then(()=>{
                        if(count === Array.from(project.images).length){
                            console.log("DISPATCHED: ", refs);
                            dispatch(addProject({
                                id: imageId,
                                ...project,
                                images: refs
                            }));
                        } 
                    });
                });
            });
        }); */
    };
};

//REMOVE_PROJECT

export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const startRemoveProject = ({ id } = {}) => {
    return (dispatch) => {
        let imageStorageRefs = [];
        database.ref('projects').child(id).once('value').then((snapshot)=>{

            imageStorageRefs = snapshot.val().imgStorages;
            //console.log(imageStorageRefs);

            return database.ref('projects').child(id).remove().then(() => {
                imageStorageRefs.forEach((uri)=>{
                    //console.log("URI: ",uri);
                    storage.ref('images').child(uri).delete().then(()=>{
                        //console.log("image deleted successfully");
                    }).catch((e)=>{
                        //console.log("image deletion failed with", e);
                    });
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

export const startEditProject = (id, updates, imgUpdated) => {
    return (dispatch) => {
        const imageId = uuid();
        //console.log("EDIT UPDATES", updates);

        if(imgUpdated){
            //console.log("IMGUPDATED");
            let imageStorageRefs = [];
            database.ref('projects').child(id).once('value').then((snapshot)=>{
    
                imageStorageRefs = snapshot.val().imgStorages;
                //console.log("IMGSTORAGEREFS", imageStorageRefs);
    
                return database.ref('projects').child(id).remove().then(() => {
                    imageStorageRefs.forEach((uri)=>{
                        //console.log("URI: ",uri);
                        storage.ref('images').child(uri).delete().then(()=>{
                            //console.log("image deleted successfully");
                        }).catch((e)=>{
                            //console.log("image deletion failed with", e);
                        });
                    });

                    const refs = [];
                    const storageRefs = [];
    
                    let count = 0;
    
                    //
    
                    for(let i=0;i<updates.images.length;i++){
                        (function(imgStoreLazyRef){
                            const upload = storage.ref('images').child(imgStoreLazyRef).put(updates.images[i]).then( snapshot => {
                                var downloadURL = storage.ref('images').child(imgStoreLazyRef).getDownloadURL().then( ref => {
                                    refs.push(ref);
                                    count++;
                                    database.ref('projects').child(id).update(
                                        {
                                            id: id,
                                            ...updates,
                                            images: refs,
                                        }
                                    ).then(()=>{
                                        if(count === Array.from(updates.images).length){
                                            //console.log("DISPATCHED: ", refs);
                                            dispatch(editProject(id, {
                                                id: id,
                                                ...updates,
                                                images: refs
                                            }));
                                        } 
                                    });
                                });
                            });
                            storageRefs.push(imgStoreLazyRef);
    
                            database.ref('projects').child(id).update(
                                {
                                    imgStorages: storageRefs
                                });
                        })(id.toString().concat("/"+(uuid().toString())))
                    }

                });
            });
            
        }
        else{
            dispatch(editProject(id, {
                id: id,
                ...updates,
            }));
            database.ref('projects').child(id).update({
                id: id,
                ...updates,
            });
        }


        /*
        old edit code in dispatch
        return database.ref('projects').child(id).update(updates).then(() => {
            dispatch(editProject(id, updates));
            console.log("editing occurred");
        });*/
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

            //console.log("SETPROJECTS", snapshot.val());
            snapshot.forEach((childSnapshot)=>{
                //console.log("CHILDSNAPSHOT", childSnapshot.val());
                projects.push({
                    ...childSnapshot.val()
                });
            });

            dispatch(setProjects(projects));
        });
    };
};