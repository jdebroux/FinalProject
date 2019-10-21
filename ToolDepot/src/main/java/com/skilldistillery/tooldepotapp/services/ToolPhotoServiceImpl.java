package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.Tool;
import com.skilldistillery.tooldepotapp.entities.ToolPhoto;
import com.skilldistillery.tooldepotapp.repositories.ToolPhotoRepository;
import com.skilldistillery.tooldepotapp.repositories.ToolRepository;

@Service
public class ToolPhotoServiceImpl implements ToolPhotoService {

	@Autowired
	private ToolPhotoRepository photoRepo;
	@Autowired
	private ToolRepository toolRepo;
	
	@Override
	public ToolPhoto findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ToolPhoto> findAllPhotos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ToolPhoto update(int id, Tool tool) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ToolPhoto create(Tool tool, String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
