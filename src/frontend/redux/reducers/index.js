import darkModeReducer from './darkMode';
import menuVisibilityReducer from './isMenuVisible'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    darkMode: darkModeReducer, 
    menuVisible: menuVisibilityReducer
})

export default allReducers;