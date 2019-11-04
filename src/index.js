import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { AlgorithmReducer } from './reducers/reducers'
import './index.css';
import App from './App';
import { mapStateToProps } from './App'
import { mapDispatchToProps } from './store/index'

const store = createStore(AlgorithmReducer);
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root'));
