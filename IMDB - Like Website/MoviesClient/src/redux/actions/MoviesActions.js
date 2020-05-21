import MoviesService from '../../services/MoviesService';

export const ON_INPUT_CHANGED = 'ON_INPUT_CHANGED';
export const ON_SUBMIT = 'ON_SUBMIT';
export const ON_ADD_MOVIE = 'ON_ADD_MOVIE';
export const ON_ADD_MOVIE_FULFILLED = `${ON_ADD_MOVIE}_FULFILLED`;
export const ON_GET_MOVIES = 'ON_GET_MOVIES';
export const ON_GET_MOVIES_FULFILLED = `${ON_GET_MOVIES}_FULFILLED`;
export const ON_SELECT_MODAL = 'ON_SELECT_MODAL';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

export function onInputChanged(event){
    return {
        type: ON_INPUT_CHANGED,
        payload: event
    }
}

export function onAddMovie(movie){
    return {
        type: ON_ADD_MOVIE,
        payload: MoviesService.addMovie(movie).then(() => MoviesService.getMovies(null))
    }
}

export function onGetMovies(categoryFilter){
    return {
        type: ON_GET_MOVIES,
        payload: MoviesService.getMovies(categoryFilter)
    }
}

export function onSelectModal(show){
    return {
        type: ON_SELECT_MODAL,
        payload: show
    }
}

export function clearFields(){
    return{
        type: CLEAR_FIELDS,
        payload: null
    }
}
