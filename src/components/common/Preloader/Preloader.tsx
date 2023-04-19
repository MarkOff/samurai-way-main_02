import React from 'react';
import preloader from '../../../avatars/Bean Eater-1.1s-197px.svg';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div ><img className={s.positionPreloader} src={preloader}/></div>
    );
};

