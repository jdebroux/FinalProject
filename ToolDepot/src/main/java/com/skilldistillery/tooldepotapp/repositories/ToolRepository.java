package com.skilldistillery.tooldepotapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tooldepotapp.entities.Tool;

public interface ToolRepository extends JpaRepository<Tool, Integer>{

}
