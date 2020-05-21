package com.abc.movies.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.abc.movies.entities.Movie;
import com.abc.movies.services.MovieService;


@CrossOrigin(origins="*")
@RestController
public class MoviesAPIImpl implements MoviesAPI {
	private MovieService movieService;
	
	@Override
	public List<Movie> getMovies() {
		return getMovies(null);
	}
	
	@Override
	public List<Movie> getMovies(String category) {
		return movieService.getMovies(category);
	}

	@Override
	public Movie addMovie(Movie movie) {
		return movieService.addMovie(movie);
	}


	@Autowired
	public void setMovieService(MovieService movieService) {
		this.movieService = movieService;
	}
}
