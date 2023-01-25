import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wallImg}>
                <img src="https://i.pinimg.com/originals/b0/47/48/b047482b30fe60adac38bbfe05fbe7f2.jpg"/>
            </div>
            <div className={s.avatar}>
                <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/3-steampunk-art-jofi-trazia.jpg"
                    height="150px" width="150px"/>
            </div>
        </div>
    );
};

