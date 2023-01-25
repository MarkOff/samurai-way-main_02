// type changeFilterACType = ReturnType<typeof changeFilterAC>


import {SidebarType} from './redux-store';

const initialState = {
    friends: [
        {
            id: '5',
            name: 'Kolya',
            ava: 'http://sun9-46.userapi.com/s/v1/if1/QLRXqMzrbGKJTuTFoOaZpgGD2dIYHcgy-BLYSXnmlGNgvJzqtIqc1iYKoCOxaZUyZshULg.jpg?size=200x200&quality=96&crop=20,20,564,564&ava=1'
        },
        {
            id: '6',
            name: 'Kostya',
            ava: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg'
        },
        {
            id: '7',
            name: 'Ivan',
            ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0017.jpg'
        },
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {


    return state
};

