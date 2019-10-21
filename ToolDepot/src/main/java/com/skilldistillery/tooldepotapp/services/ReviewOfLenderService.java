package com.skilldistillery.tooldepotapp.services;

import com.skilldistillery.tooldepotapp.entities.ReviewOfLender;

public interface ReviewOfLenderService {

	ReviewOfLender findById(Integer TRid, Integer ROLid);
	
	ReviewOfLender findLendersReview(Integer TRid);

	ReviewOfLender update(Integer TRid, Integer ROLid, ReviewOfLender reviewOfLender);

	ReviewOfLender create(ReviewOfLender reviewOfLender, Integer id);

	Boolean delete(Integer TRid, Integer ROLid);
}
