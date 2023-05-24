import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {setFilter} from '../../../redux/users-reducer';


type Props = {
    filter: string
    setFilter: (filter: string) => void
}

export const Debounce: FC<Props> = ({filter,setFilter}) => {

    const [value, setValue] = useState(filter);
    const [timerId, setTimerId] = useState<number | undefined>(undefined);

    // Обработчик изменения значения фильтра
    const onChangeHandleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    useEffect(() => {
        clearTimeout(timerId);
        const setTimeoutFilteredId = window.setTimeout(() => {
            setFilter(value);
        }, 400);
        setTimerId(setTimeoutFilteredId);
    }, [value]);

    return (
        <input
            type="text"
            placeholder="search"
            value={value}
            onChange={onChangeHandleFilter}
        />
    );
};

