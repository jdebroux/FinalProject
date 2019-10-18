package com.skilldistillery.tooldepotapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.tooldepotapp.entities.ToolRental;

public interface ToolRentalRepository extends JpaRepository<ToolRental, Integer> {

	List<ToolRental> findByRenter_Id(int rid);
}
