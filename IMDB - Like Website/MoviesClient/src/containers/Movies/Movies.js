import React,{Component} from 'react';
import {FlexboxGrid, SelectPicker, Loader} from 'rsuite';
import {connect} from 'react-redux';
import {onGetMovies} from '../../redux/actions/MoviesActions';

import CATEGORIES from '../../common/Categories';
import MovieFormModal from '../../containers/MovieFormModal/MovieFormModal';
import Movie from '../../components/Movie/Movie';
import './Movies.css';

class Movies extends Component{
    componentDidMount(){
        this.props.onGetMovies(this.props.movies.categoryFilter);
    }

    toMovieView(movie, index){
        return (
            <FlexboxGrid.Item className='FlexGridItem' key={index}>
                <Movie movie={movie}/>
            </FlexboxGrid.Item>
        )
    }

    render(props){
        const loader = <Loader className='Loader' inverse size='lg' center  content='Loading Movies...'/>
        const {onGetMovies, movies} = this.props;
        const moviesViews =  movies.movies !== null && movies.movies !== undefined && Array.isArray(movies.movies) 
                            ? movies.movies.map(this.toMovieView) : loader;


        return(
            <div>
                <div className='Container'>
                    <h1 className='Title'>Top 10 Movies by ABC</h1>
                    <hr/>
                    <SelectPicker data={CATEGORIES}
                                  style={{width: '54%'}}
                                  onSelect={(categoryFilter)=> onGetMovies(categoryFilter)}
                                  onClean={()=> onGetMovies(null)}>
                    </SelectPicker>      
                    <MovieFormModal/>
                </div>
                <br/>
                <div className='MoviesContainer'>
                    <FlexboxGrid>
                        {moviesViews}
                    </FlexboxGrid>
                </div>      
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        movies: state.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onGetMovies: (categoryFilter) => {
            dispatch(onGetMovies(categoryFilter));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);