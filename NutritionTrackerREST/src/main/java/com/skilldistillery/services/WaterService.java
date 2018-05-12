package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;
import com.skilldistillery.repositories.WaterRepository;

public interface WaterService {
	
	

	public List<Water> index();
	public Water createWater(Water w);
	public Water updateWater(int id, Water w);
//	public Water replaceWater(int id, Water w);
	public boolean deleteWater(int id);
	public Water show(int id);
	

}
