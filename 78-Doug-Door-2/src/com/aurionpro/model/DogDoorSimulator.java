package com.aurionpro.model;

public class DogDoorSimulator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DogDoor door = new DogDoor();
		BarkRecognizer recognizer = new BarkRecognizer(door);
		Remote remote = new Remote(door);
		
		System.out.println("Start Barking");
		recognizer.recognize("Woof");
		System.out.println("Went Out");
		
		try {
			Thread.currentThread().sleep(10000);
		} catch(InterruptedException e) {
			System.out.println("hes stuck outside");
		}
		
		System.out.println("Fido starts barking");
		recognizer.recognize("Woof");
		
		System.out.println("Fido back inside");
		
		

	}

}
