package com.aurionpro.model;


public abstract class FourWheeler extends Vehicle{
	
	protected static final int NO_OF_TYRES = 4; 
	protected int mileage;
	

	public FourWheeler(String companyName, String model, String color, int speed, int mileage) {
		super(companyName, model, color, speed);
		this.mileage = mileage;
	}


	public int getMileage() {
		return mileage;
	}


	public void setMileage(int mileage) {
		this.mileage = mileage;
	}
	
	
//
//	@Override
//	public int speedinkmperhr() {
//		// TODO Auto-generated method stub
//		return 0;
//	}
	
	
}
