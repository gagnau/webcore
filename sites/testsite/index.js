import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App/App';
import * as reducers from './reducers';

const Index = () => {
    const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));
