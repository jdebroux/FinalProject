package com.skilldistillery.tooldepotapp.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tooldepotapp.entities.ReviewOfRenter;
import com.skilldistillery.tooldepotapp.services.ReviewOfRenterService;

@RestController
@CrossOrigin({ "*", "http://localhost:4242" })
@RequestMapping("api")
public class ReviewOfRenterController {

	@Autowired
	private ReviewOfRenterService reviewOfRenterSvc;

	@GetMapping("reviewOfRenter")
	public List<ReviewOfRenter> rentersReviewlist(HttpServletResponse resp) {
		List<ReviewOfRenter> rentersReview = reviewOfRenterSvc.findAllRentersReviews();
		return rentersReview;
	}
	
	@GetMapping("reviewOfRenter/{id}")
	public ReviewOfRenter getRentersReview(@PathVariable("id") int id, HttpServletResponse resp) {
		ReviewOfRenter renterReview = reviewOfRenterSvc.findById(id);
		return renterReview;
	}
	
	@PostMapping("reviewOfRenter/toolRental/{id}")
	public ReviewOfRenter addRenterReview(Principal principal, @PathVariable("id") Integer id, @RequestBody ReviewOfRenter renterReview, HttpServletResponse resp, HttpServletRequest req) {
		try {
			renterReview = reviewOfRenterSvc.create(renterReview, id);
			if (renterReview == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
				resp.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append(renterReview.getId());
				resp.setHeader("Location", url.toString());

			}
		} catch (Exception e) {
			renterReview = null;
			resp.setStatus(400);
			e.printStackTrace();
		}
		return renterReview;
	}
	
	@PutMapping("reviewOfRenter/{id}")
	public ReviewOfRenter editRenterReview(@PathVariable("id") Integer id, @RequestBody ReviewOfRenter reviewOfRenter, HttpServletResponse resp,
			HttpServletResponse req) {
		try {
			reviewOfRenter = reviewOfRenterSvc.update(id, reviewOfRenter);
			if (reviewOfRenter == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			reviewOfRenter = null;
			resp.setStatus(400);
			e.printStackTrace();
		}
		return reviewOfRenter;
	}
	
	@DeleteMapping("reviewOfRenter/{id}")
	public boolean destroyRenterReview(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Boolean success = reviewOfRenterSvc.delete(id);
		try {
			if (success) {
				resp.setStatus(204);
				return true;
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
		}
		return true;

	}
}
