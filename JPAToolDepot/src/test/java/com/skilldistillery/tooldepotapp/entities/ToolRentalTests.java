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

class ToolRentalTests {
	private static EntityManagerFactory emf; 
	private static EntityManager em;
	private static ToolRental rental;
	
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
		rental = em.find(ToolRental.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em = null;
		rental = null;
	}

	@Test
	@DisplayName("Test ToolRental Entity")
	void test1() {
		assertEquals("SOME TOTALCOST NAME", rental.getTotalCost());
	}
	
	@Test
	@DisplayName("Test User Mapping")
	void test2() {
		assertEquals("SOME FIRST NAME", rental.getRenter().getFirstName());
	}
	
	@Test
	@DisplayName("Test Tool Mapping")
	void test3() {
		assertEquals("SOME TOOL NAME", rental.getTool().getName());
	}
	
	@Test
	@DisplayName("Test RevewOfLender Mapping")
	void test4() {
		assertEquals("SOME RENTER RATING", rental.getLenderReview().getRenterRating());
	}
	
	@Test
	@DisplayName("Test RevewOfLender Mapping")
	void test5() {
		assertEquals("SOME TOOL RATING", rental.getRenterReview().getToolRating());
	}
	
}
