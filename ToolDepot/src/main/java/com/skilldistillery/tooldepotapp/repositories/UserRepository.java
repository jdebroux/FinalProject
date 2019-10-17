package com.skilldistillery.tooldepotapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tooldepotapp.entities.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	List<User> findByUsernameLike(String keyword);


}
