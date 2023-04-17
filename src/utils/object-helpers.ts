import {UserType} from 'redux/redux-store';
import {type} from '@testing-library/user-event/dist/type';

type ObjPropNameType = "name" | "id" | "uniqueUrlName" | "photos" | "status" | "followed" | "location"


export const updateObjectInArray = <I = any>(item: I[], itemId: any, objPropName: keyof I, newObjProps: any) => {
    return item.map(el => {

        if (el[objPropName] === itemId) {
            return {...el, ...newObjProps}
        }
        return el
    })
}