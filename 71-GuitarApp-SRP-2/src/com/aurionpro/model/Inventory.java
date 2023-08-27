package com.aurionpro.model;

import java.util.ArrayList;
import java.util.List;

public class Inventory {
	List<Guitar> guitars = new ArrayList<>();
	public void addGuitar(String serialNumber, double price, GuitarSpec spec) {
		Guitar newGuitar = new Guitar(serialNumber,  price,  spec);
		guitars.add(newGuitar);
	}
	public List<Guitar> getGuitars(){
		return guitars;
		
	}
	public Guitar getGuitarByID(String serialNumber) {
		for(Guitar guitar: guitars) {
			if(guitar.getSerialNumber().equalsIgnoreCase(serialNumber)) {
				return guitar;
			}
		}
		return null;
		
	}
	public Guitar searchGuitar(GuitarSpec spec) {
		//List <Guitar> guitarSearch = new ArrayList<>();
		for(Guitar guitar: guitars) {
			//System.out.println((guitar.getSpec()).equals(spec));
			if(guitar.getSpec().matches(spec)){
				return guitar;
			}
		}
		return null;
		
	}
	
}
