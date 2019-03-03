import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.secretApiKey,
    authDomain: "portfolio-app-1111f.firebaseapp.com",
    databaseURL: "https://portfolio-app-1111f.firebaseio.com",
    projectId: "portfolio-app-1111f",
    storageBucket: "portfolio-app-1111f.appspot.com",
    messagingSenderId: "398516534755"
};

firebase.initializeApp(config);

const database = firebase.database();

const storage = firebase.storage();

const auth = firebase.auth();

export const getCurrentUser = () =>{
    return firebase.auth().currentUser.email;    
}

export { storage, firebase, auth, database as default };

// //child_removed subscriber
// database.ref('projects').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed subscriber
// database.ref('projects').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added subscriber
// database.ref('projects').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('projects').push({
//     title: "Project 1",
//     description: "This is the first project",
// });

// database.ref('projects').push({
//     title: "Project 2",
//     description: "This is the second project",
// });

// database.ref('projects').on('value', (snapshot) => {
//     const projects = [];

//     snapshot.forEach((childSnapshot) => {
//         projects.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
// });