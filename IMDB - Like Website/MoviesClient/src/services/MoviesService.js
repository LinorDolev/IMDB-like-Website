import {Alert} from 'rsuite';

const BASE_URL = 'http://localhost:5000/api';
const ALERT_TIME_MILLIS = 5000;

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin':'http://localhost:3000',
    'Access-Control-Allow-Methods' :'*'
};


class MoviesService {

    static getMovies(categoryFilter){
        categoryFilter = categoryFilter === null? '' : categoryFilter;
        const URL = `${BASE_URL}/Movies/${categoryFilter}`;
        return fetch(URL, {
            method: 'GET',
            headers: headers
        }).then((response) => {
            return response.json();
        }).catch(error => Alert.error("Could not load movies.", ALERT_TIME_MILLIS));
    }

    static addMovie(movie){
        const URL = `${BASE_URL}/Movies`;
        const {Title, Category, Image, Rate} = movie;
        return fetch(URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                Title, Category, Image, Rate
            })
        }).then(response => {
            console.log(response)
            if(!response.ok){
                Alert.error(response.message, ALERT_TIME_MILLIS)
            }
           return response.json()
        })
        .catch(error => { Alert.error("The movie already exist.", ALERT_TIME_MILLIS)
            return []
        });
    }
}
export default MoviesService;