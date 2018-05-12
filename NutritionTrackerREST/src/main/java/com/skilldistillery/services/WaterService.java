package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;
import com.skilldistillery.repositories.WaterRepository;

public interface WaterService {
	
	
	public List<Water> findByAmount(double amountinounces);

	public List<Water> index();

	

}
