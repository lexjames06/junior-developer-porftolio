import darkModeReducer from './darkMode';
import menuVisibilityReducer from './isMenuVisible'
import kodflixDetailsReducer from './kodflixDetails'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    darkMode: darkModeReducer, 
    menuVisible: menuVisibilityReducer,
    kodflixDetailsVisible: kodflixDetailsReducer
})

export default allReducers;