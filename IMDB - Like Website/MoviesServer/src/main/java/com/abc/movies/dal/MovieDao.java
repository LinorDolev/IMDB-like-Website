package com.abc.movies.dal;

import java.util.List;

import com.abc.movies.entities.*;


public interface MovieDao {
	List<Movie> findAll(int maxCount);
	
	List<Movie> findAll(int maxCount, String category);
	
	Movie save(Movie movie);
	
	Boolean existsByTitle(String title);
}
