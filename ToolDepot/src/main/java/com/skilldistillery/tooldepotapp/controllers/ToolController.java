package com.skilldistillery.tooldepotapp.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.tooldepotapp.entities.Tool;
import com.skilldistillery.tooldepotapp.services.ToolService;

@RestController
@CrossOrigin({ "*", "http://localhost:4242" })
@RequestMapping("api")
public class ToolController {

	@Autowired
	private ToolService svc;

	@GetMapping("tool")
	public List<Tool> toolList(HttpServletResponse resp) {
		List<Tool> allTools = svc.findAllTools();
		return allTools;
	}

	@GetMapping("tool/{id}")
	public Tool getTool(@PathVariable("id") int id, HttpServletResponse resp) {
		Tool tool = svc.findById(id);
		return tool;
	}

	@PostMapping("tool/{id}")
	public Tool addTool(@PathVariable("id") Integer id, Tool tool, HttpServletResponse resp, HttpServletResponse req) {
		try {
			tool = svc.update(id, tool);
			if (tool == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return tool;
	}
	
	@PutMapping("tool/{id}")
	public Tool editTool(@PathVariable("id") Integer id, @RequestBody Tool tool, HttpServletResponse resp,
			HttpServletResponse req) {
		try {
			tool = svc.update(id, tool);
			if (tool == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return tool;
	}
	@DeleteMapping("tool/{id}")
	public void destroyTool(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Boolean success = svc.delete(id);
		try {
			if (success) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
		}

	}

}
