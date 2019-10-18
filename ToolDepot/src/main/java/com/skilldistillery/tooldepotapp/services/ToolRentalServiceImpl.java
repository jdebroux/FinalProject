package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.tooldepotapp.entities.ToolRental;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;
import com.skilldistillery.tooldepotapp.repositories.UserRepository;

public class ToolRentalServiceImpl implements ToolRentalService {

	@Autowired
	private ToolRentalRepository repo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public ToolRental findById(int id, String username) {
		Optional<ToolRental> toolRentalId = repo.findById(id);
		ToolRental toolRental = null;
		if (toolRentalId.isPresent()) {
			toolRental = toolRentalId.get();
		}
		return toolRental;
	}
//	Finds all tool rentals associated with renter id
	@Override
	public List<ToolRental> index(int rid) {
		return repo.findByRenter_Id(rid);
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
			toolRental.setRenter(userRepo.findByUsername(username));
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

}
