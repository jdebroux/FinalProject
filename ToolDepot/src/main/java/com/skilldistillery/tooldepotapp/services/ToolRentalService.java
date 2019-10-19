package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.ToolRental;

public interface ToolRentalService {

	ToolRental findById(int id);
	
	List<ToolRental> getAllTools();

	ToolRental update(int id, ToolRental toolRental);

	ToolRental create(ToolRental toolRental, String username);

	Boolean delete(int id);

	ToolRental findById(int id, String username);
	
	List<ToolRental> index(int rid);

	ToolRental update(String username, int id, ToolRental toolRental);

	ToolRental create(String username, ToolRental toolRental);


}
