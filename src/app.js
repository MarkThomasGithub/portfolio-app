import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProjects } from './actions/projects'
import './firebase/firebase';

const store = configureStore();

class App extends React.Component {
  constructor(){
    super();
    store.dispatch(startSetProjects()).then(() => {
      this.setState({loaded: true});
    });
  }
  
  state = {
    loaded: false
  }

  render(){
    if(this.state.loaded){
      return (
        <Provider store={store}>
          <AppRouter />  
        </Provider>
      );
    }
    else{
      return <div>Loading...</div>;
    }
  }

}

export default App;
