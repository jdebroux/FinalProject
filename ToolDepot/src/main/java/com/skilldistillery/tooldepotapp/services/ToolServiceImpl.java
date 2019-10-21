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
	private ToolRepository toolRepo;
	@Autowired 
	private UserRepository userRepo;
	
	@Override
	public Tool findById(int id) {
		Optional<Tool> toolId = toolRepo.findById(id);
		Tool tool = null;
		if (toolId.isPresent()) {
			tool = toolId.get();
		}
		return tool;
	}

	@Override
	public List<Tool> findAllTools() {
		return toolRepo.findAll();
	}

	@Override
	public Tool update(int id, Tool tool) {
		Tool editTool = findById(id);
		userRepo.saveAndFlush(tool.getUser());
		if (editTool != null) {
			editTool.setName(tool.getName());
			editTool.setDescription(tool.getDescription());
			editTool.setType(tool.getType());
			editTool.setCostPerDay(tool.getCostPerDay());
			editTool.setAvailable(tool.isAvailable());
			editTool.setManufactureYear(tool.getManufactureYear());
			editTool.setCondition(tool.getCondition());
		}
		return toolRepo.saveAndFlush(editTool);
	}

	@Override
	public Tool create(Tool tool, String username) {
		tool.setUser(userRepo.findByUsername(username));
		return toolRepo.saveAndFlush(tool);
	}

	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (toolRepo.existsById(id)) {
			toolRepo.findById(id).get().setUser(null);
			toolRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<Tool> findToolsBySearchTerm(String searchTerm) {
		return toolRepo.findToolsContainingSearchTerm(searchTerm);
	}

}
