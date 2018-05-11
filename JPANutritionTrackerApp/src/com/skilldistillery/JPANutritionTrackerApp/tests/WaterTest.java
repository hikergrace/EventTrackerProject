package com.skilldistillery.JPANutritionTrackerApp.tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;

class WaterTest {

	private EntityManagerFactory emf;
	private EntityManager em; 
	
	
	
	@BeforeEach
	void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPANutritionTrackerApp");
		em = emf.createEntityManager();
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	void test_water_mapping() {
		Water w = em.find(Water.class, 1);
		System.out.println(em);
		System.out.println(w);
		assertEquals("12", w.getAmountinOunces());
	}
}
