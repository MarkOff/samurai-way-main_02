import React from 'react';
import './App.css';
import {Navbar} from 'components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {News} from 'components/News/News';
import {Music} from 'components/Music/Music';
import {Settings} from 'components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from 'components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from 'redux/app-reducer';
import {AppStateType} from 'redux/redux-store';
import {Preloader} from 'components/common/Preloader/Preloader';
import {withSuspense} from 'hok/withSuspense';


const ProfileContainer = React.lazy(() => import('components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('components/Dialogs/DialogsContainer'))




export class App extends React.Component<AppPropsType> {
    componentDidMount() {
        // this.props.setToggleIsFetch(true)
        this.props.authMe()

    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-contents">
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialog" render={withSuspense(DialogsContainer)}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/login" render={() => <LoginContainer/>}/>


                </div>
            </div>

        );
    }
}


type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    authMe: () => void
}

type AppPropsType  = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized,
    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    authMe: initializeApp,
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)) (App);








