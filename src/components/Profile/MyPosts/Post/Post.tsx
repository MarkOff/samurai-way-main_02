import React, {FC, useState, MouseEvent} from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../types/commonTypes';
import like from 'avatars/1eeed36fb023d446c083f8b02f712075.png'
import dislike from 'avatars/w450h4001385925290Love.png'


export const Post: FC<PostType> = ({counterLike, message, id}) => {

    const [likes, setLikes] = useState(counterLike)
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (e: any) => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(prevState => prevState - 1);
        } else {
            setIsLiked(true);
            setLikes(prevState => prevState + 1);
        }
    }



    return (
        <div className={s.posts}>
            <img src="https://i.pinimg.com/736x/1e/33/a5/1e33a5fad800ee8e782ad87e63169187.jpg"/>
            {message}
            <div>
                <img className={isLiked ? s.like : s.dislike} onClick={handleLikeClick}
                     src={isLiked ? dislike : like} alt=""/>
                <span> like's {likes}</span>
            </div>
        </div>
    );
};

