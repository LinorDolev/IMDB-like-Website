package com.abc.movies.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.abc.movies.entities.Movie;

public interface MoviesAPI {
	
	@GetMapping(value = "/", produces=MediaType.APPLICATION_JSON_VALUE)
	List<Movie> getMovies();
	
	@GetMapping(value = "/{category}", produces=MediaType.APPLICATION_JSON_VALUE)
	List<Movie> getMovies(@PathVariable(name="category") String category);
	
	@CrossOrigin(origins="*")
	@PostMapping(path="", consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	Movie addMovie(@RequestBody Movie movie);
}
