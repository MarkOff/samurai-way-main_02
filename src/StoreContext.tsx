import React, {ReactNode} from 'react';
import {StorePropsType} from './redux/redux-store';

export const StoreContext =React.createContext(null as StorePropsType | null)