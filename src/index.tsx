import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {StatePropsType} from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {StoreContext} from './StoreContext';


let rerenderEntireTree = (state: StatePropsType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App
                    store={store}
                    state={state}
                    // dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>,
            document.getElementById('root')
        )
    )

}


rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});

