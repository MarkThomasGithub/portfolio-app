import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addProject } from './actions/projects'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addProject({ title: 'Project 1', description: 'this is the first project'}));
store.dispatch(addProject({ title: 'Project 2', description: 'this is the two project' }));

const state = store.getState();

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />  
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
