package com.skilldistillery.tooldepotapp.controllers;

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
	public List<User> userList(HttpServletResponse resp) {
		List<User> users = svc.findAll();
		return users;
	}

	@GetMapping("user/{id}")
	public User getConcert(@PathVariable("id") Integer id, HttpServletResponse resp) {
		User user = svc.findById(id);
		return user;
	}

	@GetMapping("user/search/{keyword}")
	public List<User> searchKeyword(@PathVariable("keyword") String keyword, HttpServletResponse resp) {
		List<User> concert = svc.findByUserName(keyword);
		return concert;
	}

	@PostMapping("user")
	public User addUser(@RequestBody User user, HttpServletResponse resp, HttpServletRequest req) {
		try {
			svc.create(user);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			System.err.println(url);
			url.append("/");
			url.append(user.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return user;
	}

	@PutMapping("user/{id}")
	public User editUser(@PathVariable("id") Integer id, @RequestBody User user, HttpServletResponse resp,
			HttpServletResponse req) {
		try {
			user = svc.update(user, id);
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
	public void deleteUser(@PathVariable("id") Integer id, HttpServletResponse resp) {
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
