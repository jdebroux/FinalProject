package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.tooldepotapp.entities.ToolRental;
import com.skilldistillery.tooldepotapp.entities.User;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;

public class ToolRentalServiceImpl implements ToolRentalService {

	@Autowired
	private ToolRentalRepository repo;

	@Override
	public ToolRental findById(int id, String username) {
		Optional<ToolRental> toolRentalId = repo.findById(id);
		ToolRental toolRental = null;
		if (toolRentalId.isPresent()) {
			toolRental = toolRentalId.get();
		}
		return toolRental;
	}

	@Override
	public List<ToolRental> findAllToolRentals(String name) {
		List<ToolRental> allToolRentals = repo.findAll();
		ToolRental admin = null;
		for (ToolRental toolRental : allToolRentals) {
			if (name.equals(toolRental.getToolRentalname())) {
				admin = toolRental;
			}
		}
		if (admin.getRole().equals("admin")) {
			return allToolRentals;
		}
		return null;
	}

	@Override
	public ToolRental update(String username,int id, ToolRental toolRental) {
		ToolRental editToolRental = findById(id, username);

		if (editToolRental != null) {
			editToolRental.setTool(editToolRental.getTool());
			editToolRental.setCheckout(editToolRental.getCheckout());
			editToolRental.setReturned(editToolRental.getReturned());
			editToolRental.setTotalCost(editToolRental.getTotalCost());
		}
		return repo.saveAndFlush(editToolRental);
	}

	@Override
	public ToolRental create(String username, ToolRental toolRental) {
		try {
			toolRental.setUser(userRepo.findByUsername(username));
			repo.saveAndFlush(toolRental);
		} catch (Exception e) {
			toolRental = null;
			e.printStackTrace();
		}
		return toolRental;
	}

	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<ToolRental> findAllUsers(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User create(String username, ToolRental toolRental) {
		// TODO Auto-generated method stub
		return null;
	}

}
