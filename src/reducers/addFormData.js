import Types from '../actions/types';


const initialState = {
    formData: null,
    getFormErrs: '',
    getFormLoading: false,
    getFormComplete: false,
}

const AddFormData = (state = initialState, {type, payload}) => {
    switch (type) {
        case Types.SET_FORM_DATA_LOADING:
            return {
                ...state,
                getFormLoading: true
        }
        case Types.ADD_FORM_DATA:
            return {
                ...state,
                formData: payload
            }

        case Types.COMPLETE_ADD_FORM_DATA:
            return {
                ...state,
                getFormLoading: false,
                getFormComplete: true
            }

        case Types.FAILED_ADD_FORM_DATA:
            return {
                ...state,
                getFormLoading: false,
                getFormErrs: payload
            }

        default:
            return state;
    }
}

export default AddFormData;