import { combineReducers } from 'redux';

import ExampleReducer from './example'
import FormReducer from './addFormData'


// Add as many as you like.
const reducers = combineReducers({
    example: ExampleReducer, // Change the name of this
    formReducer: FormReducer,
})

export default reducers;