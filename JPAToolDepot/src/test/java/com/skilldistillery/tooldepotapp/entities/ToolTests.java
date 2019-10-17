package com.skilldistillery.tooldepotapp.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ToolTests {
	private static EntityManagerFactory emf; 
	private static EntityManager em;
	private static Tool tool;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("ToolDepotPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf = null;
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		tool = em.find(Tool.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em = null;
		tool = null;
	}

	@Test
	@DisplayName("Test Tool Entity")
	void test1() {
		assertEquals("SOME TOOL NAME", tool.getName());
	}
	
	@Test
	@DisplayName("Test User Mapping")
	void test2() {
		assertEquals("SOME FIRST NAME", tool.getUser().getFirstName());
	}
	
	@Test
	@DisplayName("Test ToolPhoto Mapping")
	void test3() {
		assertNotNull(tool.getPhotos());
		assertEquals("SOME URL", tool.getPhotos().get(0).getPhotoUrl());
	}
	
	@Test
	@DisplayName("Test ToolRental Mapping")
	void test4() {
		assertNotNull(tool.getRentals());
		assertEquals("SOME FIRST NAME", tool.getRentals().get(0).getRenter().getFirstName());
	}
}
