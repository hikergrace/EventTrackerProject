package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;
import com.skilldistillery.repositories.WaterRepository;

@Service
public class WaterServiceImpl implements WaterService {
	
	@Autowired
	private WaterRepository waterRepo;

	@Override
	public List<Water> findByAmount(double amountinounces) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Water> index() {
		// TODO Auto-generated method stub
		return waterRepo.findAll();
	}

	

}
