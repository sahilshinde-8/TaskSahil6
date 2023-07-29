package assignments;

import java.util.Random;
import java.util.Scanner;

public class WordGuesser {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random random = new Random();
		int randomIndex = random.nextInt(15);
		String[] dictionary = {
				"Aurionpro", //0
				"TechLab", //1
				"Javascript", //2
				"Angular", //3
				"ReactJS", //4
				"DataBase", //5
				"Fabulous", //6
				"SpringBoot", //7
				"Arrogant", //8
				"Humanity", //9
				"Ideology", //10
				"Curiosity", //11
				"Aquatic", //12
				"Jupiter", //13
				"Language", //14
				"Programmer", //15
				};
		
		String randomWord = dictionary[randomIndex].toUpperCase();
		
//		String[] blankSpaces = new String[randomWord.length()];
		char[] blankSpaces = new char[randomWord.length()];
		
		for (int i=0; i<blankSpaces.length; i++) {
			blankSpaces[i] = '-';
		}
		
		System.out.println(blankSpaces);
		System.out.println("No. of alphabets to be guessed: "+randomWord.length()+"in 15 turns");
		Scanner sc = new Scanner(System.in);
		
		int turns = 0;
		boolean gameOver = false;
		int noOfSpaces = blankSpaces.length;
		
		while (!gameOver) {
			turns++;
			boolean letterFound = false;
			
			System.out.print("\nEnter an alphabet: ");
//			char alphabet = sc.next();
			char alphabet = sc.next().toUpperCase().charAt(0);
			
			for (int i=0; i<randomWord.length(); i++) {
				if (randomWord.charAt(i) == alphabet && blankSpaces[i] == '-') {
					blankSpaces[i] = alphabet;
					System.out.println(blankSpaces);
					noOfSpaces--;
					letterFound = true;
					break;
				}
//				else {
//					System.out.println("Wrong Alphabet");
//				}
			}
			
			if (!letterFound) {
				System.out.println("Wrong Alphabet");
			}
			
			if (noOfSpaces == 0) {
				System.out.println("\nHurray! You guessed the word");
				break;
			}
			
			if (turns == 15) {
				gameOver = true;
				System.out.println("\nOops! no more turns...You Lost");
			}
		}
		
		System.out.println("\nWord: " + randomWord);
		
		
	}

}
