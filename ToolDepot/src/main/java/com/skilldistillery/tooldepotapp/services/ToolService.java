package com.skilldistillery.tooldepotapp.services;
import java.util.List;

import com.skilldistillery.tooldepotapp.entities.Tool;

public interface ToolService {

	Tool findById(int id);
	
	List<Tool> findAllTools();

	Tool update(int id, Tool tool);

	Tool create(Tool tool);

	Boolean delete(int id);
	
}
