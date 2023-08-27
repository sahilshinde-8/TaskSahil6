package com.aurionpro.test;

import com.aurionpro.model.Builder;
import com.aurionpro.model.GuitarSpec;
import com.aurionpro.model.Inventory;
import com.aurionpro.model.Type;
import com.aurionpro.model.Wood;

public class FindGuitarTester {
	public static void main(String args[]) {
		Inventory i = new Inventory();
		i.addGuitar("1", 10000, new GuitarSpec(Builder.FENDER, "FZX", Type.ELECTRIC, Wood.CEDAR, Wood.CEDAR, 3));
		i.addGuitar("2", 30000, new GuitarSpec(Builder.MARTIN, "Pluto", Type.ACOUSTIC, Wood.SITKA, Wood.ALDER, 7));
		i.addGuitar("3", 20000, new GuitarSpec(Builder.GIBSON, "GZX", Type.ACOUSTIC, Wood.SITKA, Wood.CEDAR, 6));
		System.out.println(i.getGuitars());
		System.out.println("************");
		System.out.println(i.getGuitarByID("3"));
		System.out.println("*************");
		GuitarSpec specs = new GuitarSpec(Builder.MARTIN, "Pluto", Type.ACOUSTIC, Wood.SITKA, Wood.ALDER, 7);
		System.out.println(i.searchGuitar(specs));
		
	}

}
