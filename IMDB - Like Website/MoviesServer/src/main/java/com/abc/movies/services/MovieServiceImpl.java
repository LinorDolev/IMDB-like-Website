package com.abc.movies.services;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.abc.movies.dal.MovieDao;
import com.abc.movies.entities.Movie;

@Service
public class MovieServiceImpl implements MovieService {
	private MovieDao movieDao;

	@Value("${com.abc.movies.MaxNumOfMoviesToRetrieve}")
	private int maxNumOfMoviesToRetrieve;
	
	@Value("${com.abc.movies.categories}")
	private String[] categories;
	

	@Autowired
	public MovieServiceImpl(MovieDao movieDao) {
		setMovieDao(movieDao);
	}

	@Override
	public List<Movie> getMovies(String categoryFilter) {
		if (categoryFilter != null) {
			validateCategory(categoryFilter);
			return movieDao.findAll(maxNumOfMoviesToRetrieve, categoryFilter);
		}
		return movieDao.findAll(maxNumOfMoviesToRetrieve);
	}

	@Override
	public Movie addMovie(Movie movie) {
		if(movieDao.existsByTitle(movie.getTitle())) {
			throw new MovieAlreadyExistsException("Movie with title: " + movie.getTitle());
		}
		validateCategory(movie.getCategory());
		return movieDao.save(movie);
	}

	private void validateCategory(String category) {
		if(!Arrays.asList(categories).contains(category)) {
			throw new NoSuchMovieCategoryException("Category: " + category);
		}
	}
	
	public MovieDao getMovieDao() {
		return movieDao;
	}

	public void setMovieDao(MovieDao movieDao) {
		this.movieDao = movieDao;
	}

}
