package com.aurionpro.test;

import java.util.LinkedList;

public class LinkListTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedList<String> lists = new LinkedList<>();
		System.out.println("***********ADD************");
		lists.add("C");
		lists.add("C++");
		lists.add("JAVA");
		lists.add("PYTHON");
		
		System.out.println("***********DISPLAY************");
		System.out.println(lists);
		
		System.out.println("*********REMOVE*************");
		lists.remove(2);
		lists.remove("PYTHON");
		
		System.out.println(lists);
		
		System.out.println("********ITERATOR*********");
		for(int i=0; i<lists.size(); i++) {
			System.out.println(lists.get(i));
		}
	}

}
