package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.Tool;
import com.skilldistillery.tooldepotapp.entities.ToolPhoto;

public interface ToolPhotoService {

	ToolPhoto findById(int id);
	
	List<ToolPhoto> findAllPhotos();

	ToolPhoto update(int id, Tool tool);

	ToolPhoto create(Tool tool, String username);

	Boolean delete(int id);
}
