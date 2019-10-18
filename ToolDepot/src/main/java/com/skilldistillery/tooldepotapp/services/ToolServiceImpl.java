package com.skilldistillery.tooldepotapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.tooldepotapp.entities.Tool;
import com.skilldistillery.tooldepotapp.repositories.ToolRepository;
import com.skilldistillery.tooldepotapp.repositories.UserRepository;

@Service
public class ToolServiceImpl implements ToolService {
	
	@Autowired
	private ToolRepository repo;
	@Autowired
	private UserRepository urep;
	
	@Override
	public Tool findById(int id) {
		Optional<Tool> toolId = repo.findById(id);
		Tool tool = null;
		if (toolId.isPresent()) {
			tool = toolId.get();
		}
		return tool;
	}

	@Override
	public List<Tool> findAllTools() {
		return repo.findAll();
	}

	@Override
	public Tool update(int id, Tool tool) {
		Tool editTool = findById(id);
		urep.saveAndFlush(tool.getUser());
		if (editTool != null) {
			editTool.setName(tool.getName());
			editTool.setDescription(tool.getDescription());
			editTool.setType(tool.getType());
			editTool.setCostPerDay(tool.getCostPerDay());
			editTool.setAvailable(tool.isAvailable());
			editTool.setManufactureYear(tool.getManufactureYear());
			editTool.setCondition(tool.getCondition());
		}
		return repo.saveAndFlush(editTool);
	}

	@Override
	public Tool create(Tool tool) {
		return repo.saveAndFlush(tool);
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
