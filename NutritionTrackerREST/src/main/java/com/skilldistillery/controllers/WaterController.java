package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.JPANutritionTrackerApp.entities.Water;
import com.skilldistillery.services.WaterService;

@RestController
@RequestMapping("api")	
public class WaterController {

	
	@Autowired
	private WaterService waterService;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping(HttpServletRequest request, HttpServletResponse response) {
		response.setStatus(202);
		response.setHeader("Location", "http://localhost:8080/api/ping");
		return "pong";
	}
	
	@RequestMapping(path = "water", method = RequestMethod.GET)
	public List<Water> index() {
		return waterService.index();
	}
	
	@RequestMapping(path="water/{id}", method=RequestMethod.GET)
	public Water show(@PathVariable int id){
		return waterService.show(id);
	}
	
	@RequestMapping(path="water", method=RequestMethod.POST)
	public Water create(@RequestBody Water water){
		return waterService.createWater(water);
	}
	
	@RequestMapping(path="water/{id}", method=RequestMethod.PATCH)
	public Water update(@PathVariable int id, @RequestBody Water water){
		return waterService.updateWater(id, water);
	}
	
	@RequestMapping(path="water/{id}", method=RequestMethod.DELETE)
	public boolean delete(@PathVariable int id){
		return waterService.deleteWater(id);
	}

}
