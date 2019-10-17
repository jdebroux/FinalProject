package com.skilldistillery.tooldepotapp.services;

import java.util.List;

import com.skilldistillery.tooldepotapp.entities.User;

public interface UserService {

	User findById(int id);

	List<User> findByUserName(String keyword);

	List<User> findAll();

	User update(User user, int id);

	User create(User user);

	Boolean delete(int id);

}
