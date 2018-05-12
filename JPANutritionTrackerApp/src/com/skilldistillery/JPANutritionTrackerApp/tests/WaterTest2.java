package com.skilldistillery.JPANutritionTrackerApp.tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;

public class WaterTest2 {
	private EntityManagerFactory emf;
	private EntityManager em; 
	
	
	
	@Before
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPANutritionTrackerApp");
		em = emf.createEntityManager();
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
//	@Test
//	public void test_water_mapping() {
//		Water w = em.find(Water.class, 1);
//		System.out.println(em);
//		System.out.println(w);
//		assertEquals("12", w.getAmountinOunces());
	}

