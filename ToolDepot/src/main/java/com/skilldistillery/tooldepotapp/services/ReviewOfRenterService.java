package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.ReviewOfRenter;

public interface ReviewOfRenterService {

	ReviewOfRenter findById(int id);
	
	List<ReviewOfRenter> findAllRentersReviews();

	ReviewOfRenter update(int id, ReviewOfRenter reviewOfRenter);

	ReviewOfRenter create(ReviewOfRenter reviewOfRenter, Integer id);

	Boolean delete(int id);
}
