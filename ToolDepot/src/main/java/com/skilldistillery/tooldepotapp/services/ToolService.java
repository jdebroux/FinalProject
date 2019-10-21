package com.skilldistillery.tooldepotapp.services;
import java.util.List;

import com.skilldistillery.tooldepotapp.entities.Tool;
import com.skilldistillery.tooldepotapp.entities.ToolPhoto;

public interface ToolService {

	Tool findById(int id);
	
	List<Tool> findAllTools();

	Tool update(int id, Tool tool);

	Tool create(Tool tool, String username);

	Boolean delete(int id);

	List<Tool> findToolsBySearchTerm(String searchTerm);
}
