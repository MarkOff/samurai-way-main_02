import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {selectIsAuth} from 'redux/selectors/auth.selectors';
import {Preloader} from 'components/common/Preloader/Preloader';







export function withSuspense<T>(Component: ComponentType<T>) {

    return (props: any) => {
         return <React.Suspense fallback={<Preloader />}> <Component {...props} /> </React.Suspense>
    }
};