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
	public List<Water> index() {
		return waterRepo.findAll();
	}

	@Override
	public Water createWater(Water w) {
		System.out.println(w);
		return waterRepo.saveAndFlush(w);
	}

	@Override
	public Water updateWater(int id, Water w) {
		Water managedWater = waterRepo.findById(id).get();
		managedWater.setAmountinounces(w.getAmountinounces());
		return waterRepo.saveAndFlush(managedWater);
	}

	
	@Override
	public boolean deleteWater(int id) {
		try {
			waterRepo.deleteById(id);
			return true;
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		return false;	}

	@Override
	public Water show(int id) {
		return waterRepo.findById(id).get();
	}

}
