import java.util.Scanner;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

//import java.lang.reflect.*;

class ReflectionNotepad{
	public static void main(String args[]) throws ClassNotFoundException, NoSuchMethodException{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Class Name ");
		String className = sc.nextLine();
		
		Class<?> tempClass = Class.forName(className);
		
		System.out.println();
		System.out.println("***************Fields******************");
		System.out.println();
		
		//Field[] declearedFields = tempClass.getDeclaredFields();
		Field[] declearedFields = tempClass.getDeclaredFields();
		for(Field f: declearedFields){
			System.out.println(f);
		}
		
		System.out.println();
		System.out.println("***************Constructor******************");
		System.out.println();
		
		Constructor<?> [] declearedConstructor = tempClass.getConstructors();
		
		
		for(Constructor c: declearedConstructor){
			System.out.println(c);
		}
		
		System.out.println();
		System.out.println("***************Method******************");
		System.out.println();
		
		Method[] methods = tempClass.getMethods();
		
		for(Method m: methods) {
			System.out.println(m);
		}
		
		System.out.println();
	}
	
}