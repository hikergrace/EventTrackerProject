package com.skilldistillery.JPANutritionTrackerApp.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Water {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private double amountinOunces;
	
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	private Date date;

	
	
	// --------------- gets and sets -------------------
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public double getAmountinOunces() {
		return amountinOunces;
	}


	public void setAmountinOunces(double amountinOunces) {
		this.amountinOunces = amountinOunces;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}

	// ------------------- constructors -------------------
	public Water() {
		
	}

	public Water(int id, double amountinOunces, Date date) {
		super();
		this.id = id;
		this.amountinOunces = amountinOunces;
		this.date = date;
	}

	// ---------------------- toString -----------------------
	@Override
	public String toString() {
		return "Water [id=" + id + ", amountinOunces=" + amountinOunces + ", date=" + date + "]";
	}
	
	
	
	
	
	
}
