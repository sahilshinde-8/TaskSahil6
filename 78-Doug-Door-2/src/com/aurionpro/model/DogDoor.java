package com.aurionpro.model;

import java.util.Timer;
import java.util.TimerTask;

public class DogDoor {
	boolean open;
	public void open() {
		System.out.println("the dog door opens ");
		open = true;
		
		final Timer timer = new Timer();
		timer.schedule(new TimerTask(){
			public void run() {
				close();
				timer.cancel();
			}

		}, 5000);
	}
	
	private void close() {
		// TODO Auto-generated method stub
		System.out.println("The Dog door closes");
		open = false;
		
	}
	
//	public void pressButton() {
//		System.out.println("Pressing ");
//		if(door.isOpen()) {
//			door.close();
//		}
//		else {
//			door.open();
//		}
//			
//	}

}
