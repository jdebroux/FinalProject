package com.skilldistillery.tooldepotapp.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.ToolRental;
import com.skilldistillery.tooldepotapp.entities.User;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;
import com.skilldistillery.tooldepotapp.repositories.UserRepository;

@Service
public class ToolRentalServiceImpl implements ToolRentalService {

	@Autowired
	private ToolRentalRepository trRepo;
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<ToolRental> getAllToolRentals() {
		return trRepo.findAll();
	}
	
	@Override
	public List<ToolRental> getToolRentalsByUsername(String username) {
		User user = userRepo.findByUsername(username);
		List<ToolRental> listOfAllTr = trRepo.findByRenterIdOrUserId(user.getId());
		List<ToolRental> listOfOwnedToolsAndRentals = new ArrayList<>();
		for (ToolRental tr: listOfAllTr) {
			if (tr.getTool().getUser().getUsername().equals(username)) {
				listOfOwnedToolsAndRentals.add(tr);
			}
		}
		listOfOwnedToolsAndRentals.add(new ToolRental());
		for (ToolRental tr: listOfAllTr) {
			if (tr.getRenter().getUsername().equals(username)) {
				listOfOwnedToolsAndRentals.add(tr);
			}
		}
		return listOfOwnedToolsAndRentals;
		
	}

	@Override
	public List<ToolRental> getToolRentalsByTool(int toolId) {
		return trRepo.findByToolId(toolId);
	}
	
	@Override
	public ToolRental create(String username, ToolRental toolRental) {
		try {
			toolRental.setRenter(userRepo.findByUsername(username));
			trRepo.saveAndFlush(toolRental);
		} catch (Exception e) {
			toolRental = null;
			e.printStackTrace();
		}
		return toolRental;
	}

	@Override
	public ToolRental update(String username,int id, ToolRental toolRental) {
//		ToolRental editToolRental = trRepo.findById(id);
//
//		if (editToolRental != null) {
//			editToolRental.setTool(editToolRental.getTool());
//			editToolRental.setCheckout(editToolRental.getCheckout());
//			editToolRental.setReturned(editToolRental.getReturned());
//			editToolRental.setTotalCost(editToolRental.getTotalCost());
//		}
//		return trRepo.saveAndFlush(editToolRental);
		return null;
	}


	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (trRepo.existsById(id)) {
			trRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}



}
