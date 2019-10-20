package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.ReviewOfLender;
import com.skilldistillery.tooldepotapp.repositories.ReviewOfLenderRepository;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;

@Service
public class ReviewOfLenderServiceImpl implements ReviewOfLenderService {

	@Autowired
	private ReviewOfLenderRepository lendReviewRepo;
	@Autowired 
	private ToolRentalRepository toolRentalRepo;
	@Autowired
	private ToolRentalService toolRentalSvc;
	
	@Override
	public ReviewOfLender findById(int id) {
		Optional<ReviewOfLender> reviewOfLenderOpt = lendReviewRepo.findById(id);
		ReviewOfLender reviewOfLender = null;
		if (reviewOfLenderOpt.isPresent()) {
			reviewOfLender = reviewOfLenderOpt.get();
		}
		return reviewOfLender;
	}

	@Override
	public List<ReviewOfLender> findAllLendersReviews() {
		return lendReviewRepo.findAll();
	}

	@Override
	public ReviewOfLender update(int id, ReviewOfLender reviewOfLender) {
		ReviewOfLender editReviewOfLender = findById(id);
		toolRentalRepo.saveAndFlush(reviewOfLender.getToolRental());
		if (editReviewOfLender != null) {
			editReviewOfLender.setRenterRating(reviewOfLender.getRenterRating());
			editReviewOfLender.setRenterReview(reviewOfLender.getRenterReview());
		}
		return lendReviewRepo.saveAndFlush(editReviewOfLender);
	}

	@Override
	public ReviewOfLender create(ReviewOfLender reviewOfLender, Integer id) {
		reviewOfLender.setToolRental(toolRentalSvc.findById(id));
		return lendReviewRepo.saveAndFlush(reviewOfLender);
	}

	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (lendReviewRepo.existsById(id)) {
			lendReviewRepo.findById(id).get().setToolRental(null);
			lendReviewRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}
}
