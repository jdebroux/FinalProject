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

import com.skilldistillery.tooldepotapp.entities.User;
import com.skilldistillery.tooldepotapp.services.UserService;

@RestController
@CrossOrigin({ "*", "http://localhost:4242" })
@RequestMapping("api")
public class UserController {

	@Autowired
	private UserService svc;
	
	@GetMapping("user")
	public List<User> userList(Principal principal, HttpServletResponse resp) {
		List<User> allUsers = svc.findAllUsers(principal.getName());
		if (allUsers == null) {
			resp.setStatus(401);
		}
		return allUsers;
	}

	@GetMapping("user/{id}")
	public User getUser(@PathVariable("id") Integer id, HttpServletResponse resp, Principal principal) {
		User user = svc.findById(id, principal.getName());
		return user;
	}
	
	@GetMapping("user/{username}/role")
	public User getUserByUsername(@PathVariable(value="username") String username) {
		return svc.findByUsername(username);
	}

	@PostMapping("user")
	public User addUser(@RequestBody User user, HttpServletResponse resp, HttpServletRequest req, Principal principal) {
		try {
			svc.create(principal.getName(), user);
			if (user == null) {
				resp.setStatus(400);
			}else {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/");
			url.append(user.getId());
			resp.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return user;
	}

	@PutMapping("user/{id}")
	public User editUser(@PathVariable("id") Integer id, @RequestBody User user, HttpServletResponse resp,
			HttpServletResponse req, Principal principal) {
		try {
			
			user = svc.update(principal.getName(), id, user);
			if (user == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return user;
	}

	@DeleteMapping("user/{id}")
	public void deleteUser(@PathVariable("id") Integer id, HttpServletResponse resp, Principal principal) {
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
