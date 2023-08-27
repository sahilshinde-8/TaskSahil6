package com.aurionpro.model;

import java.util.Arrays;
import java.util.List;

public class CustomerTest {
		public static void main(String args[]) {
		// TODO Auto-generated method stub
	
			List<LineItem> itemList1 = Arrays.asList(
				    new LineItem(01, 3, new Product(1, "Maggi", 90, 10)),
				    new LineItem(01, 3, new Product(2, "Pasta", 80, 10)));
				  
				  List<LineItem> itemList2 = Arrays.asList(
				    new LineItem(01, 3, new Product(1, "Lays", 90, 10)),
				    new LineItem(01, 3, new Product(2, "Pepsi", 80, 10)));
				  
				  List<Order> ord1 = Arrays.asList(
				    new Order(11, "2023-01-01", itemList1),
				    new Order(12, "2023-02-01", itemList2));
				  
				  Customer cust1 = new Customer(101, "Sahil", ord1);
				  
				  System.out.println(cust1);
				  
				  System.out.println(cust1.totalCost());
		

	}

}
