
import Types from './types';

// GET DATA EXAMPLE ==
export const addFormData = (data) => async dispatch => {
   
    try {
        dispatch(setFormDataLoading());
    
        dispatch({
            type: Types.ADD_FORM_DATA,
            payload: data
        })
     
        dispatch(getFormDataComplete()); 

    } catch(err) {
        console.log('error creating place:', err)

        // RUN FAIL ACTION ----
        dispatch(getFormDataFailed(err))
    }
}

// Get DATA Complete
export const getFormDataComplete = () => {
    return {
        type: Types.COMPLETE_ADD_FORM_DATA,
    }
}

// Get DATA Failed
export const getFormDataFailed = (err) => {
    return {
        type: Types.FAILED_ADD_FORM_DATA,
        payload: err
    }
}


// Set Loading to True..
export const setFormDataLoading = () => {
    return {
        type: Types.SET_FORM_DATA_LOADING,
    }
}
