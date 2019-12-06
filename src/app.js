import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProjects } from './actions/projects'
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addProject({ title: 'Project 1', description: 'this is the first project'}));
// store.dispatch(addProject({ title: 'Project 2', description: 'this is the two project' }));

const state = store.getState();

//console.log(store.getState());

export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <AppRouter />  
            </Provider>
        );
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetProjects()).then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

