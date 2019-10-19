package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.ToolRental;
import com.skilldistillery.tooldepotapp.repositories.ToolRentalRepository;

@Service
public class ToolRentalServiceImpl implements ToolRentalService {

	@Autowired
	private ToolRentalRepository trRepo;
	
	@Override
	public ToolRental findById(int id) {
		Optional<ToolRental> optTr = trRepo.findById(id);
		if (optTr.isPresent()) {
			return optTr.get();
		} else {
			return null;
		}
	}

	@Override
	public List<ToolRental> getAllTools() {
		return trRepo.findAll();
	}

	@Override
	public ToolRental update(int id, ToolRental toolRental) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ToolRental create(ToolRental toolRental, String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
