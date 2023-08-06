package com.aurionpro.model;


public abstract class Vehicle {
	protected String model;
	protected String color;
	protected int speed;
	protected String companyName;
	
	public Vehicle(String companyName, String model, String color, int speed) {
		super();
		this.speed = speed;
		this.model = model;
		this.color = color;
		this.companyName = companyName;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	
//	public String speedinkmperhr() {
//		// TODO Auto-generated method stub
//		return "Car is moving at the speed of";
//	}


	public abstract String speedinkmperhr();
	
	
}
