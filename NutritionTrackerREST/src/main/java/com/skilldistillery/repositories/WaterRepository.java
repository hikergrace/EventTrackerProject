package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;

public interface WaterRepository extends JpaRepository<Water, Integer> {

}
