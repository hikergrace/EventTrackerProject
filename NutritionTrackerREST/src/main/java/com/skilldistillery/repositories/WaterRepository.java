package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;

public interface WaterRepository extends JpaRepository<Water, Integer> {
	List<Water> findById(int id);
	
}
