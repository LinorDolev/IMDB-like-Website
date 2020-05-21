package com.abc.movies.dal;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.abc.movies.entities.Movie;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate;
import com.amazonaws.services.dynamodbv2.model.ConditionalOperator;
import com.amazonaws.services.dynamodbv2.model.QueryRequest;
import com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;

@Component
public class DynamoDBMovieDao implements MovieDao {
	private static AmazonDynamoDB amazonDynamoDB;
	private DynamoDBMapper movieMapper;

	private DynamoDBMovieDao() {
		amazonDynamoDB = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.US_WEST_2).build();
		movieMapper = new DynamoDBMapper(amazonDynamoDB);
	}
	
	
	@Override
	public List<Movie> findAll(int maxCount){
		DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
				.withLimit(maxCount);
		
		return movieMapper.scan(Movie.class, scanExpression);
	}
	
	@Override
	public List<Movie> findAll(int maxCount, String category){
		HashMap<String, AttributeValue> eav = new HashMap<String, AttributeValue>();
		eav.put(":v1", new AttributeValue().withS(category));
		 
		DynamoDBScanExpression expression = new DynamoDBScanExpression()
				.withLimit(maxCount)
				.withFilterExpression("Category = :v1")
				.withExpressionAttributeValues(eav);
		return movieMapper.scan(Movie.class, expression);
	}

	@Override
	public Movie save(Movie movie) {
		 movieMapper.save(movie);
		 return movie;
	}

	@Override
	public Boolean existsByTitle(String title) {
		return movieMapper.load(Movie.class, title) != null;
	}

}
