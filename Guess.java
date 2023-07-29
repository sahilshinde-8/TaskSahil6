import java.util.Scanner;
class Guess{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number between 1 to 100 to guess ");
		int number = sc.nextInt();
		int max = 100;
		int min = 1;
		int range = max - min + 1;
		int random = (int)(Math.random() * range) + min;
		System.out.println(random);
		int turn = 1;
		if(number <= 100 && number >= 1){
			while(turn <= 6){
		
				if(random > number){
					System.out.println("larger number needed " + Math.abs(random - number) + " Was the Diff between your guess ");
					System.out.println("Would You like to try again Yes/No");
					String choice = sc.next();
					if(choice.equalsIgnoreCase("Yes")){
						System.out.println("Enter number between 1 to 100 to guess ");
						number = sc.nextInt();
						System.out.println(random);
						}
					else{
						break;
						}
		
				}
				else if(number > random){
					System.out.println("smaller number needed " + Math.abs(number - random) + " Was the Diff between your guess ");
					System.out.println("Would You like to try again Yes/No");
					String choice = sc.next();
						if(choice.equalsIgnoreCase("Yes")){
							System.out.println("Enter number between 1 to 100 to guess ");
							number = sc.nextInt();
							System.out.println(random);
						}
					else{
						break;
						}
			
				}
				else if(number == random){
					System.out.println("Congratulations! Thats a correct guess " + number);
					break;
				}
				else if(turn == 6 && number != random){
					System.out.println("This is your last turn (" + turn + ")and your guess was wrong ");
				}
				turn ++;
				}
		}
		else{
			System.out.println("Enter Num between 1 to 100 ");
			}
	}
	}