package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.ToolRental;

public interface ToolRentalService {

	List<ToolRental> getAllToolRentals();

	List<ToolRental> getToolRentalsByUsername(String username);
	
	List<ToolRental> getToolRentalsByTool(int toolId);

	ToolRental create(String username, ToolRental toolRental);

	ToolRental update(String username, int id, ToolRental toolRental);
	
	Boolean delete(int id);



}
