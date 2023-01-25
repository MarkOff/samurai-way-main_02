import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {RootActionsType, StatePropsType, StorePropsType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export type AppProps = {
    store: StorePropsType
    state: StatePropsType
    // dispatch: (action: RootActionsType ) => void
}


export const App = (props: AppProps) => {
    return (
        <div className="App">
            <Header/>
            <Navbar friend={props.state.sidebar}/>

            <div className="app-contents">
                <Route path="/profile" render={() =>
                    <Profile
                        store ={props.store}
                        // profilePage={props.state.profilePage}
                        // dispatch={props.dispatch}
                     />}
                />

                <Route path="/dialog" render={() =>
                    <DialogsContainer
                        store = {props.store}
                        // messagePage={props.state.messagesPage}
                        // dispatch={props.dispatch}
                        // newMessageText={props.state.messagesPage.newMessageText}
                    />}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

            </div>
        </div>

    );
}








