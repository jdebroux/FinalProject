package com.skilldistillery.tooldepotapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tooldepotapp.entities.ToolRental;

public interface ToolRentalRepository extends JpaRepository<ToolRental, Integer> {

}
