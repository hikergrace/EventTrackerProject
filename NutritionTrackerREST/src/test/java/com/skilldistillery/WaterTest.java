package com.skilldistillery;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;
import com.skilldistillery.repositories.WaterRepository;



@RunWith(SpringRunner.class)
@SpringBootTest
public class WaterTest {
	@Autowired
	private WaterRepository waterRepo;
	
	@Test
	public void test_comment_findWaterByAmount(){
	Water result = waterRepo.findById(0).get();	
	assertEquals("12", result.getAmountinounces());
		
	}
	
}


