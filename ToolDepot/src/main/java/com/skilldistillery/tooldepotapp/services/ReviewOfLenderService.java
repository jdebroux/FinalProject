package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.ReviewOfLender;

public interface ReviewOfLenderService {

	ReviewOfLender findById(int id);
	
	List<ReviewOfLender> findAllLendersReviews();

	ReviewOfLender update(int id, ReviewOfLender reviewOfLender);

	ReviewOfLender create(ReviewOfLender reviewOfLender, Integer id);

	Boolean delete(int id);
}
