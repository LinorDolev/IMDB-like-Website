import {ON_INPUT_CHANGED, ON_GET_MOVIES_FULFILLED, 
        ON_SELECT_MODAL, ON_ADD_MOVIE_FULFILLED, 
        CLEAR_FIELDS} from '../actions/MoviesActions';

const defaultFormState = { 
    Title: '', 
    Image: '', 
    Category: '', 
    Rate: '',
    show: false    
}

const defaultMoviesState = {
    movies: [],
    categoryFilter: null
}

export const MovieFormReducer = (state=defaultFormState , action) => {
    switch(action.type) {
        case ON_INPUT_CHANGED:
            state = {
                ...state,
                ...action.payload,
            }
            break;

    case ON_SELECT_MODAL:
            state = {
                ...state,
                show : !action.payload
            }
        break;

    case CLEAR_FIELDS:
        state = {
            ...state,
            Title: '', 
            Image: '', 
            Category: '', 
            Rate: 1,
        }
        break;
            default:
                return state;
    }
    return state;
}

export const MoviesReducer = (state=defaultMoviesState, action) =>
{
    switch(action.type) {
    case ON_GET_MOVIES_FULFILLED:
    case ON_ADD_MOVIE_FULFILLED:
        state = {
            ...state,
            movies: action.payload
        }
        break;

        default:
            return state;
    }
    return state;
}


