package com.skilldistillery.tooldepotapp.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
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
	private ToolService toolSvc;

	@GetMapping("tool")
	public List<Tool> toolList(HttpServletResponse resp) {
		List<Tool> allTools = toolSvc.findAllTools();
		return allTools;
	}

	@GetMapping("tool/user/{username}")
	public List<Tool> getUsersTools(@PathVariable("username") String username, HttpServletResponse resp) {
		List<Tool> tools = toolSvc.findByUserUsername(username);
		try {
			if (tools == null || tools.size() <= 0) {
				resp.setStatus(404);
			} else {
				resp.setStatus(200);
			}
		} catch (Exception e) {
			tools = null;
			resp.setStatus(400);
			e.printStackTrace();
		}
		for (Tool tool : tools) {
			System.out.println("******* in tool controller returning tools ******");
			if (tool instanceof Tool) {
				System.err.println(tool);
			}
		}
		return tools;
	}

	@GetMapping("tool/{id}")
	public Tool getTool(@PathVariable("id") int id, HttpServletResponse resp) {
		Tool tool = toolSvc.findById(id);
		return tool;
	}

	@GetMapping("tool/search/{searchTerm}")
	public List<Tool> getToolsBySearch(@PathVariable("searchTerm") String searchTerm, HttpServletResponse resp) {
		return toolSvc.findToolsBySearchTerm(searchTerm);
	}

	@PostMapping("tool")
	public Tool addTool(Principal principal, @RequestBody Tool tool, HttpServletResponse resp, HttpServletRequest req) {
		try {
			tool = toolSvc.create(tool, principal.getName());
			if (tool == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append(tool.getId());
				resp.setHeader("Location", url.toString());

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
			tool = toolSvc.update(id, tool);
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
	public boolean destroyTool(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Boolean success = toolSvc.delete(id);
		try {
			if (success) {
				resp.setStatus(204);
				return true;
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
		}
		return true;
	}

}
