package com.abc.movies.services;

import java.util.List;

import com.abc.movies.entities.*;

public interface MovieService {
	 List<Movie> getMovies(String categoryFilter);
	 
     Movie addMovie(Movie movie);
}
