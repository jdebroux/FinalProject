package com.skilldistillery.tooldepotapp.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tooldepotapp.entities.ToolRental;
import com.skilldistillery.tooldepotapp.repositories.UserRepository;
import com.skilldistillery.tooldepotapp.services.ToolRentalService;

@RestController
@CrossOrigin({ "*", "http://localhost:4242" })
@RequestMapping("api")
public class ToolRentalController {
	
	@Autowired
	private ToolRentalService trService;
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("toolRentals")
	public List<ToolRental> getAll(Principal principal, HttpServletResponse resp) {
		try {
			if (userRepo.findByUsername(principal.getName()).getRole().equals("admin")) {
				resp.setStatus(200);
				return trService.getAllTools();
			}
		} catch (Exception e) {
			resp.setStatus(401);
			e.printStackTrace();
		}
		return new ArrayList<ToolRental>();
	}
	
	@GetMapping("toolRental/{id}")
	public ToolRental findToolRentalById(@PathVariable int id, HttpServletResponse resp) {
		ToolRental tr = trService.findById(id);
		if (tr == null) {
			resp.setStatus(404);
			return null;
		} else {
			resp.setStatus(200);
			return tr;
		}
	}
	
//	@GetMapping("jrentals/{username}")
//	public List<ToolRental> getToolRentalsByUsername(@PathVariable String username, HttpServletResponse resp)
}
