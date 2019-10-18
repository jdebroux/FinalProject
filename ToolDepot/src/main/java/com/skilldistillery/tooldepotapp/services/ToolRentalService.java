package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.ToolRental;

public interface ToolRentalService {

	ToolRental findById(int id, String username);
	
	List<ToolRental> findAllUsers(String name);

	ToolRental update(String username, int id, ToolRental toolRental);

	ToolRental create(String username, ToolRental toolRental);

	Boolean delete(int id);

}
