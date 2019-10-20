package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.ReviewOfRenter;
import com.skilldistillery.tooldepotapp.repositories.ReviewOfRenterRepository;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;

@Service
public class ReviewOfRenterServiceImpl implements ReviewOfRenterService {

	@Autowired
	private ReviewOfRenterRepository rentReviewRepo;
	@Autowired 
	private ToolRentalRepository toolRentalRepo;
	@Autowired
	private ToolRentalService toolRentalSvc;
	
	@Override
	public ReviewOfRenter findById(int id) {
		Optional<ReviewOfRenter> reviewOfRenterOpt = rentReviewRepo.findById(id);
		ReviewOfRenter reviewOfRenter = null;
		if (reviewOfRenterOpt.isPresent()) {
			reviewOfRenter = reviewOfRenterOpt.get();
		}
		return reviewOfRenter;
	}

	@Override
	public List<ReviewOfRenter> findAllRentersReviews() {
			return rentReviewRepo.findAll();
		}

	@Override
	public ReviewOfRenter update(int id, ReviewOfRenter reviewOfRenter) {
		ReviewOfRenter editReviewOfRenter = findById(id);
		toolRentalRepo.saveAndFlush(reviewOfRenter.getToolRental());
		if (editReviewOfRenter != null) {
			editReviewOfRenter.setLenderRating(reviewOfRenter.getLenderRating());;
			editReviewOfRenter.setLenderReview(reviewOfRenter.getLenderReview());;
			editReviewOfRenter.setToolRating(reviewOfRenter.getToolRating());;
			editReviewOfRenter.setToolReview(reviewOfRenter.getToolReview());;
		}
		return rentReviewRepo.saveAndFlush(editReviewOfRenter);
	}

	@Override
	public ReviewOfRenter create(ReviewOfRenter reviewOfRenter, Integer id) {
		reviewOfRenter.setToolRental(toolRentalSvc.findById(id));
		return rentReviewRepo.saveAndFlush(reviewOfRenter);
	}

	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (rentReviewRepo.existsById(id)) {
			rentReviewRepo.findById(id).get().setToolRental(null);
			rentReviewRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}
}
